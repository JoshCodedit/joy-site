import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { format } from "date-fns";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    form.current.dt_stamp.value = format(new Date(), "dd/MM/yyyy HH:mm");

    emailjs
      .sendForm("service_vye7kur", "template_js9ofyl", form.current, {
        publicKey: "bC4ITmGEwJ7hG9nCr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-primaryGreen rounded-xl p-4 sm:p-6 w-[95%] sm:w-full max-w-3xl mx-auto">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="form-input mt-3 w-[90%] max-w-xs rounded-lg sm:max-w-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="form-input w-[90%] max-w-xs rounded-lg sm:max-w-md"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="form-input w-[90%] max-w-xs rounded-lg sm:max-w-md"
          required
        />
        <textarea
          placeholder="Enter message..."
          rows="4"
          name="message"
          className="p-1 w-[90%] mx-auto max-w-xs sm:max-w-sm rounded-lg border border-gray-300 focus:outline-none resize-none"
          required
        />
        <input type="hidden" name="dt_stamp" />
        <button
          type="submit"
          value={"Send"}
          className="bg-primaryOrange text-white px-6 py-2 rounded-full w-fit mt-4 hover:bg-[#e28f36] transition self-center sm:self-end sm:mr-[22%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
