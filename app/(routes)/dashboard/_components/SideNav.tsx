'use client'

import { useState } from 'react'
import { CustomButton } from '@/components'
import NavBar from '@/components/Navbar'
import { UserButton, useUser } from '@clerk/nextjs'
import { Layout, LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, CarFront, CarFrontIcon, CircleHelp, Headset, Menu as BurgerIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
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
    <div>
      {/* Desktop View */}
      <div className='hidden xl:flex h-[10vh] p-5 border shadow-sm justify-between items-center'>
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

      {/* Mobile View */}
      <div className='xl:hidden flex items-center justify-between p-5 border shadow-sm'>
        <div className='flex items-center space-x-4'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={60}
            height={60}
          />
        </div>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className='p-2'>
          <BurgerIcon size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 z-50 left-0 w-64 h-full bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lx:hidden`}>
        <div className='p-5'>
          <button onClick={() => setSidebarOpen(false)} className='text-gray-600'>
            <BurgerIcon size={24} className='rotate-180' />
          </button>
        </div>
        <div className='flex flex-col space-y-4 p-5'>
          {menuList.map((menu) => (
            <Link href={menu.path} key={menu.id} onClick={() => setSidebarOpen(false)}>
              <h2
                className={`
                  flex gap-2 items-center text-gray-500 font-medium cursor-pointer rounded-md 
                  hover:text-primary hover:bg-blue-100 p-2 
                  ${path === menu.path && 'text-primary bg-blue-100'}
                  text-lg          // Default font size
                `}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideNav
