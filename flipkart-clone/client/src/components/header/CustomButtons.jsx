


import { Box, Typography, styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderLoginDropdown from "./HeaderLoginDropdown";
//Components






const Wrapper = styled(Box)(({ theme }) => ({
    display : 'flex',
    margin : 'auto',
    '& > *' : {
       marginLeft : 20 ,
       fontSize: 16,
       justifyContent : 'space-between'
    },
    [theme.breakpoints.down('md')]:
    {
        display : 'block'
    }

}));

const Container = styled(Box)(({ theme }) => ({
    display : 'flex',
    [theme.breakpoints.down('md')]:
    {
        display : 'block'
    }

}));





const CustomButtons = () => {

    
    return (
    <Wrapper>
    <HeaderLoginDropdown />
    <Typography style={{ width : 135, marginTop : 5, marginLeft : 15}}>Become a Seller</Typography>
    <Typography style={{ marginTop : 5}}>More</Typography>

    <Container>
        <ShoppingCartIcon  style={{ fontSize: 22,  marginTop : 5}}/>
        <Typography  style={{paddingLeft: 3,  marginTop : 5}}>Cart</Typography>
    </Container>
    
    </Wrapper>
   
    )
}

export default CustomButtons;