import React, { useState, useEffect } from "react";
// import lodaer from '../images/00.jpeg'
import lodaer1 from '../images/video.mp4'


const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., fetch data or simulate delay)
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide preloader after 3 seconds
        }, 5300);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);
    

    if (!isLoading) {
        return null; // Do not render preloader when loading is complete
    }


    return (
        <div className="fixed inset-0 bg-white  flex items-center justify-center z-50">
            {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div> */}

            <div className="flex justify-center items-center">
                {/* <img src={lodaer} alt="loader" className="w-20 md:w-32  " /> */}

                <video autoPlay loop muted className="w-[50%] md:w-[20%] ">
                    <source src={lodaer1} type="video/mp4" />
                </video>

                {/* <div className="size-10 border-4 rounded-md border-gray-600 animate-spin"></div> */}

            </div>

        </div>
    );
};

export default Loader;
