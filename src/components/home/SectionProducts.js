import React from 'react';

import Filter from '../Filter';
import ProductCard from '../ProductCard';
import { productsSection, shoes } from '../../data/content';

import Heading from '../heading';
import ButtonPrimary from '../common/Button/buttonPrimary';


const SectionProducts = () => {
  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>
      <Filter />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {shoes.map((shoe) => (
          <ProductCard
            key={shoe.shoeName}
            product={shoe}
            className="border-neutral-300"
          />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionProducts;
