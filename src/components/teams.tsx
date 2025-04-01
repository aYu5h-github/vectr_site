import React from 'react'
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Teams: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Team | My Next.js Website</title>
        <meta name="description" content="Meet our talented team" />
      </Head>
      <Header />
      <div>
        <h1>WELCOME TO THE TEAM&apos;S SECTION</h1>
      </div>
      <Footer />
    </>
  );
};

export default Teams;