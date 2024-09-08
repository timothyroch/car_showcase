'use client'

import { CustomButton } from '@/components'
import NavBar from '@/components/Navbar'
import { UserButton, useUser } from '@clerk/nextjs'
import { Layout, LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, CarFront, CarFrontIcon, CircleHelp, Headset  } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const SideNav = () => {

  const menuList = [
    {
      id: 1,
      name: 'Acceuil',
      icon: LayoutGrid,
      path: '/'
    },
    {
      id: 2,
      name: 'Voitures',
      icon: CarFrontIcon,
      path: '/search'
    },
    {
      id: 3,
      name: 'FAQ',
      icon: CircleHelp,
      path: '/faq'
    },
    {
      id: 4,
      name: 'Blogs',
      icon: CircleHelp,
      path: '/blogs'
    },
    {
      id: 5,
      name: 'À propos de nous',
      icon: CircleHelp,
      path: '/about'
    },
    {
      id: 6,
      name: 'Nous contacter',
      icon: Headset,
      path: '/contact'
    }
]

  const path = usePathname();

  return (
    <div className='h-[10vh] p-5 border shadow-sm flex justify-between items-center'>
      <div className='flex items-center space-x-4'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={90}
          height={90}
        />
      </div>
      <div className='flex space-x-4'>
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <h2
              className={`
                flex gap-2 items-center text-gray-500 font-medium cursor-pointer rounded-md 
                hover:text-primary hover:bg-blue-100 p-2 
                ${path === menu.path && 'text-primary bg-blue-100'}
                text-lg          // Default font size
                md:text-base     // Smaller font size on md screens
                lg:text-sm       // Even smaller font size on lg screens
              `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className='flex gap-2 items-center'>
        <NavBar />
      </div>
    </div>

  );
}

export default SideNav