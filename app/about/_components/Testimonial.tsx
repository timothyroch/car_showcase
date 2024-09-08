// Add this at the top of your file
'use client';

import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

interface TestimonialProps {
  testimonials: {
    id: string;
    text: string;
    author: string;
    rating: number; // Assuming rating is out of 5 stars
  }[];
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      '#keen-slider',
      {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      }
    );

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
    keenSliderNext?.addEventListener('click', () => keenSlider.next());
    keenSliderPreviousDesktop?.addEventListener('click', () => keenSlider.prev());
    keenSliderNextDesktop?.addEventListener('click', () => keenSlider.next());
  }, []);

  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ne vous fiez pas seulement à notre parole...
              </h2>

              <p className="mt-4 text-gray-700">
                Découvrez les avis de nos clients satisfaits qui ont trouvé leur voiture idéale avec nous.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Diapositive précédente"
                  id="keen-slider-previous-desktop"
                  className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-800 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Diapositive suivante"
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-800 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0 ">
              <div id="keen-slider" className="keen-slider">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="keen-slider__slide">
                    <blockquote
                      className="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12 rounded-md"
                    >
                      <div>
                        <div className="flex gap-0.5 text-green-500">
                          {/* Add star icons based on testimonial.rating */}
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="w-5 h-5"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.27l-7.19-.62L12 2 9.19 8.65 2 9.27l5.46 4.7L5.82 21z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                            {testimonial.text}
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; {testimonial.author}
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
