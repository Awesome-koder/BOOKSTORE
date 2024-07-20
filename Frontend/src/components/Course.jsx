import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import list from "../assets/list"
import { Link } from 'react-router-dom'

function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        getBook();
    }, []);
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='pt-32 items-center justify-center text-center'>
                <h1 className='text-2xl font-bold md:text-4xl mb-20'>we're delighted to have you <span className='text-pink-500'> Here !! : )</span></h1>
                <p>
                    Welcome to our Web-Book courses page, where learning meets literature! Explore our diverse curation of courses tailored to
                    enrich your reading experience. From deep dives into literary classics to modern genre explorations, each course is designed
                    to deepen your understanding and appreciation of books. Join us in unlocking the doors of excellence, Where one step at a time is
                    equivalent to one page at a time.
                </p>
                <Link to="/">
                    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300 mt-6'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                {
                    book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))
                }

            </div>
        </div>
    );
}

export default Course;
