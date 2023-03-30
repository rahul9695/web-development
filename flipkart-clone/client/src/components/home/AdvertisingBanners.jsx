import React from 'react';

import {Grid, styled} from '@mui/material';

//components
import { imageURL } from '../../constants/Data';

const Wrapper = styled(Grid)`
     margin-top: 10px;
     justify-content : space-between;
`

const CovidImage = styled('img')(({theme}) => ({
      width: '100%',
      display : "flex",
      justifyContent : "space-between",
      [theme.breakpoints.down('md')]:
      {
        objectFit : 'cover',
        height : 120
      }

}));

// const MarketingImage = styled('img')(({theme}) => ({
//         width: '10px'

// }));

const AdvertisingBanners = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
          {
            imageURL.map(image => (
              <Grid item lg={4} md={4} sm={12} xs={12} sx={{padding:0.5}}>
              <img style={{ objectFit : 'cover', width:'100%'}} src={image} alt="advertisingImages"/>
              </Grid>
            ))
          }
        </Wrapper>
        <CovidImage src={url} alt="Covid-19 safety banner" />
    </>
    )
} 

export default AdvertisingBanners;