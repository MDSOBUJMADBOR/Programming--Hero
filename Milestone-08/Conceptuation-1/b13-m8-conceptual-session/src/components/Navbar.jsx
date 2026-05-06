"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";



const Navbar =  () => {
   const { 
        data, 
    } = authClient.useSession() 

    console.log(data)

    const user = data?.user

  const handleSignOut = () => {
     authClient.signOut()
  }
   

  return (
    <div className="p-5 border  flex justify-between items-center">
      <div>Logo</div>
      <ul className="flex gap-10 justify-center  text-2xl font-bold">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/models"}>Models</Link>
        </li>

         <li>
          <Link href={"/server-action"}>Server Action</Link>
        </li>

         <li>
          <Link href={"/signup"}>Sign up</Link>
          
        </li>

        <li>
          <Link href={"/signin"}>Sign in</Link>
        </li>

        <div className="text-xs">{user?.name}</div>

        <Button onClick={handleSignOut} variant="danger">SignOut</Button>
      </ul>

    </div>
  );
};

export default Navbar;
