import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//component
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

import { Box, styled, Grid } from '@mui/material';

const Component = styled(Box)`
      background : #F2F2F2;
      display : flex;
      width : 100%;
`;

const Container = styled(Grid)(({ theme }) => ({
  background : '#FFFFFF',
  display : 'flex',
  margin : '0 20px',
  width: '100%',
  [theme.breakpoints.down('md')] : {
    margin : 0
  }

}));
    

// const RightContainer = styled(Grid)`
// `;

const DetailProductView = () => {


  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if ( product && id !== product.id)
    dispatch(getProductDetails(id))
  }, [dispatch, id, loading, product])

  return (
    <Component>
        {
            product && Object.keys(product).length &&
              <Container container>
                  <Grid  item lg={4} md={12} sm={12} xs={12}>
                    <ActionItem product={product} />
                  </Grid>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                    <ProductDetail product={product} />
              </Grid>
              </Container>
        }
    </Component>
  )
}

export default DetailProductView;