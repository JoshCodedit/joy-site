export default function ContactForm() {
  return (
    <div className="bg-secondaryGreen rounded-xl p-6 w-full max-w-3xl mx-auto">
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="form-input mt-3" />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="text" placeholder="Subject" className="form-input" />
        <textarea
          placeholder="Enter message..."
          rows="4"
          className="p-1 w-96 mx-auto rounded-sm border border-gray-300 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="bg-primaryGreen text-white px-6 ml-auto mr-[165px] py-2 rounded-full w-fit  mt-4 hover:bg-[#3d4b2b] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
