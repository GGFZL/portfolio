import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_62dya2m', 'template_knedyz5', form.current, 'imQm9aPKE_o7yP_fF')
      .then(
        () => {
          setIsLoading(false);
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="bg-matBlack text-myColorDarker2 w-full p-4 pt-16">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex justify-center flex-col items-center">
          <p className="text-4xl border-b-4 border-myColorDarker1 pb-2 inline">Contact</p>
          <p className="py-4 text-2xl">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail} action="" method="POST" className="flex flex-col w-full md:w-3/4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-myColorDarker2 rounded:md text-myColor focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-myColorDarker2 rounded:md text-myColor focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 border-myColorDarker2 rounded-md text-myColor focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-r from-myColorDarker3 via-myColor to-myColorDarker3 text-black transition hover:bg-gradient-to-r hover:from-myColorDarker3 hover:to-myColorDarker3 px-6 py-3 my-8 mx-auto flex items-center rounded-md">
              Submit
            </button>
          </form>
        </div>

        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-myColor text-black p-5 rounded-md">
              <p>Sending...</p>
            </div>
          </div>
        )}

        {showSuccessAlert && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-myColor text-black p-5 rounded-md">
              <p>Form was successfully submitted!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
