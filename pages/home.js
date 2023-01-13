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

// import Leftpanel from "../components/scomponents/leftpanel.jsx";
// import Rightpanel from "../components/scomponents/rightpanel.jsx";

export default function Landing() {
  return (
    <>
      <Head>
        <title>NevercomeX 💻 </title>
      </Head>
      <Navbar transparent />
      <main>
        <Header />
        <Welcome />
        <Proyects />
        <Skills />
        <Formation />
        <Description />
        <Why />
        <Form />
      </main>
      <Footer />
    </>
  );
}
