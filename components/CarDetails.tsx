"use client";

import { Car } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image 
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-52 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={car.imageUrl}
                        alt={`${car.marque} ${car.modèle}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.marque} {car.modèle}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Année</h4>
                        <p className="text-black-100 font-semibold">{car.année}</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Catégorie</h4>
                        <p className="text-black-100 font-semibold">{car.catégorie}</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Motorisation</h4>
                        <p className="text-black-100 font-semibold">{car.motorisation}</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Puissance</h4>
                        <p className="text-black-100 font-semibold">{car.puissance} HP</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Économie d'essence</h4>
                        <p className="text-black-100 font-semibold">{car.économieEssence}</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Prix</h4>
                        <p className="text-black-100 font-semibold">{car.prix}</p>
                      </div>
                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey">Description</h4>
                        <p className="text-black-100 font-semibold">{car.description}</p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
