import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzhgf522n7vs3wXCGabXjrnuDHjvQrXMUc-acIUXnjmYeGs7cm8900bkgAOzO-Emaju/exec'; // Replace with your actual script URL

        // Convert formData object into URL-encoded format
        const formDataEncoded = new URLSearchParams(formData).toString();

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formDataEncoded, // Send URL-encoded data
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Set content type to URL-encoded
                },
            });

            const result = await response.text(); // Expect a text response from the script
            if (result.includes('Success')) {
                toast.success('Form submitted successfully!');

                // Clear the form
                setFormData({
                    name: '',
                    phone: '',
                    course: '',
                    message: ''
                });

            } else {
                toast.error('Error submitting the form: ' + result);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error('Error submitting the form');
        }
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="max-w-md mx-auto overflow-hidden">
                    <div className="md:flex">
                        <div className="w-full md:px-1 py-8">
                            <h2 className="text-[16px] md:text-[20px] font-semibold uppercase text-white text-center" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">Take The Next Step Now</h2>
                            <form className="mt-10" onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-y-6 md:flex-row items-center gap-x-3 w-full mb-6 md:mb-10'>
                                    <div className="w-full">
                                        <label className="block text-[12px] md:text-[14px] font-semibold mb-2 text-gray-50" htmlFor="name">Name</label>
                                        <div>
                                            <input
                                                className="bg-transparent shadow appearance-none border border-gray-100 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label className="block text-[12px] md:text-[14px] text-gray-50 font-semibold mb-2" htmlFor="phone">Phone Number</label>
                                        <div>
                                            <input
                                                className="bg-transparent shadow appearance-none border border-gray-100 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 md:mb-10">
                                    <label className="block text-[12px] md:text-[14px] text-gray-50 font-semibold mb-2" htmlFor="course">Select a Treatments</label>
                                    <select
                                        className="bg-transparent shadow appearance-none border border-gray-100 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-300"
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option className='bg-black' value="">Select a Treatments</option>
                                        <option className='bg-black' value="digital-marketing-excellence">Siddha Treatments</option>
                                        <option className='bg-black' value="digital-marketing-mastery">Ayurveda Therapies</option>
                                        <option className='bg-black' value="seo-mastery">Naturopathy Therapies</option>
                                    </select>
                                </div>

                                <div className="mb-6 md:mb-8">
                                    <label className="block text-[12px] md:text-[14px] text-gray-50 font-semibold mb-2" htmlFor="message">Your Message</label>
                                    <div>
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="bg-transparent shadow appearance-none border border-gray-100 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                                            cols="10"
                                            rows="4"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <button className="w-full cursor-pointer border border-green-700 rounded-xl  bg-[#619F9B] uppercase text-white hover:scale-105 duration-500 font-semibold text-[13px] py-3 px-4 focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;