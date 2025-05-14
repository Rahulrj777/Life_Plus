import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        message: '',
        date: '',
        time: ''
    });


    // date & time
    const [loading, setLoading] = useState(false);
    const [todayDate, setTodayDate] = useState('');
    const [disabledSlots, setDisabledSlots] = useState([]);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
        setTodayDate(formattedDate);


        const now = new Date();
        const todayStr = now.toISOString().split("T")[0]; // e.g., "2025-05-14"

        if (formData.date === todayStr) {
            // Disable only past time slots
            const pastSlots = timeSlots.filter(slot => {
                const [time, modifier] = slot.split(" ");
                let [hours, minutes] = time.split(":").map(Number);
                if (modifier === "PM" && hours !== 12) hours += 12;
                if (modifier === "AM" && hours === 12) hours = 0;

                const slotDate = new Date(formData.date);
                slotDate.setHours(hours, minutes, 0, 0);

                return slotDate <= now;
            });
            setDisabledSlots(pastSlots);
        } else {
            // Future dates: enable all slots
            setDisabledSlots([]);
        }


    }, [formData.date]);



    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
        "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"
    ];




    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // const scriptURL = 'https://script.google.com/macros/s/AKfycbzhgf522n7vs3wXCGabXjrnuDHjvQrXMUc-acIUXnjmYeGs7cm8900bkgAOzO-Emaju/exec'; // Replace with your actual script URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxLGjkEdGQSByzsirddDpMvLICzj_6fxRu6tkdv8ovSPzhnNeho8Wf0uGGhWfZ1Gq_TQA/exec'; // Replace with your actual script URL

        // Convert formData object into URL-encoded format
        const formDataEncoded = new URLSearchParams(formData).toString();
        console.log(formDataEncoded); // Log the encoded form data to verify all fields are present



        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formDataEncoded,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const resultText = await response.text();
            const result = resultText.toLowerCase().trim();

            if (result.includes('success')) {
                toast.success('slot is Booked successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    course: '',
                    message: '',
                    date: '',
                    time: ''
                });
            } else if (result.includes('already booked')) {
                toast.error('This slot is already booked. Please choose another time.');
            } else {
                toast.error(`Submission error: ${resultText}`);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error('A network error occurred. Please try again.');
        } finally {
            setLoading(false);
            // Optional: Reset loading spinner, disable state, etc.
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
                                        <option className='bg-black' value="Siddha Treatments">Siddha Treatments</option>
                                        <option className='bg-black' value="Ayurveda Therapies">Ayurveda Therapies</option>
                                        <option className='bg-black' value="Naturopathy Therapies">Naturopathy Therapies</option>
                                        <option className='bg-black' value="Lifestyle & Holistic Wellness">Lifestyle & Holistic Wellness</option>
                                    </select>
                                </div>





                                <div className="mb-6 md:mb-10">
                                    <label className="block text-[12px] md:text-[14px] text-gray-50 font-semibold mb-2" htmlFor="date">
                                        Appointment Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        min={todayDate}
                                        className="bg-transparent shadow border border-gray-100 text-[12px] rounded-lg w-full py-3 px-3 text-gray-300"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Time Picker */}
                                <div className="mb-6 md:mb-10">
                                    <label className="block text-[12px] md:text-[14px] text-gray-50 font-semibold mb-2" htmlFor="time">
                                        Appointment Time
                                    </label>
                                    <select
                                        name="time"
                                        id="time"
                                        className="shadow border border-gray-100 text-[12px] rounded-lg w-full py-3 px-3 text-gray-300"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option className="bg-black" value="">Select Time</option>
                                        {timeSlots.map(slot => (
                                            <option
                                                className="bg-black"
                                                key={slot}
                                                value={slot}
                                                disabled={disabledSlots.includes(slot)}
                                            >
                                                {slot}
                                            </option>
                                        ))}
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



                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full cursor-pointer border border-[#6d918c] hover:bg-[#b05454] rounded-xl bg-[#a64c4f] uppercase text-white font-semibold text-[13px] py-3 px-4 focus:outline-none focus:shadow-outline duration-500 ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                                        }`}
                                >
                                    {loading ? "Slot Booking..." : "Submit"}
                                </button>



                                {/* <button className="w-full cursor-pointer border border-[#6d918c] rounded-xl  bg-[#6d918c] uppercase text-white hover:scale-105 duration-500 font-semibold text-[13px] py-3 px-4 focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </button> */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;