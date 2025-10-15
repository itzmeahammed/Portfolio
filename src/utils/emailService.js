// Email service utility for sending contact form emails
// This provides multiple fallback methods for reliable email delivery

export const sendContactEmail = async (formData) => {
  const { name, email, subject, message } = formData;
  
  // Method 1: Try EmailJS (requires setup)
  try {
    // EmailJS configuration (you'll need to set this up)
    // Visit https://www.emailjs.com/ to get your keys
    const emailJSConfig = {
      serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    };

    // Uncomment and configure when you have EmailJS set up
    /*
    const emailjs = await import('emailjs-com');
    const result = await emailjs.default.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      {
        from_name: name,
        from_email: email,
        to_email: 'ahammedmass24@gmail.com',
        subject: subject || 'Contact from Portfolio Website',
        message: message,
        reply_to: email
      },
      emailJSConfig.publicKey
    );
    
    if (result.status === 200) {
      return { success: true, method: 'EmailJS' };
    }
    */
  } catch (error) {
    console.log('EmailJS not configured, trying fallback methods');
  }

  // Method 2: Formspree (alternative service)
  try {
    const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT'; // Replace with your Formspree endpoint
    
    // Uncomment when you have Formspree set up
    /*
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || 'Contact from Portfolio Website',
        message,
        _replyto: email,
        _subject: `Portfolio Contact: ${subject || 'New Message'}`
      }),
    });

    if (response.ok) {
      return { success: true, method: 'Formspree' };
    }
    */
  } catch (error) {
    console.log('Formspree not configured, trying mailto fallback');
  }

  // Method 3: Enhanced mailto fallback
  try {
    const mailtoSubject = encodeURIComponent(subject || 'Contact from Portfolio Website');
    const mailtoBody = encodeURIComponent(
      `Hello Ahammed,\n\n` +
      `You have received a new message from your portfolio website:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject || 'No subject'}\n\n` +
      `Message:\n${message}\n\n` +
      `Please reply to: ${email}\n\n` +
      `Sent from Portfolio Contact Form\n` +
      `Timestamp: ${new Date().toLocaleString()}`
    );
    
    const mailtoLink = `mailto:ahammedmass24@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Try to open in new tab first, then fallback to current window
    try {
      window.open(mailtoLink, '_blank');
    } catch (e) {
      window.location.href = mailtoLink;
    }
    
    return { success: true, method: 'mailto' };
  } catch (error) {
    console.error('All email methods failed:', error);
    return { success: false, error: 'Unable to send email' };
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
