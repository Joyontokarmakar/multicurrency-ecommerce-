'use client';

import React from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';

import { NavLinks } from '../../../data/content';
import Logo from '../../common/logo';

const NavMobile = ({ onClickClose }) => {
  return (
    <div className="h-screen w-full divide-y divide-neutral-300 overflow-y-auto bg-white py-2 shadow-lg ring-1 transition">
      <div className="px-5 py-2">
        <Logo className="block" />
        <span className="absolute right-2 top-2 p-1" onClick={onClickClose}>
          <MdClose />
        </span>
      </div>
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {NavLinks.map((item) => (
          <li key={item.id}>
            <Link href={item.href} onClick={onClickClose} className="capitalize">
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
