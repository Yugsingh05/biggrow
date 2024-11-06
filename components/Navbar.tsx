import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth(); // todo , add google auth in this app

  return (
    <header className="px-5 py-3 bg-gray-50 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" height={30} width={144} />
        </Link>

        <div className="flex  items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
             
      
             <button className="p-[3px] relative" type="submit">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent" >
    Login
  </div>
</button>
      
              {/* <button type="submit">Login</button> */}
            </form>
          )}
        </div>
      </nav>

      <nav />
    </header>
  );
};

export default Navbar;
