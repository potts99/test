import React from 'react';
import ProductListing from './ProductListing';
import {useIntl} from 'react-intl';
import AppsContainer from '../../../../@crema/core/AppsContainer';
import ProductsSidebar from './ProductsSidebar';

const Products = () => {
  const {messages} = useIntl();
  return (
    <div style={{padding: 30}}>
      <AppsContainer
        title={messages['sidebar.ecommerce.products']}
        sidebarContent={<ProductsSidebar />}>
        <ProductListing />
      </AppsContainer>
    </div>
  );
};

export default Products;
