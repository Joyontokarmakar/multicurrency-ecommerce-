import { pathOr } from 'ramda';
import React, { useEffect, useState } from 'react';
import { shoes } from '../../../data/content';
import SectionMoreProducts from './SectionMoreProducts';
import SectionNavigation from './SectionNavigation';
import SectionProductHeader from './SectionProductHeader';
import SectionProductInfo from './SectionProductInfo';
import { useRouter } from 'next/router';

const getProductData = async (id) => {
  console.log('Fetching product data for ID:', id); // Debug log
  const filteredDestination = shoes.find((item) => item.slug === id);
  console.log('Filtered Destination:', filteredDestination); // Debug log
  return filteredDestination;
};

const SingleProductPage = ({ params = {} }) => {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const productId = router.query.productId;
      console.log('Product ID:', productId); // Debug log
      if (productId) {
        const productData = await getProductData(productId);
        console.log('Product Data:', productData); // Debug log
        setSelectedProduct(productData);
      }
    };

    fetchProductData();
  }, [params.productId]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <SectionNavigation />
      <div className="mb-20">
        <SectionProductHeader
          shots={pathOr([], ['shots'], selectedProduct)}
          shoeName={pathOr('', ['shoeName'], selectedProduct)}
          prevPrice={pathOr(0, ['previousPrice'], selectedProduct)}
          currentPrice={pathOr(0, ['currentPrice'], selectedProduct)}
          rating={pathOr(0, ['rating'], selectedProduct)}
          pieces_sold={pathOr(0, ['pieces_sold'], selectedProduct)}
          reviews={pathOr(0, ['reviews'], selectedProduct)}
        />
      </div>
      <div className="mb-28">
        <SectionProductInfo
          overview={pathOr('', ['overview'], selectedProduct)}
          shipment_details={pathOr([], ['shipment_details'], selectedProduct)}
          ratings={pathOr(0, ['rating'], selectedProduct)}
          reviews={pathOr(0, ['reviews'], selectedProduct)}
        />
      </div>
      <div className="mb-28">
        <SectionMoreProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
