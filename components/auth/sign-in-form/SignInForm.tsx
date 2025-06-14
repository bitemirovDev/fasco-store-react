'use client';
import React, { useState, useTransition } from 'react';
import clsx from 'clsx';
import FormInput from '../form-input/FormInput';
import { SignInSchema } from '@/schemas/schemas';
import zod from 'zod';
import ValidationError from '../validation-error/ValidationError';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '@/actions/auth';
import { useSearchParams } from 'next/navigation';
import FormSuccess from '@/components/shared/FormSuccess/FormSuccess';
import useCartStore from '@/store/useCartStore';

// components
import FormError from '@/components/shared/FormError/FormError';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { AuthLink } from '@/components/shared/AuthLink/AuthLink';
import { Button } from '@/components/ui';

import { useRouter } from 'next/navigation';

// styles
import styles from '../AuthForm.module.scss';

export default function SignInForm() {
  const urlSearchParams = useSearchParams();
  const router = useRouter();

  const urlError =
    urlSearchParams.get('error') === 'OAuthAccountNotLinked' ? 'Email is used by another account or provider' : '';

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const { setIsAuthenticated, setCartItems } = useCartStore();

  const form = useForm<zod.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: zod.infer<typeof SignInSchema>) => {
    setError(null);
    startTransition(() => {
      loginUser(values).then((data) => {
        if (!data.success) return setError(data.error);
        setSuccess(data.success);

        if (data.success && data.cart) {
          setIsAuthenticated(true);
          setCartItems(data.cart.cartItems);

          setTimeout(() => {
            router.push('/');
          }, 2000);
        }
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

        <div className="flex justify-end w-full">
          <AuthLink href="/auth/forget-password" title="Forget password?" />
        </div>

        <FormError error={error || urlError} />
        {success && <FormSuccess success={success} />}

        <div className={styles['buttons']}>
          <Button
            type="submit"
            disabled={isPending}
            className={clsx(styles['submit'], 'btn--wide btn--sm btn--primary')}
          >
            Login
          </Button>
        </div>

        <AuthLink question="Don't have an account?" href="/auth/register" title="Register now" />
      </form>
    </Form>
  );
}
