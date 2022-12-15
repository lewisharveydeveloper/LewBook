import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}
    <div className="w-screen">
      <div className="flex flex-wrap items-stretch gap-y-5 border-b-2 border-purple-600 px-5">
        <div className="grow">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div className="flex flex-wrap items-stretch">
          <div className="mr-6 flex flex-wrap items-center text-xl">
            <Link href="/about/">About</Link>
          </div>
          <ul className="flex flex-wrap items-center border-l-4 border-l-purple-500 pl-5 text-xl">
            <li className="mr-6">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-6">
              <Link href="/notyetbuiltlehar/">Profile</Link>
            </li>
            <li className="mr-6">
              <Link href="/blog/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-screen-md px-5">
      <div className="content py-5 text-xl">{props.children}</div>
      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </div>
    </div>
  </div>
);

export { Main };
