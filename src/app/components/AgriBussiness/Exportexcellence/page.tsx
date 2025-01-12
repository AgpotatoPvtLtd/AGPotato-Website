"use client";

import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from '../../../Footer/Footer';
import Nav from '../../../Navbar/NavbarTYP';
import styles from './Export.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SC from '../../../Scroll/scroll';


const Export: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

 

  return (
    <div>
      <Nav />
      <div className={styles.exportpageWrapper}>
        <Head>
          <title>Export Excellence | AGPotato</title>
          <meta
            name="description"
            content="Discover AGPotato's export excellence, from local production to international markets, delivering high-quality potatoes globally."
          />
          <meta
            name="keywords"
            content="AGPotato, Potato export, Sustainable farming, Global distribution, Netherlands, Export journey"
          />
          <meta name="author" content="AGPotato" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Export Excellence | AGPotato" />
          <meta
            property="og:description"
            content="Learn about AGPotato's export journey, from local growth to global reach. Partnering with farmers and international retailers."
          />
          <meta property="og:image" content="/images/Export1.jpg" />
          <meta property="og:url" content="https://agpotato.com/export" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Export Excellence | AGPotato" />
          <meta
            name="twitter:description"
            content="AGPotato's export journey and success stories in global distribution of high-quality potatoes."
          />
          <meta name="twitter:image" content="/images/Export1.jpg" />
        </Head>

        {/* Header Section with Image */}
        <div className={styles.exportpageHeader}>
        <Image
  src="/assets/Export1.jpg"
  alt="AGPotato export excellence header with vibrant potato field"
  className={styles.exportpageHeaderImage}
  width={1200}  // Add appropriate width
  height={800}  // Add appropriate height
/>

          <h1 className={styles.exportpageHeaderTitle}>Export Excellence</h1>
          <button
            className={styles.contactButton}
            onClick={() => (window.location.href = '/components/Contact/')}
          >
            Get in Touch with Us
          </button>
        </div>


 


       {/* Potatoes Export Section */}
<div className={styles.exportpagePotatoSection}>
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h2 className={styles.exportpagePotatoTitle}>Potatoes Export</h2>
    </div>
    <div className={styles.cardBody}>
      <p className={styles.exportpagePotatoDescription}>
        Exports have played a pivotal role in AGPotato growth since its inception, 
        delivering a range of potato products across India. Before the pandemic, we aimed 
        to venture into European markets, particularly the Netherlands. With a modern 
        facility and distribution capabilities, AGPotato is poised to make a substantial 
        impact on domestic and international markets.
      </p>
    </div>
  </div>
</div>



        
        {/* Export Journey Section */}
        <section className={styles.testimonialsSection1}>
  <div className={styles.testimonialContainer1}>
    <div className={styles.testimonialImage1}>
      <Image
        src="/assets/extra3.jpg" // Update with the correct image path
        alt="Potato Flour Benefits"
        width={300}
        height={300}
        className={styles.testimonialImg1}
        loading="lazy"
      />
    </div>
    <div className={styles.testimonialContent1}>
      <h3 className={styles.testimonialTitle1}>Our Export Journey</h3>
      <p className={styles.testimonialText1}>
      AGPotato began with a mission to provide fresh, high-quality potato products, building a network of farmers
              and partners committed to sustainable practices and exceptional standards. From local distribution, we
              quickly expanded across India, laying a strong foundation for international growth.     </p>
<Link href="">
  <button className={styles.testimonialButton1}>   Today, our partnerships with European retail chains, including in the Netherlands, mark a major milestone.
              As we continue investing in advanced logistics and product innovation, we look forward to sharing Indias
              best potatoes with customers worldwide.</button>
</Link>
    </div>
  </div>
</section>



        {/* Success Stories Section
        <div className={styles.exportpageSuccessStoriesSection}>
          <h2 className={styles.exportpageSuccessStoriesTitle}>Success Stories</h2>
          <div className={styles.exportpageSuccessStory}>
            <h3>Farmers' Journey Towards Sustainability</h3>
            <p>
              At AGPotato, we believe that sustainability starts at the grassroots level. Our collaboration with local
              farmers is centered around empowering them with knowledge, resources, and technology to implement
              eco-friendly farming practices. Through our initiatives, farmers are learning to utilize water-efficient
              irrigation systems, organic farming techniques, and waste reduction strategies.
            </p>
            <Link href="/aboutus" className={styles.exportpageReadMore}>
              Read More
            </Link>
          </div>
        </div> */}

        {/* Export Images Gallery Section */}
        <div className={styles.exportpageImagesSection}>
          <h2 className={styles.exportpageTitle}>Export Images</h2>
          <br>
          </br>
          <div className={styles.exportpageImageGallery}>
          <Image
  src="/assets/Export2.jpeg"
  alt="AGPotato export shipment ready for delivery"
  className={styles.exportpageImage}
  width={800}
  height={600}
/>
<Image
  src="/assets/Export3.jpeg"
  alt="Workers sorting high-quality potatoes for export"
  className={styles.exportpageImage}
  width={800}
  height={600}
/>
<Image
  src="/assets/Export4.jpeg"
  alt="International potato product display in European market"
  className={styles.exportpageImage}
  width={800}
  height={600}
/>
          </div>
        </div>
<SC/>
        <Footer />
      </div>
    </div>
  );
};

export default Export;
