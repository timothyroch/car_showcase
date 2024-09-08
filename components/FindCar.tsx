'use client'

import React, { useState } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ArrowLeft, ArrowRight, Router } from 'lucide-react'; 
import Question20 from './components/Question20';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question0 from './components/Question0';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Question7 from './components/Question7';
import Question8 from './components/Question8';
import Question9 from './components/Question9';
import Question10 from './components/Question10';
import Question11 from './components/Question11';
import Question12 from './components/Question12';
import Question13 from './components/Question13';
import Question14 from './components/Question14';
import SuccessMessage from './components/SuccessMessage'; 
import Question15 from './components/Question15';
import Question16 from './components/Question16';
import Question17 from './components/Question17';
import Question18 from './components/Question18';
import Question19 from './components/Question19';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

interface QuizProps {
  isOpen: boolean;
  closeModal: () => void;
}

const FindCar: React.FC<QuizProps> = ({ isOpen, closeModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ question: string, answer: string }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission state
  const [answerToQuestion2, setAnswerToQuestion2] = useState<string | null>(null); 
  const [answerToQuestion3, setAnswerToQuestion3] = useState<string | null>(null); 
  const {user} = useUser();
  const router = useRouter();


  const handleAnswer = (answer: string) => {
    const question = questions[currentQuestion].text;
  
    // Update answer to question 2
    if (currentQuestion === 1) {
      setAnswerToQuestion2(answer);
    }
  
    if (currentQuestion === 2) {
      setAnswerToQuestion3(answer);
    }
  
    // Handle special case where answer is 'stop'
    if (answer === 'stop') {
      closeModal();
      const carSection = document.getElementById("car");
      if (carSection) {
        carSection.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
  
    // Handle specific answer case
    if (answer === 'J\'ai un modèle de voiture spécifique en tête') {
      setCurrentQuestion(15);
      return; // Exit early to avoid further processing
    }
  
    // Skip from Question 14 to Question 20
    if (currentQuestion === 14) {
      setCurrentQuestion(20); // Skip to Question 20
      return; // Exit early to avoid further processing
    }
  
    // Handle 'non' answer and other answers
    if (answer === 'non') {
      setCurrentQuestion(8);
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
      }
    }
    setAnswers(prevAnswers => [
      ...prevAnswers,
      { question, answer }
    ]);
  };


  
  

  // Function to handle sending answers to the seller
  const handleSendToSeller = async () => {
    /*const formData = new FormData();
    formData.append('access_key', 'c42e1e7b-2eba-4017-a674-4e5b99155445');
    formData.append('name', user?.fullName || 'User'); // Include user name
    formData.append('email', user?.emailAddresses[0].emailAddress || 'user@example.com'); // Include user email
    formData.append('message', `Vous avez un acheteur:\n${answers.map(a => `${a.question}\ : ${a.answer}`).join('\n\n')}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true); // Set formSubmitted to true on success
        setQuizFinished(false); // Reset quizFinished state if needed
      } else {
        alert('There was an error sending your answers. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your answers. Please try again.');
    }*/

      router.push("/deals");
  };

  // List of questions with corresponding components
  const questions = [
    { text: 'Les coordonnées du client', component: <Question20 key="q20" onAnswer={handleAnswer} /> },
    /*{ text: 'Avez-vous un modèle de voiture spécifique en tête ?', component: <Question0 key="q0" onAnswer={handleAnswer} /> },
    { text: 'Possédez-vous un véhicule actuellement?', component: <Question2 key="q2" onAnswer={handleAnswer} /> },
    { text: 'Est-ce un véhicule sur lequel vous aimeriez recevoir des offres afin de le donner en échange?', component: <Question3 key="q3" onAnswer={handleAnswer} /> },
    { text: 'Quelle est la marque et le modèle?', component: <Question4 key="q4" onAnswer={handleAnswer} /> },
    { text: 'Est-ce qu\'il y a un solde sur le véhicule?', component: <Question5 key="q5" onAnswer={handleAnswer} /> },
    { text: 'Le véhicule du client est', component: <Question6 key="q6" onAnswer={handleAnswer} /> },
    { text: 'Ce que le client a apprécié de son véhicule', component: <Question7 key="q7" onAnswer={handleAnswer} /> },
    { text: 'Le client est propriétaire de son véhicule depuis', component: <Question8 key="q8" onAnswer={handleAnswer} /> },
    { text: 'Le client veut un véhicule', component: <Question1 key="q1" onAnswer={handleAnswer} /> },
    { text: 'Le client a un budget entre', component: <Question9 key="q9" onAnswer={handleAnswer} /> },
    { text: 'Le client aimerait', component: <Question10 key="q10" onAnswer={handleAnswer} /> },
    { text: 'Les points les plus importants pour le prochain véhicule du client:', component: <Question11 key="q11" onAnswer={handleAnswer} /> },
    { text: 'Le client aimerait garder ce véhicule durant', component: <Question12 key="q12" onAnswer={handleAnswer} /> },
    { text: 'Le client a besoin de ce nouveau véhicule dans', component: <Question13 key="q13" onAnswer={handleAnswer} /> },
    { text: 'Selon le client, le point le plus important d\'un véhicule est', component: <Question14 key="q14" onAnswer={handleAnswer} /> },
    { text: 'Le client recherche le véhicule suivant', component: <Question15 key="q15" onAnswer={handleAnswer} /> },
    { text: 'Le client veut un véhicule', component: <Question16 key="q16" onAnswer={handleAnswer} /> },
    { text: 'Le client aimerait', component: <Question17 key="q17" onAnswer={handleAnswer} /> },
    { text: 'Le client aimerait garder ce véhicule durant', component: <Question18 key="q18" onAnswer={handleAnswer} /> },
    { text: 'Le client a besoin de ce nouveau véhicule dans', component: <Question19 key="q19" onAnswer={handleAnswer} /> },*/
   

  ];

  const handlePrevious = () => {
    if (currentQuestion === 15) {
      setCurrentQuestion(0);
      return; // Exit early to avoid further checks
    }
  
    if (currentQuestion === 8) { // Special case for question 9
      if (answerToQuestion2 === 'non') {
        setCurrentQuestion(1); // Go to question 2
      } else if (answerToQuestion3 === 'non') {
        setCurrentQuestion(2); // Go to question 3
      } else {
        setCurrentQuestion(7); // Go to question 8
      }
      return; // Exit early to avoid further checks
    }
  
    // General case: go to the previous question
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  



  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
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
                  {/* Close button content */}
                </button>

                <div className="flex-1 flex flex-col gap-2">

                  {formSubmitted ? (
                    <SuccessMessage onClose={closeModal} />
                  ) : quizFinished ? (
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-semibold mb-4">Your Answers:</h3>
                      <ul className="list-disc list-inside mb-4">
                        {answers.map((a, index) => (
                          <li key={index} className="mb-2">
                            <strong>{a.question}:</strong> {a.answer}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={handleSendToSeller}
                        className="p-2 bg-primary-blue-100 rounded-full"
                      >
                        Envoyer
                      </button>
                    </div>
                  ) : (
<div className="relative flex items-center justify-between pl-12">
  {currentQuestion !== 0 && (
    <button
      onClick={handlePrevious}
      disabled={currentQuestion === 0}
      className="absolute top-2 left-2 p-2 bg-primary-blue-100 rounded-full disabled:opacity-50"
    >
      <ArrowLeft size={24} />
    </button>
  )}
  <div className="flex-1">{questions[currentQuestion].component}</div>
</div>
                  )}
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FindCar;
