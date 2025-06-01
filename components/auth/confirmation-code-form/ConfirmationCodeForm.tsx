'use client';
import React, { useState, useTransition } from 'react';
import styles from '../AuthForm.module.scss';
import clsx from 'clsx';
import { SendConfirmationCodeSchema } from '@/schemas/schemas';
import zod from 'zod';
import ValidationError from '../validation-error/ValidationError';
import { useForm } from 'react-hook-form';
import FormError from '@/components/shared/FormError/FormError';
import { sendCode } from '@/actions/reset-password';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Button } from '@/components/ui';
import { AuthLink } from '@/components/shared/AuthLink/AuthLink';
import FormInput from '@/components/auth/form-input/FormInput';

import type { ForgetPasswordFormProps } from '@/app/auth/forget-password/page';
import { zodResolver } from '@hookform/resolvers/zod';
import FormSuccess from '@/components/shared/FormSuccess/FormSuccess';

export default function SendConfirmationCodeForm({ onStepChange }: ForgetPasswordFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<zod.infer<typeof SendConfirmationCodeSchema>>({
    resolver: zodResolver(SendConfirmationCodeSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (email: zod.infer<typeof SendConfirmationCodeSchema>) => {
    setError(null);
    setSuccess(null);
    startTransition(async () => {
      const result = await sendCode(email);
      setSuccess(result.success);
      setError(result.error);

      if (result.success) {
        localStorage.setItem('reset-password-email', email.email);

        setTimeout(() => {
          onStepChange(2);
        }, 2000);
      }
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
                  <FormInput type="email" disabled={isPending} label="Email Address" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.email} />
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
            Send Confirmation Code
          </Button>
        </div>

        <AuthLink question="Back to login page" href="/auth/login" title="Login" />
      </form>
    </Form>
  );
}
