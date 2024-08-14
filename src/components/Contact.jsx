import React, { useState } from 'react';
import Title from './Title';

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


function Contact() {

   const [email, setEmail] = useState('');
   const [errors, setErrors] = useState({});
   const [disabled, setDisabled] = useState(true);

   const validateEmail = (email) => {

      const errors = {};

      if (!isEmail(email)) {
         errors.email = 'Wrong format';
         setDisabled(true);
      }
      setDisabled(false);
      setEmail(email);

      setErrors(errors);

      if (!Object.keys(errors).length) {
         alert(JSON.stringify(values, null, 2));
      }
   }

   const emailOnchange = (e) => {
      const email = e.target.value;
      validateEmail(email);
   }

   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/azylplrb"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />

               <input
                  type="text"
                  id="userEmail"
                  value={email}
                  onChange={emailOnchange}
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  placeholder="Email"
               />

               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <br />
               {Object.entries(errors).map(([key, error]) => (
                  <span
                     key={`${key}: ${error}`}
                     style={{
                        fontWeight: 'bold',
                        color: 'red'
                     }}>
                     {key}: {error}
                  </span>
               ))}
               <button
                  type="submit"
                  disabled={disabled}
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;