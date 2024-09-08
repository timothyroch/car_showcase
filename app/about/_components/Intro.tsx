import React from 'react'

const Intro = () => {
  return (
    <div>
          <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Photo LF"
                src="/hero.png"
              />
            </div>
          </div>

          <div className="relative flex items-center border shadow-md rounded-md">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:white"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-blue-900">
                À Propos de Nous
              </h2>

              <p className="mt-4 text-gray-700">
                Chez [Nom de l'Entreprise], nous sommes passionnés par le fait de vous offrir la meilleure expérience d'achat de voiture. Notre équipe de professionnels dévoués est engagée à vous aider à trouver le véhicule parfait qui répond à vos besoins et préférences. Avec des années d'expérience et une profonde compréhension de l'industrie automobile, nous nous efforçons de vous offrir un service et un soutien exceptionnels à chaque étape du processus.
              </p>

              <p className="mt-4 text-gray-700">
                Notre mission est de garantir une satisfaction client de premier ordre et de bâtir des relations durables avec nos clients. Nous croyons en la transparence, l'intégrité et une approche personnalisée pour nous assurer que votre parcours d'achat de voiture soit aussi fluide et agréable que possible.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-800"
              >
                En Savoir Plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Intro