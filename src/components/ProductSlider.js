'use client';

import React from 'react';

import { shoes } from '@/data/content';

import ProductCard from './ProductCard';
import Slider from './common/slider';

const data = shoes.slice(3, 9);

const ProductSlider = () => {
  return (
    <div className="">
      <Slider
        itemPerRow={4}
        data={data}
        renderItem={(item) => {
          if (!item) {
            return null;
          }
          return (
            <ProductCard showPrevPrice product={item} className="bg-white" />
          );
        }}
      />
    </div>
  );
};

export default ProductSlider;
