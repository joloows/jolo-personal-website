import { useEffect } from "react";
import { useForm } from "react-hook-form";
import sendEmail from "src/utils/scripts/email.js";
import generateMessage from "src/utils/scripts/generateMessage.js";
import styles from "src/assets/styles/ContactForm.module.css";
import { toast } from "react-toastify";

function FormValidationError({ message }) {
  return (
    <p className={styles.error} role="alert">
      {message}
    </p>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const message = generateMessage(data.name, data.email, data.message);
    const response = await sendEmail(message);
    if (response.ok) {
      toast.success("Message sent successfully.");
    } else {
      toast.error("Message failed to send.");
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [formState, reset]);

  return (
    <div className={styles.form_container}>
      <h1 className={styles.head}>Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          id="name-input"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "This field is required.",
            maxLength: {
              value: 50,
              message: "This field exceeds maximum characters.",
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.message && (
          <FormValidationError message={errors.name?.message} />
        )}
        <input
          className={styles.input}
          id="email-input"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email. Please enter a valid one.",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.message && (
          <FormValidationError message={errors.email?.message} />
        )}
        <label className={styles.label} htmlFor="message-input"></label>
        <textarea
          className={`${styles.input} ${styles.input_message}`}
          id="message-input"
          type="text"
          placeholder="Type your message here..."
          {...register("message", {
            required: "This field is required.",
            max: {
              value: 500,
              message: "This field exceeds maximum characters.",
            },
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message?.message && (
          <FormValidationError message={errors.message?.message} />
        )}
        <div className={styles.submit}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
