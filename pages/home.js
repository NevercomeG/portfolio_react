import Head from "next/head.js";
import React from "react";
import Navbar from "../components/bcomponents/navbar";
import Footer from "../components/bcomponents/footer";
import Skills from "../components/bcomponents/skills";
import Formation from "../components/bcomponents/formation";
import Proyects from "../components/bcomponents/proyects";
import Header from "../components/bcomponents/header";
import Why from "../components/bcomponents/why";
import Description from "../components/bcomponents/description";
import Welcome from "../components/bcomponents/welcome";
import Form from "../components/scomponents/form";

import Frontend from "../components/scomponents/frontend";
import Backend from "../components/scomponents/backend";
import Devops from "../components/scomponents/devops";

export default function Landing() {
  return (
    <>
      <Head>
        <title>NevercomeX 💻 </title>
      </Head>
      <Navbar transparent />
      <main>
        <Header />
        <section className="bg-[#131313]">
          <h1 className="text-5xl font-mono text-center py-5">WHAT I DO?</h1>
          <Frontend />
          <Backend />
          <Devops />
        </section>
        <Welcome />
        <Proyects />
        {/* <Skills /> */}
        <Formation />
        <Description />
        {/* <Why /> */}
        {/* <Form /> */}
      </main>
      <Footer />
    </>
  );
}
