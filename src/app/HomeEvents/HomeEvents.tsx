"use client";

import { useState, useEffect } from 'react'; // Import useEffect
import Head from 'next/head';
import Image from 'next/image';
import styles from './HomeEvents.module.css';

// Define the type for the event data
type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

// Define the event data with type annotation
const eventsData: Event[] = [
  {
    id: 1,
    title: 'UP International Buyer and Seller Meet',
    date: '2023',
    description:
      'Bringing Together Global Markets to Celebrate the Harvest and Foster Sustainable Potato Trade.',
    image: '/assets/Gimage1.jpeg',
  },
  {
    id: 2,
    title: 'UP International Buyer and Seller Meet',
    date: '2023',
    description:
      'Bringing Together Global Markets to Celebrate the Harvest and Foster Sustainable Potato Trade.',
    image: '/assets/Gimage5.jpeg',
  },
  {
    id: 3,
    title: 'Global Potato Export Insights Conference',
    date: '2024',
    description:
      'Discover insights into the global potato export industry, as featured in recent newspaper reports.',
    image: '/assets/Gimage6.jpeg',
  },
  {
    id: 4,
    title: 'Global Potato Export Insights Conference',
    date: '2024',
    description:
      'Discover insights into the global potato export industry, as featured in recent newspaper reports.',
    image: '/assets/Gimage4.jpeg',
  },
  {
    id: 5,
    title: 'Global Potato Export Insights Conference',
    date: '2024',
    description:
      'Discover insights into the global potato export industry, as featured in recent newspaper reports.',
    image: '/assets/Gimage17.jpeg',
  },
];

const HomeEvents = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Automatically move to the next event every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    }, 5000); // 5000ms = 5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
  };

  const { title, date, description, image } = eventsData[currentIndex];

  return (
    <div className={styles.eventsContainer}>
      {/* SEO Metadata */}
      <Head>
        <title>Upcoming Potato Events - Global Potato Conferences</title>
        <meta
          name="description"
          content="Explore the latest global events, conferences, and expos related to the potato industry. Stay updated with upcoming events in sustainable farming, trade, and more."
        />
        <meta
          name="keywords"
          content="potato events, global potato conferences, potato trade, sustainable farming, potato expo"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={styles.eventsHeader}></div>

      <div className={styles.EVsliderContainer}>
        <button
          className={styles.EVbutton}
          onClick={prevEvent}
          aria-label="Previous event"
        >
          &lt;
        </button>

        <div className={styles.EVcard}>
          <Image
            src={image}
            alt={`Event: ${title}`}
            width={500}
            height={300}
            className={styles.EVimage}
          />
          <h2 className={styles.EVtitle}>{title}</h2>
          <p className={styles.EVdate}>{date}</p>
          <p className={styles.EVdescription}>{description}</p>
        </div>

        <button
          className={styles.EVbutton}
          onClick={nextEvent}
          aria-label="Next event"
        >
          &gt;
        </button>
      </div>

      <div className={styles.eventsFooter}></div>
    </div>
  );
};

export default HomeEvents;
