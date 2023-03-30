

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {styled} from '@mui/material';
import { bannerData } from '../../constants/Data';


const Image = styled('img')(({ theme }) => ({
         width : '100%',
         height : 280,
         objectFit: 'cover',
         [theme.breakpoints.down('lg')]:
         {
            height : 200
         }
}));


const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };


const Banner = () => {
      return (
         <Carousel
            responsive={responsive}
            slidesToSlide={1}
            swipeable={false}
            keyBoardControl={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            autoPlay={true}
            autoPlaySpeed={3000}
            draggable={false}
            infinite={true}
            >

                  {

                        bannerData.map(data => (
                              <Image src = {data.url} alt="banner"/>



                        ) )
                  }

         </Carousel>

      )
}

export default Banner;