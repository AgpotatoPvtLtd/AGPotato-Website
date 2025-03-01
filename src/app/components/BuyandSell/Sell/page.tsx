'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Nav from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';
import { motion } from 'framer-motion';
import styles from './Sell.module.css';

const BuyForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [potatoName, setPotatoName] = useState<string | undefined>(undefined);

  const searchParams = useSearchParams();

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set potato name from URL search params
  useEffect(() => {
    if (isClient) {
      const potatoQuery = searchParams.get('potatoName');
      if (potatoQuery) {
        setPotatoName(potatoQuery);
      }
    }
  }, [searchParams, isClient]);


  
  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      personName: (document.getElementById('personName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      quantity: (document.getElementById('quantity') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value,
      accountNumber: (document.getElementById('accountNumber') as HTMLTextAreaElement).value,
      ifsc: (document.getElementById('ifsc') as HTMLTextAreaElement).value,
      holderName: (document.getElementById('holderName') as HTMLTextAreaElement).value,

      potatoName,
    };

    

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Order submitted successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (err) {
      console.error('Error submitting order:', err);
      alert('An unexpected error occurred.');
    }
  };

  if (!isClient) return null;

  return (
    <div className={styles.buyContainer}>
      <Head>
        <title>Sell Potatoes Online | AGPotato</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        {potatoName ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.buyTitle}>Selling: {potatoName}</h2>
            <p className={styles.buyDescription}>
              Please fill out the form to sell potatoes.
            </p>

            <motion.form
              className={styles.buyForm}
              onSubmit={handleSubmit} // Updated form submission handler
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="personName">Full Name:</label>
                <input type="text" id="personName" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity (kg):</label>
                <input type="number" id="quantity" required />
              </div>

              <div className={styles.formGroup}>
  <label htmlFor="accountNumber">Bank Account Number:</label>
  <input
    type="text"
    id="accountNumber"
    name="accountNumber"
    pattern="^\d{9,18}$"
    title="Account number must be 9 to 18 digits."
    required
  />
</div>

<div className={styles.formGroup}>
  <label htmlFor="ifsc">IFSC Code:</label>
  <input
    type="text"
    id="ifsc"
    name="ifsc"
    pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
    title="Enter a valid IFSC code (e.g., ABCD0123456)."
    required
  />
</div>

<div className={styles.formGroup}>
  <label htmlFor="holderName">Account Holder Name:</label>
  <input
    type="text"
    id="holderName"
    name="holderName"
    pattern="^[a-zA-Z\s]+$"
    title="Name should only contain letters and spaces."
    required
  />
</div>


              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Message:</label>
                <textarea id="message"></textarea>
              </div>

              <button type="submit" className={styles.buyButton}>Submit</button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.p
            className={styles.errorMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Potato type not selected!
          </motion.p>
        )}
      </Suspense>
    </div>
  );
};

export default function Page() {
  return (
    <div>
      <Nav />
      <Suspense fallback={<div>Loading page...</div>}>
        <BuyForm />
      </Suspense>
      <Footer />
    </div>
  );
}
