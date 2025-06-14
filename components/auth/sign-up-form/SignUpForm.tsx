'use client';
import React, { useState, useTransition } from 'react';
import styles from '../AuthForm.module.scss';
import FormInput from '../form-input/FormInput';
import { Button } from '@/components/shared/Button';
import clsx from 'clsx';
import zod from 'zod';
import { registerUser } from '@/actions/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schemas/schemas';
import { AuthLink } from '@/components/shared/AuthLink/AuthLink';

import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import ValidationError from '../validation-error/ValidationError';
import FormSuccess from '@/components/shared/FormSuccess/FormSuccess';
import FormError from '@/components/shared/FormError/FormError';

export default function SignUpForm() {
  const [error, setError] = useState<string | null>('');
  const [success, setSuccess] = useState<string | null>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<zod.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      confirm_password: '',
    },
  });

  const onSubmit = async (values: zod.infer<typeof SignUpSchema>) => {
    setError(null);
    setSuccess(null);
    startTransition(async () => {
      await registerUser(values).then((data) => {
        if (data.success) setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <Form {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles['form-group']}>
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput disabled={isPending} label="First Name" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.first_name} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput disabled={isPending} label="Last Name" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.last_name} />
              </FormItem>
            )}
          />
        </div>

        <div className={styles['form-group']}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput
                    disabled={isPending}
                    type="email"
                    id="email"
                    label="Email Address"
                    placeholder=""
                    {...field}
                  />
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
                  <FormInput disabled={isPending} type="password" label="Password" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.password} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput disabled={isPending} type="password" label="Confirm password" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.confirm_password} />
              </FormItem>
            )}
          />
        </div>

        {error && <FormError error={error} />}
        {success && <FormSuccess success={success} />}

        <div className={styles['buttons']}>
          <Button
            type="submit"
            disabled={isPending}
            className={clsx(styles['sign-up__submit'], 'btn--wide btn--sm btn--primary')}
          >
            {isPending ? 'Creating...' : 'Create Account'}
          </Button>
        </div>

        <AuthLink question="Already have an account?" href="/auth/login" title="Login" />
      </form>
    </Form>
  );
}
