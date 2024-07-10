import React from "react";

import SectionHeader from "../components/home/SectionHeader";
import SectionBestDeals from "../components/home/SectionBestDeals";
import SectionProducts from "../components/home/SectionProducts";
import SectionBrands from "../components/home/SectionBrands";

export default function Home() {
  
  return (
    <div>
      <div className="my-7">
        <SectionHeader/>
      </div>

      <div className="mb-32">
        <SectionBestDeals />
      </div>

      <div className="mb-32">
        <SectionProducts />
      </div>

      <div className="mb-32">
        <SectionBrands />
      </div>
    </div>
  );
}
