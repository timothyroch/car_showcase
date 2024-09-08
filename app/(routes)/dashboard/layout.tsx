'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';
import LoadingSpinner from './_components/LoadingSpinner';


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {

        setLoading(false);
      
    }
  }, [isLoaded, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>

      <div className=''>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
