const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

import emailjs from '@emailjs/browser';

export function sendEmail(e, onSuccess, onError) {
    e.preventDefault();
    emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
    ).then(
        (result) => {
            alert('Message sent successfully!');
            e.target.reset();
            if (onscroll) onSuccess(result);
        },
        (error) => {
            alert('Failed to send, try again.');
            if (onError) onError(error);
        },
    );
}