import "@/styles/globals.css";
import { Raleway, Italiana } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${italiana.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
