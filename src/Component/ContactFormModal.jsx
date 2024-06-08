import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const ContactFormModal = ({ isModalOpen, toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toggleModal();
  };

  if (!isModalOpen) return null;

  return (
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
              type="submit"
              className="bg-[#292D33] text-center py-[12px] text-white rounded-[8px] text-[16px] w-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ContactFormModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ContactFormModal;
