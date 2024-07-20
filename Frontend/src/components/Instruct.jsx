import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Instruct() {
    return (
        <>
            <Navbar />
            <div className="w-full h-max mt-30 flex flex-col justify-center items-center min-h-screen">
                <div className="bg-stone-200 outline mt-24 rounded-lg shadow-md px-8 py-5 mt-22 flex flex-col items-center justify-center gap-3 w-full md:w-3/4 lg:w-1/2 dark:bg-cyan-900">
                   <svg className="text-center items-center justify-center" fill="#187fbf" height="129px" width="129px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#187fbf"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_509_"> <path id="XMLID_510_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15 s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25 C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"></path> </g> </g></svg> 
	<h3 className="text-xl font-semibold text-red-500 text-center dark:text-red-500">KINDLY LOGIN TO ACCESS THIS PAGE</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Instruct
