import React from 'react';

import { brandsSection } from '../../data/content';
import BrandCard from '../brandCard';
import Heading from '../heading';
import ButtonPrimary from '../common/Button/buttonPrimary';

const SectionBrands = () => {
  return (
    <div className="container">
      <Heading desc={brandsSection.description} isCenter isMain>
        {brandsSection.heading}
      </Heading>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {brandsSection.brands.map((brand) => (
          <BrandCard key={brand.brandName} {...brand} />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionBrands;
