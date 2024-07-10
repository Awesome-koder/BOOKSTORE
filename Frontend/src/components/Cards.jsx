import React from 'react'

function Cards({item}) {
    return (
        <>
            <div>
                <div className="card outline bg-base-100 w-fit h-fit md:w-80 md:h-96 mx-5 my-5 shadow-xl hover:scale-105 duration-500 hover:bg-slate-400 cursor-pointer dark:bg-cyan-950 dark:text-stone-400">
                    <figure>
                        <img className='h-max w-full contrast-80 dark:brightness-75' src= {item.image} alt="Book Image" />
                    </figure>
                    <div className="card-body h-full w-full 2xl:overflow-scroll">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge w-fit badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.s_description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Rs. {item.price}</div>
                            <div className="badge badge-outline px-3.5 py-4 hover:text-white bg-pink-500 hover:bg-sky-500 hover:border-neutral-500 duration-300 dark:bg-sky-500 dark:text-black dark:hover:bg-pink-600"><button>Get Now</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
