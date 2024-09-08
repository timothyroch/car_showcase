'use client'

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { UserButton, useUser } from "@clerk/nextjs";

const NavBar = () => {
  const { isSignedIn } = useUser(); // Moved inside the function body

  return (
    <>
      {isSignedIn ? (
        <>
          <UserButton /> Profile
        </>
      ) : (
<>
  <CustomButton
    title="s'inscrire"
    btnType='button'
    containerStyles='text-primary-blue font-semibold border-2 border-primary-blue rounded-full bg-white min-w-[140px] px-6 py-2 hover:bg-primary-blue hover:text-white transition-all duration-300 shadow-md'
    href='/sign-up'
  />
  <CustomButton
    title='se connecter'
    btnType='button'
    containerStyles='text-primary-blue font-semibold border-2 border-primary-blue rounded-full bg-white min-w-[140px] px-6 py-2 hover:bg-primary-blue hover:text-white transition-all duration-300 shadow-md'
    href='/sign-in'
  />
</>
      )}
    </>
  );
};

export default NavBar;
