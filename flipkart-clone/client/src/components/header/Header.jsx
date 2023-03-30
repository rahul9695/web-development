import {useState} from 'react';


//material UI Component
import { AppBar, Toolbar, styled, Box, Typography, Drawer, IconButton, List, ListItem, ListItemButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//Components
import Search from './Search';
import CustomButtons from "./CustomButtons";

import { Link } from 'react-router-dom';

const StyledHeader = styled (AppBar)`
background : #2874f0;
height : 55px;
`;

const BoxComponent = styled(Link)(({ theme }) => ({
    marginLeft : '12%',
    lineHeight : 0,
    textDecoration : 'none',
    color : 'inherit',
    [theme.breakpoints.down('lg')]:
    {
        marginLeft : '1%'
    }

}));


const SubHeading = styled (Typography)`
font-size : 10px;
font-style : italic;
`;

const PlusImage = styled('img')({

    width : 10,
    height : 10,
    marginLeft : 3,
    
})

const CustomButtonWrapper = styled (Box)(({ theme }) => ({
    margin : 'auto 4% auto auto',
    [theme.breakpoints.down('md')]: {
        display : 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
      display : 'none',
      color : 'inherit',
      [theme.breakpoints.down('md')]:
        {
         display : 'block',
        }
}));

// const Container = styled(Box)`
//       display : flex;
//       flex-direction : column;
// `




const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    }

    const list = () => (
        <Box style={{ width : '100%'}} onClick={handleClose}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <CustomButtons />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )


    return (
        <StyledHeader>
            <Toolbar style = {{minHeight : 55}}>
                <BoxComponent to='/'>
                    {/* <h1 className="Figguaa-logo"style={{ }}>Figguaa</h1> */}
                    <img src ={logoURL} alt="logo" style={{width: 75}} />
                    <Box style ={{ display : 'flex'}}>
                        <SubHeading> 
                            Explore&nbsp;
                            <Box component="span" style={{color : "#FFE500"}}>Plus</Box>
                        </ SubHeading>
                        <PlusImage src ={subURL} alt = "plus-logo"  />
                    </Box>
                 </BoxComponent>
                    <Search />
                        <CustomButtonWrapper>
                            <CustomButtons />
                        </CustomButtonWrapper>
                        <MenuButton onClick = {handleOpen}>
                            <MenuIcon style={{fontSize : 33, marginTop:5}} />
                        </MenuButton>
                        <Drawer open={open} onClose={handleClose}>
                            {list()}
                        </Drawer>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;