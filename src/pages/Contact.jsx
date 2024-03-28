import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
  const [inputErrorFirstName, setInputErrorFirstName] = useState(null);
  const [inputErrorLastName, setInputErrorLastName] = useState(null);
  const [inputErrorEmail, setInputErrorEmail] = useState(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const validateFirstName = (e) => {
    const data = e.target.value;

    if (data === "") {
      setInputErrorFirstName("This field can not be empty!");
      setFirstName(null);
    } else {
      setInputErrorFirstName(null);
      setFirstName(data);
    }
  };

  const validateLastName = (e) => {
    const data = e.target.value;

    if (data === "") {
      setInputErrorLastName("This field can not be empty!");
      setLastName(null);
    } else {
      setInputErrorLastName(null);
      setLastName(data);
    }
  };

  const validateEmail = (e) => {
    const data = e.target.value;

    if (data === "") {
      setInputErrorEmail("This field can not be empty!");
      setEmail(null);
    } else {
      setInputErrorEmail(null);
      setEmail(data);
    }
  };

  const validateMessage = (e) => {
    const data = e.target.value;

    if (data === "") {
      setInputErrorMessage("This field can not be empty!");
      setMessage(null);
    } else {
      setInputErrorMessage(null);
      setMessage(data);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    if (
      data.first_name === "" &&
      data.last_name === "" &&
      data.email === "" &&
      data.message === ""
    ) {
      setInputErrorFirstName("This field can not be empty!");
      setInputErrorLastName("This field can not be empty!");
      setInputErrorEmail("This field can not be empty!");
      setInputErrorMessage("This field can not be empty!");
    } else if (data.first_name === "") {
      setInputErrorFirstName("This field can not be empty!");
    } else if (data.last_name === "") {
      setInputErrorLastName("This field can not be empty!");
    } else if (data.email === "") {
      setInputErrorEmail("This field can not be empty!");
    } else if (data.message === "") {
      setInputErrorMessage("This field can not be empty!");
    } else {
      setInputErrorFirstName(null);
      setInputErrorLastName(null);
      setInputErrorEmail(null);
      setInputErrorMessage(null);

      setIsLoading(true);

      const formParameters = {
        from_name: firstName + " " + lastName,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formParameters,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (response) => {
            if (response.status === 200) {
              setIsLoading(false);
              setFirstName(null);
              setLastName(null);
              setEmail(null);
              setMessage(null);
            }
          },
          (error) => {
            setIsLoading(false);
            console.log(error.text);
          },
        );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 mb-8 px-5">
        <div className="container mx-auto w-full max-w-[95rem] text-center">
          <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 transition duration-500">
            <div className="absolute right-0 top-0 h-full w-full flex justify-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
              <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white transition duration-500">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">
                  Us
                </span>
              </h1>
              <p className="text-gray-700 dark:text-gray-300 transition duration-500">
                Have questions, feedback, or suggestions? We&apos;d love to hear
                from you! Reach out to us for any inquiries regarding our
                services, partnerships, or anything else. We&apos;re here to
                assist you! Simply fill out the form below, and we&apos;ll get
                back to you as soon as possible.
              </p>
              <form
                className="mx-auto mt-16 max-w-xl sm:mt-20"
                onSubmit={(e) => submitForm(e)}
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white transition duration-500"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        value={firstName || ""}
                        onChange={(e) => validateFirstName(e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                      {inputErrorFirstName && (
                        <p className="mt-2 text-red-500">
                          {inputErrorFirstName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white transition duration-500"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        value={lastName || ""}
                        onChange={(e) => validateLastName(e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                      {inputErrorLastName && (
                        <p className="mt-2 text-red-500">
                          {inputErrorLastName}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white transition duration-500"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={email || ""}
                        onChange={(e) => validateEmail(e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                      {inputErrorEmail && (
                        <p className="mt-2 text-red-500">{inputErrorEmail}</p>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white transition duration-500"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={message || ""}
                        onChange={(e) => validateMessage(e)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                      {inputErrorMessage && (
                        <p className="mt-2 text-red-500">{inputErrorMessage}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-white"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </span>
                        Submitting...
                      </>
                    ) : (
                      "Let's talk"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Contact;
