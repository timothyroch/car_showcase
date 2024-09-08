import React from 'react';
import { ArrowRight } from 'lucide-react'; // Importing an icon from lucide-react
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-[100vh]'>
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 pt-7">
          Nous Contacter
        </h1>

        <div className="mt-4 border-b-4 border-gray-300 w-1/4 mx-auto"></div>
      </header>
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-none dark:bg-none"
      >
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
  <img
    src="\louisfelix.jpg"
    alt=""
    className="w-44 h-44 rounded-lg object-cover"
  />

  <div className="sm:w-3/4">
    <h3 className="text-lg font-medium text-gray-900">Ici pour vous aider</h3>
    <p className="mt-0.5 text-gray-700">
      Que vous cherchiez à acheter, louer ou ayez des questions sur nos véhicules, nous sommes là pour vous aider.
      Contactez-nous en utilisant le formulaire ci-dessous, et un membre de notre équipe vous répondra sous peu.
    </p>
  </div>
</div>





        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-2xl mx-auto"
        >
          <input
            type="hidden"
            name="access_key"
            value="c42e1e7b-2eba-4017-a674-4e5b99155445"
          />
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Entrez votre nom"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Entrez votre email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              required
              name="email"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Entrez votre message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
            required
            name="message"
          />
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          >
            Envoyer
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
