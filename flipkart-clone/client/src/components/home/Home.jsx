import { useEffect } from 'react';
//componenets

import SlideAd from './SlideAd';
import AdvertisingBanners from './AdvertisingBanners';
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import {Box, styled} from "@mui/material";


import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector} from 'react-redux';


const Border = styled(Box)`
     padding : 10px 0;
     background: #F2F2F2;


`

const Home = () => {

   const { products } = useSelector(state => state.getProducts);

   console.log(products);


   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProducts())

   }, [dispatch])

    return (

    <>
       <NavBar />
       <Border>
       <Banner />
       <SlideAd products={products} title="Deal of the Day" timer={true}/>
       <AdvertisingBanners />
       <Slide products={products} title="Discounts for you" timer={false}/>
       <Slide products={products} title="Suggesting Items"/>
       <Slide products={products} title="Top Selection" timer={false}/>
       <Slide products={products} title="Trending Offers" timer={false}/>
       <Slide products={products} title="Seasons's top picks" timer={false}/>
       <Slide products={products} title="Top Deals on Accessories" timer={false}/>
       <Slide products={products} title="Recommended Items" timer={false}/>
       </Border>

    </>     
 )
}

export default Home;