"use client";

import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email.trim() == "" || formData.fullName.trim() == "" || formData.message.trim() == "") {
      toast.error("Please fill all the fields!")
      return
    };
    toast.loading("Sending...");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.dismiss();
        toast.success("Message sent successfully!");
      } else {
        toast.dismiss();
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
      setFormData({
        fullName: "",
        email: "",
        message: ""
      });
    };

    setFormData({
      fullName: "",
      email: "",
      message: ""
    });
    setLoading(false);

  };

  return (
    <form className="flex flex-col w-full max-lg:max-w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full text-base font-medium text-white max-lg:max-w-full">
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="gap-2.5 self-stretch px-4 py-4 w-full rounded border border-solid bg-[#292826] border-amber-300 border-opacity-20 min-h-[54px] max-lg:max-w-full"
          placeholder="Full Name"
        />

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="gap-2.5 self-stretch px-4 py-4 mt-5 w-full rounded border border-solid bg-[#292826] border-amber-300 border-opacity-20 min-h-[54px] max-lg:max-w-full"
          placeholder="Email"
        />

        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="resize-none gap-2.5 px-4 pt-4 pb-40 mt-5 w-full rounded border border-solid bg-[#292826] border-amber-300 border-opacity-20 min-h-[196px] max-lg:pb-24 max-lg:max-w-full"
          placeholder="Message"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="disabled:bg-amber-800 disabled:hover:text-amber-300 disabled:text- gap-2.5 self-center px-12 py-3 mt-10 max-w-full font-bold text-amber-300 whitespace-nowrap rounded-lg border border-amber-300 border-solid max-lg:px-5 hover:bg-amber-300 hover:text-neutral-800 text-sm"
      >
        {loading ? "Processing..." : "Submit"}
      </button>
    </form>
  );
}
