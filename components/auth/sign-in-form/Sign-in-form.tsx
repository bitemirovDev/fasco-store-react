'use client';
import React, { useState, useTransition } from 'react';
import styles from './sign-in-form.module.scss';
import clsx from 'clsx';
import { Button } from '@/components/ui';
import Link from 'next/link';
import FormInput from '../form-input/FormInput';
import { signIn } from 'next-auth/react';
import { Link as LinkComponent } from '@/components/shared/Link/Link';
import { SignInSchema } from '@/schemas/schemas';

import zod from 'zod';

import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import ValidationError from '../validation-error/ValidationError';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '@/actions/auth';

export default function SignInForm() {
  const [error, setError] = useState<string | null>('');
  const [succes, setSucces] = useState<string | null>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<zod.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: zod.infer<typeof SignInSchema>) => {
    setError(null);
    setSucces(null);
    startTransition(() => {
      loginUser(values).then((data) => {
        setError(data.error);
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles['form']}>
        <div className={styles['form-group']}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput type="email" disabled={isPending} label="Email" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.email} />
              </FormItem>
            )}
          />
        </div>
        <div className={styles['form-group']}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput type="password" disabled={isPending} label="Password" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.password} />
              </FormItem>
            )}
          />
        </div>

        <div style={{ width: '100%', textAlign: 'end' }}>
          <LinkComponent href={'/forget-password'}>Forget password?</LinkComponent>
        </div>

        {error && <p className={styles['error']}>{error}</p>}
        {succes && <p className={styles['succes']}>{succes}</p>}

        <div className={styles['buttons']}>
          <Button className={clsx(styles['submit'], 'btn--wide btn--small btn--primary')}>Login</Button>
          <p>
            Don't have an account? <LinkComponent href={'/register'}>Register now</LinkComponent>
          </p>
        </div>
      </form>
    </Form>
  );
}
