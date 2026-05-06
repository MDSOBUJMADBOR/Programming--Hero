'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
 const { 
        data: session, 
    } = authClient.useSession() 


const user = session?.user

const handleSignOut =async () => {
 await  authClient.signOut()
}

          return (
                    <div className='flex justify-between items-center p-5 border border-black'>
<h2>Logo</h2>
<ul className='text-2xl flex justify-between items-center gap-10'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/models'>Models</Link></li>          
          <li><Link href='/signup'>Sign Up</Link></li>
          <li><Link href='/signin'>Sign In</Link></li>
          <div className='text-xs '>
                    {user?.name}
          </div>
          <Button onClick={handleSignOut} variant='danger'> SignOut</Button>
</ul>


                    </div>
          );
};

export default Navbar;