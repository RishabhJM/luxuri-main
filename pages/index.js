import AsTable from "@/components/AsTable";
import Booking from "@/components/Booking";
import CompAdv from "@/components/CompAdv";
import Concierge from "@/components/Concierge";
import DebtStr from "@/components/DebtStr";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import InvestStrat from "@/components/InvestStrat";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Map from "@/components/Map";
import Overview from "@/components/Overview";
import Partner from "@/components/Partner";
import Process from "@/components/Process";
import Roadmap from "@/components/Roadmap";
import SFTable from "@/components/SFTable";
import Team from "@/components/Team";

export default function Home() {
  return (
    <Layout>
      <div className="w-[98.9vw] overflow-x-hidden no-scrollbar">
        <div id="home">
          <Hero></Hero>
        </div>
        <div id="overview">
          <Overview></Overview>
        </div>
        <div id="invstr">
          <InvestStrat></InvestStrat>
        </div>
        <DebtStr></DebtStr>
        <Education></Education>
        <Map></Map>
        <Team></Team>
        <Partner></Partner>
        <div id="whyus">
          <CompAdv></CompAdv>
        </div>
        <Roadmap></Roadmap>
        <Process></Process>
        <SFTable></SFTable>
        <AsTable></AsTable>
        <Booking></Booking>
        <div id="concierge">
          <Concierge></Concierge>
        </div>
        <Footer></Footer>
      </div>
    </Layout>
  );
}
