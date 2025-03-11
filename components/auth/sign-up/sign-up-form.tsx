'use client';
import React from 'react';
import styles from './sign-up-form.module.scss';
import FormInput from '../form-input/FormInput';
import { Button } from '@/components/ui';
import clsx from 'clsx';
import Link from 'next/link';
import zod from 'zod';

import { loginUser, registerUser } from '@/actions/auth';
import { redirect } from 'next/navigation';

const SignUpSchema = zod
  .object({
    first_name: zod.string().min(2, 'First name must be at least 2 characters'),
    last_name: zod.string().min(2, 'Last name must be at least 2 characters'),
    email: zod.string().email('Invalid email'),
    phone: zod.string().optional(),
    password: zod.string().min(5, 'Password must be at least 5 characters'),
    confirm_password: zod.string().min(5, 'Password must be at least 5 characters'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export default function SignUpForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const parsed = SignUpSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      console.log(parsed.error);
      return {
        message: 'Invalid form data',
      };
    }

    const fullName = `${parsed.data.first_name} ${parsed.data.last_name}`;
    const { email, password } = parsed.data;

    const { user, error } = await registerUser(fullName, email, password);

    if (error) {
      return { message: error };
    } else if (user) {
      await loginUser(email, password);
      redirect('/');
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <FormInput type="text" name="first_name" id="first_name" label="First Name" placeholder="" />
        <FormInput type="text" name="last_name" id="last_name" label="Last Name" placeholder="" />
      </div>
      <div className={styles['form-group']}>
        <FormInput type="email" name="email" id="email" label="Email" placeholder="" />
        <FormInput type="tel" name="phone" id="phone" label="Phone" placeholder="" />
      </div>
      <div className={styles['form-group']}>
        <FormInput type="password" name="password" id="password" label="Password" placeholder="" />
        <FormInput
          type="password"
          name="confirm_password"
          id="confirm_password"
          label="Confirm password"
          placeholder=""
        />
      </div>

      <Button type="submit" className={clsx(styles['sign-up__submit'], 'btn btn--wide btn--small btn--primary')}>
        Create Account
      </Button>

      <p>
        Already have an account?{' '}
        <Link className={styles['login-link']} href="/signIn">
          Login
        </Link>
      </p>
    </form>
  );
}
