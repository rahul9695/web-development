import React from 'react';
import {useState, useContext} from 'react';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ViewListIcon from '@mui/icons-material/ViewList';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';

import {Box, styled, Tooltip, Button, tooltipClasses, Typography} from '@mui/material';


// Components
import LoginDialog from '../login/LoginDialog';
// import Profile from './profile';
import { DataContext } from '../../context/DataProvider';





const LogindropDown = styled(Box)`
         display : flex;
         flex-direction: column;
         background-color : white;
         width: 200px;
`

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor : "white",
    textAlign : "center",
    margin : "auto"
  }
});

  const LinkStyle = styled (Button)`
         
        text-decoration : none;
        border-bottom: 1px solid #D3D3D3;
        padding: 15px 15px 15px 10px;
        display:flex;
        justify-content:left;
     :hover{
        color : orange;
        text-decoration : underline;
        }
        
  
  `

  const LoginButton = styled(Button)`
                Color : black;
                background-color : #fff;
                text-transform: none;
                padding : 5px 40px;
                border-radius : 2px;
                box-shadow : none;
                font-weight : 600;
                height : 32px;
              :hover {
                color : black;
                background-color : #FFE500;


     }


`

const HeaderLoginDropdownTitle = styled(Typography)`

        font-size:15px;
        margin: auto 0 auto 15px;
        padding : 0;
        text-transform : capitalize;
        

`

 


const HeaderLoginDropdown = () => {

  const [open, setOpen] = useState(false);

  const {account, setAccount} = useContext(DataContext);

  const openDialog = () => {
        setOpen(true);
  }

  const logout = () => {
    setAccount('');
}
const handleClose = () => {
     setOpen(false);
}
 




  return (
    <div>
    <CustomTooltip arrow title={
        <LogindropDown>
            <LinkStyle>
                  <AccountCircleIcon fontSize="small"/>
                  <HeaderLoginDropdownTitle>My Profile</HeaderLoginDropdownTitle>
            </LinkStyle>
            
            <LinkStyle >
                  <BoltIcon fontSize="small"/>
                  <HeaderLoginDropdownTitle>Super Coin Zone</HeaderLoginDropdownTitle>
            </LinkStyle>
                  <LinkStyle>
                  <DataSaverOnIcon fontSize="small" />
                  <HeaderLoginDropdownTitle>Flipkart Plus Zone</HeaderLoginDropdownTitle>
            </LinkStyle>
            <LinkStyle >
                  <ViewListIcon fontSize="small"/>
                  <HeaderLoginDropdownTitle>Orders</HeaderLoginDropdownTitle>
            </LinkStyle>
            <LinkStyle >
                  <FavoriteIcon fontSize="small" />
                  <HeaderLoginDropdownTitle>Wishlist</HeaderLoginDropdownTitle>
            </LinkStyle>
            <LinkStyle>
                  <CurrencyRupeeIcon fontSize="small"/>
                  <HeaderLoginDropdownTitle>Coupons</HeaderLoginDropdownTitle>
            </LinkStyle>
            <LinkStyle>
                  <CardGiftcardIcon fontSize = "small"/>
                  <HeaderLoginDropdownTitle>Gift Cards</HeaderLoginDropdownTitle>
            </LinkStyle>
            <LinkStyle>
                  <NotificationsActiveIcon fontSize="small"/>
                  <HeaderLoginDropdownTitle>Notifications</HeaderLoginDropdownTitle>
            </LinkStyle>
            <LinkStyle onClick={() => { handleClose(); logout();}}>
                  <LogoutIcon fontSize="small"/>
                  <HeaderLoginDropdownTitle >Logout</HeaderLoginDropdownTitle>
            </LinkStyle>
        </LogindropDown>
    }>
       {
      account ? <Typography>{account}</Typography> :
      <LoginButton onClick={() => openDialog()}>Login</LoginButton>

    }  
    </CustomTooltip>
   
    <LoginDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default HeaderLoginDropdown; 


