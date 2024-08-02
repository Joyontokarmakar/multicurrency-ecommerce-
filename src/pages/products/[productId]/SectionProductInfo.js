import React from 'react';

import ProductInfoTab from './ProductInfoTab';
import Ratings from './Ratings';

const SectionProductInfo = ({
  overview,
  shipment_details,
  ratings,
  reviews,
}) => {
  return (
    <div className="grid gap-16 lg:grid-cols-2">
      <ProductInfoTab overview={overview} shipment_details={shipment_details} />
      <Ratings rating={ratings} reviews={reviews} />
    </div>
  );
};

export default SectionProductInfo;
