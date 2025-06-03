import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactFormModal = ({ isModalOpen, toggleModal, toastMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    await fetch('https://api.ves-tv.ng/api/v1/content/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.status);
        }
        return response.json();
      })
      .then(result => {
        toastMessage({message:result?.message,status:"success"})
        toggleModal();
        reset();
      })
      .catch(error => {
        toastMessage({message:error?.message,status:"error"})
      });
    setLoading(false)
  };

  if (!isModalOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="modal-content px-[32px] py-[60px] bg-white rounded-[24px] md:max-w-[728px] w-full mx-[24px] md:mx-auto relative">
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 text-4xl"
          >
            &times;
          </button>
          <div className="">
            <p className="text-[#333333] text-[24px] leading-[60px] lg:leading-[64px]">
              Get in touch with us
            </p>
            <p className="text-[#7A7A7A] text-[16px] ">
              We are ready to engage all inquiries and questions
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-[24px] grid gap-[24px]"
          >
            <div className="grid md:grid-cols-2 gap-[24px]">
              <div className="grid gap-[8px]">
                <label
                  htmlFor="firstName"
                  className=" text-[16px] text-[#292D33]"
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  {...register("firstName", { required: true })}
                  className="px-[14px] py-[10px] border border-[#EAECF0] placeholder:text-[#575B5E] rounded-[8px] w-full md:max-w-[320px]"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    First name is required
                  </span>
                )}
              </div>
              <div className="grid gap-[8px]">
                <label htmlFor="lastName" className=" text-[16px] text-[#292D33]">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  {...register("lastName", { required: true })}
                  className="px-[14px] py-[10px] border border-[#EAECF0] placeholder:text-[#575B5E] rounded-[8px] w-full md:max-w-[320px]"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    Last name is required
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-[8px]">
              <label htmlFor="email" className=" text-[16px] text-[#292D33]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
                className="px-[14px] py-[10px] border placeholder:text-[#575B5E] border-[#EAECF0] rounded-[8px] w-full"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Valid email is required
                </span>
              )}
            </div>

            <div className="grid gap-[8px]">
              <label
                htmlFor="description"
                className=" text-[16px] text-[#292D33]"
              >
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter a description..."
                {...register("description", { required: true })}
                className="px-[14px] py-[10px] border placeholder:text-[#575B5E] border-[#EAECF0] rounded-[8px] w-full h-[128px]"
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-sm">
                  Description is required
                </span>
              )}
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="bg-[#292D33] disabled:bg-slate-400 disabled:cursor-wait text-center py-[12px] text-white rounded-[8px] text-[16px] w-full"
              >
                {
                  loading ? "Sending..." : "Send message"
                }
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ContactFormModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ContactFormModal;
