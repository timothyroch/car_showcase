"use client";

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { OptionProps } from '@/types';
import { updateSearchParams } from '@/utils';

interface CustomFilterProps {
  title: string;
  options: string | number | OptionProps[]; // Updated type
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();

  // Normalize options to an array
  const validOptions: OptionProps[] = Array.isArray(options) ? options : [{ title: options.toString(), value: options.toString() }];
  const [selected, setSelected] = useState(validOptions[0] || { title: '', value: '' });

  const handleUpdateParams = (e: OptionProps) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName, { scroll: false });
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            {/* Safely access selected.title */}
            <span className="block truncate">{selected?.title || 'Select an option'}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {validOptions.length > 0 ? (
                validOptions.map((option) => (
                  <Listbox.Option
                    key={option.value} // Use unique identifier
                    value={option}
                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  >
                    {({ selected }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))
              ) : (
                <div className="p-4 text-gray-500">No options available</div>
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
