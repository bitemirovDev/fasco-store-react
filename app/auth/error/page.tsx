'use client';
import Image from 'next/image';
import SomethingWentWrong from '@/public/img/auth/som-went-wrong.png';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function AuthErrorPage() {
  return (
    <>
      <div className="flex flex-col max-h-1/2 justify-center items-center  p-5 rounded-xl mb-10">
        Oops! Something went wrong. Please, try again later...
        <Image src={SomethingWentWrong} alt="Something went wrong" className="w-1/2 mx-auto" />
      </div>
      <Link href={'/auth/login'}>
        <Button className="btn--primary btn--wide btn--small">Back to Login</Button>
      </Link>
    </>
  );
}
