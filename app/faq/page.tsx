import React from 'react';

const Page: React.FC = () => {
  const faqData = [
    {
      id: 1,
      title: 'Quels types de voitures vendez-vous ?',
      content:
        'Nous proposons une large gamme de voitures, y compris des berlines, des SUV, des camions et des véhicules électriques de différentes marques. Que vous recherchiez une voiture compacte pour la ville ou un véhicule de luxe, nous avons des options adaptées à vos besoins.',
      isOpen: true,
    },
    {
      id: 2,
      title: 'Proposez-vous des options de financement ?',
      content:
        'Oui, nous offrons une variété d’options de financement pour vous aider à acheter la voiture de vos rêves. Notre équipe peut vous aider à trouver un plan adapté à votre budget, que ce soit par des prêts traditionnels ou par location.',
      isOpen: false,
    },
    {
      id: 3,
      title: 'Puis-je échanger mon véhicule actuel ?',
      content:
        'Absolument ! Nous acceptons les échanges et offrons des prix compétitifs pour votre véhicule actuel. Notre processus d’échange est simple et direct, et la valeur peut être appliquée à l’achat de votre nouvelle voiture.',
      isOpen: true,
    },
    {
      id: 4,
      title: 'Proposez-vous des garanties sur les voitures que vous vendez ?',
      content:
        'Oui, tous nos véhicules sont couverts par une garantie standard. Nous proposons également des options de garantie prolongée pour une tranquillité d’esprit supplémentaire, couvrant divers aspects du véhicule selon votre choix.',
      isOpen: false,
    },
    {
      id: 5,
      title: 'Puis-je planifier un essai routier ?',
      content:
        'Bien sûr ! Vous pouvez facilement planifier un essai routier via notre site Web ou en contactant notre équipe de vente. Nous vous encourageons à essayer tout véhicule qui vous intéresse pour vous assurer qu’il correspond à vos attentes.',
      isOpen: true,
    },
    {
      id: 6,
      title: 'Quelle est la politique de retour ?',
      content:
        'Nous souhaitons que vous soyez entièrement satisfait de votre achat. Si pour une raison quelconque vous n’êtes pas satisfait de votre véhicule, nous offrons une politique de retour de 7 jours. Veuillez consulter notre page de politique de retour pour les détails complets.',
      isOpen: false,
    },
  ];

  return (
    <div className="space-y-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 pt-7 pb-7">
          Questions Fréquemment Posées
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Trouvez les réponses à certaines des questions les plus courantes concernant nos ventes de voitures et nos services.
        </p>
        <div className="mt-4 border-b-4 border-gray-300 w-1/4 mx-auto"></div>
      </header>

      <div className="space-y-4">
        {faqData.map((item) => (
          <details
            key={item.id}
            className="group [&_summary::-webkit-details-marker]:hidden"
            open={item.isOpen}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">{item.title}</h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700 pb-7">
              {item.content}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Page;
