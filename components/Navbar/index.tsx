import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="relative container mx-auto p-6 px-8">
        <div className="sticky md:flex md:items-center md:justify-between">
          <div className="flex justify-center">
            <a href="#home" >
              <Image
                width={90}
                height={90}
                src="/images/NetFlight_logo.svg"
                alt="NetFlight Logo"
              />
            </a>
          </div>
          <ul className="hidden md:flex md:space-x-8">
            <li className="">
              <a href="#home">Home</a>
            </li>
            <li className="">
              <a href="#about">About</a>
            </li>
            <li className="">
              <a href="#services">Services</a>
            </li>
            <li className="">
              <a href="#network">Network</a>
            </li>
            <li className="">
              <a href="#team">Team</a>
            </li>
            <li className="">
              <a href="#qa">Q&A</a>
            </li>
          </ul>
          <a
            className="hidden md:block text-color3 bg-primary p-3 px-8 pt-2 rounded-2xl hover:bg-color2 "
            href="#contact"
          >
            Contact
          </a>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// "use client";

// import { useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { FiMenu } from 'react-icons/fi'

// import NavLogo from '../../public/images/NetFlight_logo.svg'

// const Nav = () => {
//     const [  open, setOpen ] = useState( false )
//   return (
//     <>
//     <header className="border-b border-gray-300 py-2">
//         <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
//             <Link href="/">
//         <Image
//             src={NavLogo}
//             alt='logo'
//             width={220}
//             height={55}
//             className='cursor-pointer'
//           />
//           </Link>
//           <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
//           <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
//             <ul className="text-base text-gray-600 lg:flex lg:justify-between">
//                 <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
//                     <Link href="/">Home</Link>

//                 </li>
//                 <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
//                     <Link href="/about">About</Link>

//                 </li>
//                 <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
//                     <Link href="/register">Register</Link>

//                 </li>
//                 <li className="py-2 px-4 lg:px-6 lg:py-2 bg-blue-700 text-white rounded-xl font-semibold">
//                     <Link href="/login">Login</Link>

//                 </li>
//             </ul>
//          </nav>
//         </div>

//     </header>

//     </>

//   )
// }

// export default Nav
