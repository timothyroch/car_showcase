// email-server/src/emailService.ts
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Set the SendGrid API key using the value from your environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmail = async (answers: string[]) => {
  const msg = {
    to: 'timothyroch@gmail.com', // Send the email to your address
    from: 'timothyroch@gmail.com', // Use your verified sender email
    subject: 'Quiz Results',
    html: `<h1>Quiz Results</h1><ul>${answers.map(answer => `<li>${answer}</li>`).join('')}</ul>`, // Format answers as a list in the email body
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
