export default function ContactForm() {
  return (
    <div className="bg-secondaryGreen rounded-xl p-4 sm:p-6 w-[95%] sm:w-full max-w-3xl mx-auto">
      <form className="flex flex-col space-y-4  ">
        <input
          type="text"
          placeholder="Name"
          className="form-input mt-3 w-[90%] max-w-xs rounded-lg sm:max-w-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input w-[90%] max-w-xs rounded-lg sm:max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="form-input w-[90%] max-w-xs rounded-lg sm:max-w-md"
        />
        <textarea
          placeholder="Enter message..."
          rows="4"
          className="p-1 w-[90%] mx-auto max-w-xs sm:max-w-sm rounded-lg border border-gray-300 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="bg-primaryGreen text-white px-6 py-2 rounded-full w-fit mt-4 hover:bg-[#3d4b2b] transition self-center sm:self-end sm:mr-[22%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
