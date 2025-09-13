import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/424/483/non_2x/premium-letter-mm-logo-design-with-water-wave-concept-mm-letter-logo-design-with-modern-trendy-vector.jpg"
            alt="Medimeet Logo"
            width={200}
            height={100}
            className="h-10 w-auto object-contain"
          />
          <span className="ml-3 text-xl font-bold text-blue-600">MediMeet</span>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="secondary">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
