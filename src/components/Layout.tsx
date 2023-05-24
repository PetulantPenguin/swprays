import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      {props.children}
      <div className="fixed bottom-0 flex h-16 w-full gap-4 bg-white p-2 text-slate-950 dark:bg-slate-800 dark:text-white">
        <Link
          className="flex grow items-center justify-center border border-white text-white"
          href="/about"
        >
          About
        </Link>
        <Link
          className="flex grow items-center justify-center border border-white text-2xl text-white"
          href="/"
        >
          Pray
        </Link>
        <Link
          className="flex grow items-center justify-center border border-white text-white"
          href="/resources"
        >
          Resources
        </Link>
      </div>
    </>
  );
}
