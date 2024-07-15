import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import list from "../assets/list.json"
import { data } from 'autoprefixer'
import Cards from './Cards';
import axios from 'axios';

function Freebook() {

    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4004/book");
                const data = res.data.filter((data) => data.category === "Free")
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="max-w-screen-xl mt-32 container m-5 md:mt-10 px-16">
                <div>
                    <h1 className="text-xl text-blue-500 font-bold pb-2">Free Offered Books</h1>
                    <p className="md:display-none">
                        Dive into great reads for free!! Explore our curated variety of captivating Web-Books on a various of exciting topics
                        and versatile subjects from our extensive collection.
                    </p>
                </div>
                <div>
                    <Slider {...settings} className=" mt-8 rounded-lg bg-gray-200 dark:bg-cyan-900 dark:text-stone-400 ">
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook
