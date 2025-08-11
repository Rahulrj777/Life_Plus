import React, { useState, useEffect, useRef } from "react";

export default function AppointmentPopup() {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const popupRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

useEffect(() => {
  const alreadyClosed = sessionStorage.getItem("appointmentPopupClosed");
  if (!alreadyClosed) {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }
}, []);

const handleClose = () => {
  setShow(false);
  sessionStorage.setItem("appointmentPopupClosed", "true");
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    sessionStorage.setItem("appointmentPopupClosed", "true");
    setShow(false);
  }
};

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!/^[A-Za-z ]+$/.test(formData.name)) {
        newErrors.name = "Name must contain only letters and spaces";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Must be a valid Gmail address (example@gmail.com)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white p-6 rounded-lg shadow-lg w-80 relative animate-fadeIn"
      >
        {/* Close Icon */}
        <span
          className="absolute top-2 right-3 text-red-500 text-2xl font-bold cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </span>

        <h2 className="text-xl font-semibold mb-4 text-center">
          📅 Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
