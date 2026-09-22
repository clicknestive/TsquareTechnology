export const PRIMARY_WHATSAPP_NUMBER = "917795193686";
export const SECONDARY_WHATSAPP_NUMBER = "919148704881";

export const getWhatsAppLink = (number = PRIMARY_WHATSAPP_NUMBER, message = "") => {
  const cleanNumber = number.replace(/[^0-9]/g, "");
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const generateEnquiryMessage = (formData) => {
  const name = formData.name?.trim() || "Not specified";
  const phone = formData.phone?.trim() || "Not specified";
  const email = formData.email?.trim() || "Not specified";
  const business = formData.businessName?.trim() || "Not specified";
  const service = formData.serviceRequired || "General Enquiry";
  const details = formData.projectDetails?.trim() || "No additional details provided.";

  return `Hello T Square Technology,

I would like to enquire about your services:

• Name: ${name}
• Phone: ${phone}
• Email: ${email}
• Business Name: ${business}
• Service Required: ${service}
• Project Details:
${details}

Looking forward to connecting with your team!`;
};
