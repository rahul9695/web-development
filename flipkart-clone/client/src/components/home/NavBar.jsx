
import {Box, styled, Typography} from "@mui/material";

import { navData } from "../../constants/Data";


const CategoryComponent = styled(Box)(({ theme }) => ({
             display : 'flex',
             margin : "55px 130px 0 130px",
             justifyContent : 'space-between',
             [theme.breakpoints.down('md')]: {
              margin : 0,
              overflow : 'scroll',
             }
}));


const CategoryContainer = styled(Box)`
        padding : 12px 8px;
        text-align : center;

`

const Text = styled(Typography)`
      font-size : 14px;
      font-weight : 600;
      font-family : inherit;

`

const NavBar = () => {
    return (
       <CategoryComponent className="categoryComponent">
           {

            navData.map(data => (
                <CategoryContainer>
                    <img src = {data.url} alt = "nav" style={{width : 64}} />

                   <Text> {data.text}</Text>
                </CategoryContainer>
            ))

           }

       </CategoryComponent>
    )
}

export default NavBar;