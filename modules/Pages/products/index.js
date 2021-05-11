import React from 'react';
import ProductListing from './ProductListing';
import {useIntl} from 'react-intl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppsContainer from '../../../@crema/core/AppsContainer';
import ProductsSidebar from './ProductsSidebar';

const Products = () => {
  const {messages} = useIntl();
  return (
   <div style={{ padding: 30 }}>
      <AppsContainer
      title={messages['sidebar.ecommerce.products']}
      sidebarContent={<ProductsSidebar />}>
      <ProductListing />
    </AppsContainer>
   </div>
  );
};

export default Products;
