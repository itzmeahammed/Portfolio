// Email service utility for sending contact form emails
// This provides multiple fallback methods for reliable email delivery

export const sendContactEmail = async (formData) => {
  const { name, email, subject, message } = formData;

  // Method 1: EmailJS (Placeholder for future integration)
  // To enable: 
  // 1. Install emailjs-com: npm install emailjs-com
  // 2. Create .env file with:
  //    VITE_EMAILJS_SERVICE_ID=your_service_id
  //    VITE_EMAILJS_TEMPLATE_ID=your_template_id
  //    VITE_EMAILJS_PUBLIC_KEY=your_public_key

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    try {
      // Dynamic import to avoid bundling issues if not used
      const emailjs = await import('emailjs-com');
      const result = await emailjs.default.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          to_email: 'ahammedmass24@gmail.com',
          subject: subject || 'Contact from Portfolio Website',
          message: message,
          reply_to: email
        },
        publicKey
      );

      if (result.status === 200) {
        return { success: true, method: 'EmailJS' };
      }
    } catch (error) {
      console.warn('EmailJS failed, falling back to mailto:', error);
    }
  }

  // Method 2: Robust Mailto Fallback
  // This is the default method if EmailJS is not configured or fails
  try {
    const mailtoSubject = encodeURIComponent(subject || 'Contact from Portfolio Website');
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject || 'No subject'}\n\n` +
      `Message:\n${message}\n\n` +
      `----------------------------------------\n` +
      `Sent from Portfolio Website`
    );

    const mailtoLink = `mailto:ahammedmass24@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Create a temporary link element and click it
    // This is often more reliable than window.location.href or window.open
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.target = '_blank'; // Try opening in new tab/window
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return { success: true, method: 'mailto' };
  } catch (error) {
    console.error('Mailto failed:', error);
    return { success: false, error: 'Unable to open email client' };
  }
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form data
export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
