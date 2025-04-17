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

interface NewPasswordFormProps {
  step: number;
  onStepChange: (step: number) => void;
}

export default function NewPasswordForm({ onStepChange, step }: NewPasswordFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('reset-password-email');
    setEmail(JSON.parse(storedEmail));
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
      const result = await saveNewPassword(values, email);
      setSuccess(result.success);
      setError(result.error);

      if (result.success) {
        localStorage.removeItem('reset-password-email');
        // немного подожди, чтобы пользователь увидел сообщение (по желанию)
        setTimeout(() => {
          redirect('/auth/login'); // ✅ редирект на логин
        }, 1500);
      }
    });
  };

  if (!step || step !== 3) return null;

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
            className={clsx(styles['submit'], 'btn--wide btn--small btn--primary')}
          >
            Save
          </Button>
        </div>

        <AuthLink question="Back to login" href="/auth/login" title="Login" />
      </form>
    </Form>
  );
}
