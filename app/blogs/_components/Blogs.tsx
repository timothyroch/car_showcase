import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
}

interface BlogsProps {
  numberOfBlogs?: number;
}

const Blogs: React.FC<BlogsProps> = ({ numberOfBlogs }) => {
  // Array of blog data for demonstration purposes
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Top 10 des conseils pour entretenir le moteur de votre voiture',
      image: '/engine.jpg',
      excerpt: 'Garder le moteur de votre voiture en bon état est crucial pour la performance et la longévité. Voici dix conseils essentiels pour garantir un fonctionnement fluide et efficace de votre moteur.',
    },
    {
      id: '2',
      title: 'Comment choisir les pneus parfaits pour votre véhicule',
      image: '/tire.jpg',
      excerpt: 'Choisir les bons pneus peut avoir un impact majeur sur la maniabilité, la sécurité et l’efficacité énergétique de votre voiture. Découvrez les critères à considérer pour sélectionner les meilleurs pneus pour votre véhicule.',
    },
    {
      id: '3',
      title: 'Les avantages du detailing régulier de votre voiture',
      image: '/detailing.jpg',
      excerpt: 'Le detailing régulier de votre voiture ne se limite pas à l’apparence. Il aide également à maintenir la valeur de votre véhicule et à prolonger sa durée de vie. Découvrez les nombreux avantages d’un entretien minutieux.',
    },
    {
      id: '4',
      title: 'Comprendre les voyants du tableau de bord de votre voiture',
      image: '/dashboard.jpg',
      excerpt: 'Les voyants du tableau de bord peuvent être déroutants et inquiétants. Apprenez ce que chaque voyant signifie et quelles actions entreprendre lorsqu’ils s’allument.',
    },
    {
      id: '5',
      title: 'Pourquoi investir dans une housse de voiture de haute qualité',
      image: '/cover.jpg',
      excerpt: 'Une housse de voiture de haute qualité peut protéger votre véhicule des intempéries, de la saleté et des dommages. Découvrez pourquoi investir dans une bonne housse est une décision judicieuse pour tout propriétaire de voiture.',
    },
    {
      id: '6',
      title: 'Les tâches d’entretien essentielles à effectuer chaque saison',
      image: '/entretiens.jpg',
      excerpt: 'Les différentes saisons apportent des défis variés pour votre véhicule. Découvrez les tâches d’entretien essentielles à réaliser pour maintenir votre voiture en excellent état tout au long de l’année.',
    },
  ];

  // Determine the blogs to display based on the numberOfBlogs prop
  const blogsToDisplay = numberOfBlogs ? blogPosts.slice(0, numberOfBlogs) : blogPosts;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogsToDisplay.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
          >
            <img
              alt={post.title}
              src={post.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {post.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {post.excerpt}
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                En lire plus

                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
