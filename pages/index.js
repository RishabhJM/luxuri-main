import AsTable from "@/components/AsTable";
import Booking from "@/components/Booking";
import CompAdv from "@/components/CompAdv";
import Concierge from "@/components/Concierge";
import DebtStr from "@/components/DebtStr";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import InvestStrat from "@/components/InvestStrat";
import Layout from "@/components/Layout/Layout";
import Map from "@/components/Map";
import Overview from "@/components/Overview";
import Partner from "@/components/Partner";
import Process from "@/components/Process";
import SFTable from "@/components/SFTable";
import Team from "@/components/Team";

export default function Home() {
  return (
    <Layout>
      <div className="w-full overflow-y-auto h-screen no-scrollbar">
        <Hero></Hero>
        <Overview></Overview>
        <InvestStrat></InvestStrat>
        <DebtStr></DebtStr>
        <Education></Education>
        <Map></Map>
        <Team></Team>
        <Partner></Partner>
        <CompAdv></CompAdv>
        <Process></Process>
        <SFTable></SFTable>
        <AsTable></AsTable>
        <Booking></Booking>
        {/* <Chef></Chef> */}
        <Concierge></Concierge>
      </div>
    </Layout>
  );
}
