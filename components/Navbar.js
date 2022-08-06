import React, { useRef } from 'react';
import Image from 'next/image';
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const myRef = useRef(null);
  const toggleCart = () => {
    if (myRef.current.classList.contains('translate-x-full')) {
      myRef.current.classList.remove('translate-x-full');
      myRef.current.classList.add('translate-x-0');
    } else {
      myRef.current.classList.add('translate-x-full');
      myRef.current.classList.remove('translate-x-0');
    }
  };

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
        onClick={toggleCart}
        className="cart absolute right-0 mx-5 top-2"
        style={{ cursor: 'pointer' }}
      >
        <AiOutlineShoppingCart className="md:text-2xl" />
      </div>

      {/** This is the cart component design*/}
      <div
        ref={myRef}
        className="sidebar bg-pink-200 absolute top-0 right-0 z-40 p-10 transform transition-transform translate-x-full"
      >
        <h3 className="text-sm font-semibold">Shopping Cart</h3>
        <span className="absolute top-0 right-0 p-2">
          <AiFillCloseCircle className="cursor-pointer" onClick={toggleCart} />
        </span>
        <ol className="text-xs mt-2">
          <li className="flex">
            Tshirt- Wear the code
            <span className="flex items-center mx-2">
              <AiFillMinusCircle className="mx-2 cursor-pointer" />1
              <AiFillPlusCircle className="mx-2 cursor-pointer" />{' '}
            </span>
          </li>
          <li className="flex">
            Hoodies
            <span className="flex items-center mx-2">
              <AiFillMinusCircle className="mx-2 cursor-pointer" />1
              <AiFillPlusCircle className="mx-2 cursor-pointer" />{' '}
            </span>
          </li>
          <li className="flex">
            Stickers
            <span className="flex items-center mx-2">
              <AiFillMinusCircle className="mx-2 cursor-pointer" />1
              <AiFillPlusCircle className="mx-2 cursor-pointer" />{' '}
            </span>
          </li>
          <li className="flex">
            Mugs
            <span className="flex items-center mx-2">
              <AiFillMinusCircle className="mx-2 cursor-pointer" />1
              <AiFillPlusCircle className="mx-2 cursor-pointer" />{' '}
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
