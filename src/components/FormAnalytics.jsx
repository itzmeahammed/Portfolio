import { useEffect } from 'react';

const FormAnalytics = () => {
  useEffect(() => {
    // Track form interactions
    const handleFormInteraction = (e) => {
      const form = e.target.closest('form');
      if (!form) return;

      const fieldName = e.target.name || e.target.id || 'unknown';
      const fieldType = e.target.type || 'unknown';
      const eventType = e.type;

      if (window.gtag) {
        window.gtag('event', 'form_interaction', {
          field_name: fieldName,
          field_type: fieldType,
          interaction_type: eventType,
          form_id: form.id || 'unknown',
        });
      }
    };

    // Track form submissions
    const handleFormSubmit = (e) => {
      const form = e.target;
      const formData = new FormData(form);
      const fields = Array.from(formData.keys());

      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          form_id: form.id || 'unknown',
          form_fields: fields.length,
          form_name: form.name || 'unknown',
        });
      }
    };

    // Attach listeners to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener('submit', handleFormSubmit);
      form.addEventListener('focus', handleFormInteraction, true);
      form.addEventListener('blur', handleFormInteraction, true);
      form.addEventListener('change', handleFormInteraction, true);
    });

    return () => {
      forms.forEach((form) => {
        form.removeEventListener('submit', handleFormSubmit);
        form.removeEventListener('focus', handleFormInteraction, true);
        form.removeEventListener('blur', handleFormInteraction, true);
        form.removeEventListener('change', handleFormInteraction, true);
      });
    };
  }, []);

  return null;
};

export default FormAnalytics;
