import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-full h-max mt-30 flex flex-col justify-center items-center">
        <div className="bg-stone-200 outline mt-24 rounded-lg shadow-md px-8 py-5 flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 dark:bg-cyan-900">
          <h3 className="text-xl font-semibold text-gray-700 text-center dark:text-gray-300">GET IN TOUCH WITH US 😉</h3>
          <form className="flex flex-col gap-2 w-full h-fit ">
            <input
              type="text"
              placeholder="ENTER YOU NAME"
              required
              className="px-3 py-2 rounded-md focus:outline-none dark:bg-cyan-700 dark:text-white mb-4" // Added mb-4 for spacing
            />
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              required
              className="px-3 py-2 rounded-md focus:outline-none dark:bg-cyan-700 dark:text-white"
            />
            <input
              type="tel"
              min="1000000000"
              max="9999999999"
              placeholder="ENTER YOUR NUMBER"
              required
              className="px-3 py-2 rounded-md focus:outline-none dark:bg-cyan-700 dark:text-white mt-4"
            />
            <textarea
              placeholder="DROP ANYHING, WE ARE OPEN TO YOUR QUERIES, SUGGESTIONS OR MESSAGES"
              required
              cols="30"
              rows="7"
              className="px-3 py-2 rounded-md focus:outline-none dark:bg-cyan-700 dark:text-white mt-4"
            ></textarea>
            <input
              type="submit"
              value="POST"
              className="bg-pink-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none mt-6 cursor-pointer"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
