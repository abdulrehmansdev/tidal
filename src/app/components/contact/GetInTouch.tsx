import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const GetInTouch = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    company: yup.string().required("Company is required"),
    message: yup.string().required("Message is required"),
    privacy: yup.bool().oneOf([true], "You must accept the privacy policy"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // You can handle form submission here (e.g., send to API, show toast, etc.)
    alert("Form submitted! " + JSON.stringify(data, null, 2));
    reset();
  };

  return (

    <section
      className="w-full h-5/6 bg-cover bg-center bg-no-repeat mt-10"
      style={{ backgroundImage: "url('/wave.svg')" }}
    >
      <div className="container mx-auto flex flex-col xl:flex-row justify-between w-full py-24 gap-14">
        {/* Left Content */}
        <div className="lg:w-3/5 flex flex-col gap-y-5">
          <p className="font-[montserrat] rtext-16 text-offWhite">
            Fill out the form to the right and we will get back to you soon.
            Alternatively, send us a direct email or give us a call using the
            details below.
          </p>

          <p className="font-[montserrat] text-16 text-offWhite">Phone</p>
          <p className="font-[montserrat] text-22 text-offWhite">01702 597 070</p>

          <p className="font-[montserrat]text-16 text-offWhite">Email</p>
          <p className="font-[montserrat] text-22 text-offWhite">info@tidal-film.co.uk</p>

          <button
            className="btn-secondary cursor-pointer w-44 uppercase"
            aria-label="view all services"
          >
            book a meetig
          </button>
        </div>

        {/* Right Card */}
        <div className="lg:min-w-[624px] bg-offWhite p-6 rounded-xl shadow-lg flex flex-col gap-y-4 items-start ">
          <h3 className="text-22 text-teal">Get In Touch</h3>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-5 text-xl font-semibold"> */}
            <form
              className="w-full col-span-2"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                <div>
                  <label htmlFor="Name" className="rtext-16 text-darkest-blue cursor-pointer">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                             className="w-full rounded-lg border border-primary-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal bg-white transition-all duration-200"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-reddish-orange text-xs mt-1">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="rtext-16 text-darkest-blue cursor-pointer">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-primary-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal bg-white transition-all duration-200"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-reddish-orange text-xs mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="rtext-16 text-darkest-blue cursor-pointer">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-primary-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal bg-white transition-all duration-200"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-reddish-orange text-xs mt-1">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-company" className="rtext-16 text-darkest-blue cursor-pointer">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-lg border border-primary-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal bg-white transition-all duration-200"
                    {...register("company")}
                  />
                  {errors.company && (
                  <p className="text-reddish-orange text-xs mt-1">
                      {errors.company.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="contact-message" className="rtext-16 text-darkest-blue cursor-pointer">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded-lg border border-primary-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal bg-white resize-none transition-all duration-200"
                  {...register("message")}
                />
                {errors.message && (
                 <p className="text-reddish-orange text-xs mt-1">
                    {errors.message.message as string}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="accent-dark-blue w-5 h-5"
                  {...register("privacy")}
                />
                <label htmlFor="privacy" className="text-darkest-blue text-sm">
                  I accept the{" "}
                  <a href="#" className="underline text-teal">
                    privacy policy
                  </a>
                </label>
              </div>
              {errors.privacy && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.privacy.message as string}
                </p>
              )}

              <button
                className="btn-secondary cursor-pointer w-44 uppercase mt-4"
                aria-label="view all services"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
