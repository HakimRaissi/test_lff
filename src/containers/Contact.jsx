/* Imports */

// React
import { useState } from "react";

// Third-party
import axios from "axios";
import { MdClose } from "react-icons/md";

/* Initial State */
const initialState = {
  name: "",
  email: "",
  subject: "",
  budget: "",
  message: "",
};

/* Main Component */
const Contact = ({ showContact, setShowContact }) => {
  const [data, setData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      method: "post",
      url: "/api/email-send",
      data: data,
    });

    setData(initialState);
  };
  return (
    <div
      id="contact"
      className={`${
        showContact ? "show-contact" : ""
      } bg-white fixed top-0 bottom-0 right-0 left-0 w-screen h-full flex justify-center items-start p-4`}
    >
      <form
        id="form-contact"
        onSubmit={handleSubmit}
        className="max-w-3xl w-full min-w-fit flex flex-col justify-start gap-2 md:gap-8 p-2 mt-10"
      >
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <label htmlFor="name" className="text-lg tracking-wide">
              Nom
            </label>
            <input
              type="text"
              name="name"
              placeholder="A qui avons nous l'honneur"
              value={data.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 mt-2 placeholder:text-zinc-500 focus:border-black focus:border-[1px]"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start">
            <label htmlFor="email" className="text-lg tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ou pouvons nous vous joindre ?"
              value={data.email}
              onChange={handleChange}
              className="w-full p-3 border-[1px] bg-gray-100 mt-2 placeholder:text-zinc-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="budget" className="text-lg tracking-wide">
            Quel est votre besoin ?
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Que pouvons nous faire pour vous ?"
            value={data.subject}
            onChange={handleChange}
            className="w-full p-3 border-[1px] bg-gray-100 mt-2 placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="budget" className="text-lg tracking-wide">
            Votre budget
          </label>
          <input
            type="number"
            name="budget"
            placeholder="Avez vous un budget precis ?"
            value={data.budget}
            onChange={handleChange}
            className="w-full p-3 border-[1px] bg-gray-100 mt-2 placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="message" className="text-lg tracking-wide">
            Message
          </label>
          <textarea
            rows="4"
            cols="8"
            name="message"
            placeholder="Dites nous tout"
            value={data.message}
            onChange={handleChange}
            className="w-full max-w-full p-3 border-[1px] bg-gray-100 mt-2 placeholder:text-zinc-500"
          ></textarea>
        </div>

        <button className="w-full py-3 px-2 bg-black text-white tracking-wider font-medium text-xl">
          Contactez Nous
        </button>
      </form>

      <div className="fixed top-0 w-full lg:max-w-6xl flex justify-end px-6">
        <button
          onClick={() => setShowContact(false)}
          className="mt-2 text-6xl rounded-sm hover:bg-gray-200 duration-500"
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
};

/* Exports */
export default Contact;
