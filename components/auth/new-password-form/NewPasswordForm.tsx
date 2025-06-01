'use client';
import React, { useEffect, useState, useTransition } from 'react';
import styles from '../AuthForm.module.scss';
import clsx from 'clsx';
import { NewPasswordSchema } from '@/schemas/schemas';
import zod from 'zod';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Button } from '@/components/ui';
import { AuthLink } from '@/components/shared/AuthLink/AuthLink';
import FormInput from '@/components/auth/form-input/FormInput';
import FormError from '@/components/shared/FormError/FormError';
import ValidationError from '../validation-error/ValidationError';
import { saveNewPassword } from '@/actions/reset-password';
import { zodResolver } from '@hookform/resolvers/zod';

import { redirect } from 'next/navigation';
import FormSuccess from '@/components/shared/FormSuccess/FormSuccess';

export default function NewPasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const localStoredEmail = localStorage.getItem('reset-password-email');
    if (localStoredEmail) {
      setEmail(localStoredEmail);
    } else {
      setError('Something went wrong. Please restart the password reset process.');
    }
  }, []);

  const form = useForm<zod.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirm_password: '',
    },
  });

  const onSubmit = async (values: zod.infer<typeof NewPasswordSchema>) => {
    setError(null);
    setSuccess(null);
    startTransition(async () => {
      if (!email) return setError('Something went wrong. Please restart the password reset process.');
      const result = await saveNewPassword(values, email);
      setSuccess(result.success);
      setError(result.error);

      if (result.success) {
        localStorage.removeItem('reset-password-email');
        setTimeout(() => {
          redirect('/auth/login');
        }, 1500);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles['form']}>
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

        <div className={styles['form-group']}>
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput type="password" disabled={isPending} label="Confirm Password" placeholder="" {...field} />
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
            className={clsx(styles['submit'], 'btn--wide btn--sm btn--primary')}
          >
            Save
          </Button>
        </div>

        <AuthLink question="Back to login" href="/auth/login" title="Login" />
      </form>
    </Form>
  );
}
