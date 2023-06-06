import React from 'react';
import { useState } from 'react';
import  axios from 'axios';
function Contact() {
 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setsubject] = useState('');
  const [alertt,setalert]=useState(false)
  const [loading,setloading]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("http://localhost:4000/email", {
        email,
        message,
        subject,
      })
      .then((res) => {
        if (res.status === 200) {
          setalert(true);
          setloading(false);
        } else {
          alert("Wrong email");
        }
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <section className="mx-0 lg:mx-8 bg-black text-white">
    <div className={alertt ? "alert flex justify-center  items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999 max-w-sm alert-success shadow-lg" : "hidden"}>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Message sent successfully!</span>
  </div>
  <p onClick={() => { setalert(false) }} className="cursor-pointer">close</p>
</div>

    <div className={loading && "w-16 fixed top-[50%] left-[50%] h-16 border-4 border-dashed rounded-full border-orange animate-spin dark:border-orange"}></div>
  
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-orange dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-gray-300">Your email</label>
          <input
            name="email"
            type="email"
            id="email"
            className="focus:border-t-transparent focus:outline-0 shadow-sm bg-gray-50 text-gray-900 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium ">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="focus:border-t-transparent focus:outline-0 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            value={subject}
            onChange={e => setsubject(e.target.value)}
            required
          />
        </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium  ">Your message</label>
                <textarea name='message' id="message" rows="6" class=" focus:border-t-transparent focus:outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."value={message} onChange={e =>setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray rounded-lg bg-orangew text-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">Send message</button>
        </form>
    </div>
  </section>
  );
}

export default Contact;
