'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../../src/components/ToastProvider';

function ContactPage() {
  const { createToast } = React.useContext(ToastContext);
  const router = useRouter();
  function submitContact(event) {
    event.preventDefault();

    router.push('/exercises/02-flash-messages');

    // ✂️ Send data to server
    createToast(
      "Your message was received!\nWe'll get back to you shortly.",
      'success'
    );
  }

  return (
    <main>
      <form onSubmit={submitContact}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
