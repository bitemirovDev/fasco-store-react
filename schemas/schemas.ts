import zod from 'zod';

const SignUpSchema = zod
  .object({
    first_name: zod.string().min(2, 'First name must be at least 2 characters'),
    last_name: zod.string().min(2, 'Last name must be at least 2 characters'),
    email: zod.string().email('Invalid email'),
    password: zod.string().min(5, 'Password must be at least 5 characters'),
    confirm_password: zod.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

const SignInSchema = zod.object({
  email: zod.string().email('Invalid email'),
  password: zod.string().min(1),
});

const SendConfirmationCodeSchema = zod.object({
  email: zod.string().email('Invalid email'),
});

const EnterConfirmationCodeSchema = zod.object({
  code: zod.string().min(6, 'Invalid code'),
});

const NewPasswordSchema = zod
  .object({
    password: zod.string().min(5, 'Password must be at least 5 characters'),
    confirm_password: zod.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export { SignInSchema, SignUpSchema, NewPasswordSchema, SendConfirmationCodeSchema, EnterConfirmationCodeSchema };
