import React from 'react'

import { Box, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LeftContainer = styled(Box)`
      margin-top : 50px;
`;

const Image = styled('img')({
      width : 'auto',
      height : 'auto'
})

const StyledButton = styled(Button)`
     width : 48%;
     height : 50px;
     border-radius : 2px;
     margin-left : 6px;
`

const ProductImage = styled(Box)(({ theme }) => ({
     textAlign : 'center',
     
}));


const ActionItem = ({product}) => {
  return (
    <LeftContainer>
      <ProductImage style={{ }}>
         <Image src={product.detailUrl} alt='ProductImage'/>
      </ProductImage>
        <StyledButton variant='contained' style={{ background :'#ff9f00' }}><ShoppingCartIcon /> Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{ background : '#fb541b'}}> <FlashOnIcon /> Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem;