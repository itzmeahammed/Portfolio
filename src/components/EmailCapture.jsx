import { useState, useEffect } from 'react';

const EmailCapture = () => {
  const [emails, setEmails] = useState([]);

  // Capture emails from form submissions and popups
  useEffect(() => {
    const captureEmail = (emailAddress) => {
      if (!emailAddress || !emailAddress.includes('@')) return;

      // Store in localStorage
      const storedEmails = JSON.parse(localStorage.getItem('capturedEmails') || '[]');
      if (!storedEmails.includes(emailAddress)) {
        storedEmails.push(emailAddress);
        localStorage.setItem('capturedEmails', JSON.stringify(storedEmails));
        setEmails(storedEmails);

        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'email_captured', {
            email_domain: emailAddress.split('@')[1] || 'unknown',
            timestamp: new Date().toISOString(),
          });
        }

        // Optional: Send to backend
        sendEmailToBackend(emailAddress);
      }
    };

    // Listen for email input changes in forms
    const handleFormInput = (e) => {
      if (e.target.type === 'email' && e.target.value) {
        // Don't capture immediately, wait for form submission
      }
    };

    // Listen for form submissions to capture emails
    const handleFormSubmit = (e) => {
      const form = e.target;
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        captureEmail(emailInput.value);
      }
    };

    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('input', handleFormInput);

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('input', handleFormInput);
    };
  }, []);

  const sendEmailToBackend = async (email) => {
    try {
      // Optional: Send to your backend/email service
      // await fetch('/api/capture-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, timestamp: new Date().toISOString() })
      // });
    } catch (error) {
      console.error('Error sending email to backend:', error);
    }
  };

  return null;
};

export default EmailCapture;
