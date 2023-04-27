function generateMessage(name, email, message) {
  return `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `;
}

async function sendEmail(message) {
  let data = {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    user_id: import.meta.env.VITE_USER_ID,
    template_params: {
      message: undefined,
    },
  };
  data.template_params.message = message;
  console.log(data);
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
export { sendEmail, generateMessage };
