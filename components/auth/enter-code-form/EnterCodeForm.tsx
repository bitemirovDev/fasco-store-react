'use client';
import React, { useState, useTransition } from 'react';
import styles from '../AuthForm.module.scss';
import clsx from 'clsx';
import { EnterConfirmationCodeSchema } from '@/schemas/schemas';
import zod from 'zod';
import ValidationError from '../validation-error/ValidationError';
import { useForm } from 'react-hook-form';
import FormError from '@/components/shared/FormError/FormError';
import { verifyConfirmationCode } from '@/data/confirmation-codes';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Button } from '@/components/ui';
import FormInput from '@/components/auth/form-input/FormInput';
import type { ForgetPasswordPageProps } from '@/app/auth/forget-password/page';
import { zodResolver } from '@hookform/resolvers/zod';

export default function EnterCodeForm({ onStepChange, step }: ForgetPasswordPageProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<zod.infer<typeof EnterConfirmationCodeSchema>>({
    resolver: zodResolver(EnterConfirmationCodeSchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmitEnterCode = async (value: zod.infer<typeof EnterConfirmationCodeSchema>) => {
    setError(null);
    startTransition(async () => {
      const result = await verifyConfirmationCode(value);
      setError(result.error);

      if (result.success) onStepChange(3);
    });
  };

  if (!step || step !== 2) return null;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitEnterCode)} className={styles['form']}>
        <div className={styles['form-group']}>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <FormInput type="text" disabled={isPending} label="Enter Code" placeholder="" {...field} />
                </FormControl>
                <ValidationError error={form.formState.errors.code} />
              </FormItem>
            )}
          />
        </div>

        {error && <FormError error={error} />}

        <div className={styles['buttons']}>
          <Button
            type="submit"
            disabled={isPending}
            className={clsx(styles['submit'], 'btn--wide btn--small btn--primary')}
          >
            Enter Confirmation Code
          </Button>
        </div>

        <span onClick={() => onStepChange(1)}>Didnt receive code? Try again</span>
      </form>
    </Form>
  );
}
