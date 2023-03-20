// "use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Network from "@/components/Network";
import QuestionAnswers from "@/components/QuestionsAnswers";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Team from "@/components/Team";
import { MantineProvider} from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          // colorScheme: "dark",
        }}
      > */}
        <Navbar />
        <About />
        <Services />
        <ScrollToTop />
        <Team />
        <Network />
        <Contact />
        <QuestionAnswers />
        <Footer />
      {/* </MantineProvider> */}
    </>
  );
}
