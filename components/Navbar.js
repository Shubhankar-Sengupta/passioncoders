import React from 'react';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center md:mb-3 py-2 shadow-md">
      <div className="logo">
        <Link href="/">
          <a href="">
            <Image
              alt="coding_logo"
              src="/coding_logo.png"
              width={50}
              height={30}
            />
          </a>
        </Link>
      </div>

      <nav>
        <ul className="flex items-center space-x-6 text-xs">
          <Link href="/tshirts">
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href="/hoodies">
            <a href="">
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href="/stickers">
            <a href="">
              <li>Stickers</li>
            </a>
          </Link>
          <Link href="/mugs">
            <a href="">
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </nav>

      <div
        className="cart absolute right-0 mx-5 top-2"
        style={{ cursor: 'pointer' }}
      >
        <AiOutlineShoppingCart className="md:text-2xl" />
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
