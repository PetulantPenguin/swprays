import type { ReactNode } from 'react';
import { useEffect } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.theme = 'light';
    localStorage.theme = 'dark';
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="w-full px-1 antialiased">
      {props.meta}

      <div className="mx-auto max-w-screen-md">
        <main className="content py-5 text-xl">{props.children}</main>
      </div>
    </div>
  );
};

export { Main };
