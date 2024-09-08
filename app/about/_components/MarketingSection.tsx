import React from 'react';
import { Car, DollarSign, GitGraphIcon, Megaphone, Target } from 'lucide-react';

const MarketingSection: React.FC = () => {
  return (
    <section className=" text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Notre Expertise</h2>

          <p className="mt-4 text-gray-600">
            Découvrez comment notre application peut transformer votre manière de vendre des voitures. Que vous cherchiez à attirer plus de clients ou à améliorer votre gestion des ventes, nous avons les outils qu'il vous faut.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-gray-400 bg-white"
            href="#"
          >
            <Car className="w-10 h-10 text-gray-500" />

            <h2 className="mt-4 text-xl font-bold">Gestion des véhicules</h2>

            <p className="mt-1 text-sm text-gray-600">
              Optimisez la gestion de votre inventaire de voitures avec notre interface facile à utiliser. Suivez vos stocks et gérez les détails des véhicules en un rien de temps.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-gray-400 bg-white"
            href="#"
          >
            <DollarSign className="w-10 h-10 text-gray-500" />

            <h2 className="mt-4 text-xl font-bold">Augmentation des ventes</h2>

            <p className="mt-1 text-sm text-gray-600">
              Utilisez nos outils analytiques pour identifier des opportunités de vente et maximiser vos profits. Recevez des recommandations personnalisées pour optimiser vos stratégies de vente.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-gray-400 bg-white"
            href="#"
          >
            <GitGraphIcon className="w-10 h-10 text-gray-500" />

            <h2 className="mt-4 text-xl font-bold">Analyse des performances</h2>

            <p className="mt-1 text-sm text-gray-600">
              Analysez vos performances de vente avec des rapports détaillés. Identifiez les tendances et ajustez vos stratégies en fonction des données.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-gray-400 bg-white"
            href="#"
          >
            <Megaphone className="w-10 h-10 text-gray-500" />

            <h2 className="mt-4 text-xl font-bold">Marketing ciblé</h2>

            <p className="mt-1 text-sm text-gray-600">
              Lancez des campagnes marketing ciblées pour attirer de nouveaux clients. Utilisez des outils de segmentation pour atteindre votre audience avec des messages pertinents.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-gray-400 bg-white"
            href="#"
          >
            <Target className="w-10 h-10 text-gray-500" />

            <h2 className="mt-4 text-xl font-bold">Objectifs personnalisés</h2>

            <p className="mt-1 text-sm text-gray-600">
              Définissez et suivez vos objectifs de vente personnels. Recevez des alertes et des recommandations pour rester sur la bonne voie et atteindre vos objectifs.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-gray-400 hover:shadow-gray-400 bg-white"
            href="#"
          >
            <Target className="w-10 h-10 text-gray-500" />

            <h2 className="mt-4 text-xl font-bold">Objectifs personnalisés</h2>

            <p className="mt-1 text-sm text-gray-600">
              Définissez et suivez vos objectifs de vente personnels. Recevez des alertes et des recommandations pour rester sur la bonne voie et atteindre vos objectifs.
            </p>
          </a>
        </div>

      
      </div>
    </section>
  );
};

export default MarketingSection;
