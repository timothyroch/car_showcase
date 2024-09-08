'use client'

import React, { useState } from 'react'
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import SuccessMessage from './components/SuccessMessage';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 
import Question4 from './components/Question4';
import { useUser } from '@clerk/nextjs';
import QSell1 from './components/QSell1';
import QSell2 from './components/QSell2';
import QSell4 from './components/QSell4';
import QSell3 from './components/QSell3';
import Question20 from './components/Question20';
interface QuizProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SellQuestionary:React.FC<QuizProps> = ({ isOpen, closeModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ question: string, answer: string }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission state
  const [answerToQuestion2, setAnswerToQuestion2] = useState<string | null>(null); 
  const [answerToQuestion3, setAnswerToQuestion3] = useState<string | null>(null); 
  const {user} = useUser();


  const uploadFiles = async (files: File[]): Promise<string[]> => {
    const formData = new FormData();
  
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });
  
    try {
      const response = await fetch('/your-upload-endpoint', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('File upload successful, URLs:', result.fileUrls); // Log URLs
        return result.fileUrls; // Assuming the server returns an array of file URLs
      } else {
        console.error('Failed to upload files');
        return [];
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      return [];
    }
  };
  
  


  const handleAnswer = async (answer: string | File[]) => {
    const question = questions[currentQuestion].text;
  
    if (Array.isArray(answer)) {
      // Handle File[] case
      const fileUrls = await uploadFiles(answer); // Upload files and get URLs
  
      setAnswers(prevAnswers => [
        ...prevAnswers,
        { question, answer: fileUrls.join(', ') } // Join URLs into a comma-separated string
      ]);
    } else {
      // Handle string case
      setAnswers(prevAnswers => [
        ...prevAnswers,
        { question, answer }
      ]);
    }
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };
  
  
  
  


  const handleSendToSeller = async () => {
    const formData = new FormData();
    formData.append('access_key', 'c42e1e7b-2eba-4017-a674-4e5b99155445');
    formData.append('name', user?.fullName || 'User'); // Include user name
    formData.append('email', user?.emailAddresses[0].emailAddress || 'error'); // Include user email
    formData.append('message', `Vous avez un vendeur:\n${answers.map(a => `${a.question}\n : ${a.answer}`).join('\n\n')}`);
  
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
    }
  };
  

  // List of questions with corresponding components
  const questions = [
    { text: 'Le client veut vendre ce véhicule', component: <Question4 key="q0" onAnswer={handleAnswer} /> },
    { text: 'Le véhicule du client a été fabriqué en', component: <QSell1 key="q1" onAnswer={handleAnswer} /> },
    { text: 'Le véhicule du client a ce nombre de kilomètre', component: <QSell2 key="q2" onAnswer={handleAnswer} /> },
    { text: 'Le véhicule du client a ces dommages', component: <QSell4 key="q3" onAnswer={handleAnswer} /> },
    { text: 'Les coordonnées du client', component: <Question20 key="q4" onAnswer={handleAnswer} /> },

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
          <strong>{a.question}:</strong> 
          {a.answer.includes('http') ? (
            <div>
              {a.answer.split(', ').map((url, i) => (
                <img key={i} src={url} alt={`Uploaded file ${i}`} className="max-w-xs my-2" />
              ))}
            </div>
          ) : (
            <span>{a.answer}</span>
          )}
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
}

export default SellQuestionary