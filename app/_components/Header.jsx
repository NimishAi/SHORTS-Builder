'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '@/app/provider'
import Link from 'next/link'

const Header = () => {
  const { user } = useAuthContext();
  return (
    <div className='p-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
            <h2 className='text-2xl font-bold'>Video Generator</h2>
        </div>
        <div>
            {!user ? (
                <Authentication>
                    <Button>Get Started</Button>
                </Authentication>
            ) : (
                <div className='flex items-center gap-3'>
                    <Link href="/dashboard">
                        <Button variant="secondary">Dashboard</Button>
                    </Link>
                    <Image src={user?.photoURL} alt="userImage" width={40} height={40} className='rounded-full'></Image>
                </div>
            )}
            
        </div>
    </div>
  )
}

export default Header