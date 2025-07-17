import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Nav from '../components/Nav';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        toast.success('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        toast.error('Failed to send message. Please try again later.');
      }
    ) .finally(()=>setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <Nav />
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="from_name" required
              className="mt-1 block w-full border-t-0 border-r-0 border-l-2 border-b-2 focus:shadow-xl outline-0 border-gray-300 rounded-md p-3 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="from_email" required
              className="mt-1 block w-full border-t-0 border-r-0 border-l-2 border-b-2 focus:shadow-xl outline-0 border-gray-300 rounded-md p-3 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="5" required
            placeholder='Type your message here...'
              className="mt-1 block w-full border-t-0 border-r-0 border-l-2 border-b-2 focus:shadow-xl outline-0 border-gray-300 rounded-md p-3 shadow-sm" />
          </div>
          <button type="submit"

            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            {isSending? "Sending message...": "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
