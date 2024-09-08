"use client";

import { useRouter } from 'next/navigation';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, href, isDisabled }: CustomButtonProps) => {
  const router = useRouter();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (handleClick) {
      handleClick(event); // Pass the event to the handleClick function
    }

    if (href) {
      router.push(href); // Redirect to the specified href
    }
  };

  return (
    <button 
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleButtonClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image 
            src={rightIcon}
            alt="right icon"
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
