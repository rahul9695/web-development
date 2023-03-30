import React from 'react'
import {useState, useContext} from "react"
import { authenticateSignup, authenticateLogin } from '../../services/api';
import { DataContext } from '../../context/DataProvider'
import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



const LoginDialogMainComponent = styled(Box)`
         height : 80vh;
         width : 100vh;
         display : flex;
         overflow : hidden;
`

const ExitButton = styled(Button)`
      position : absolute ;
      top : 0px;
      right : 0px;
      border-radius : 10%;
`

const LeftDialogImage = styled(Box)`
        background : #2974f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") center 85% no-repeat;
        height : 84%;
        width : 28%;
        text-align : left;
        padding : 45px 35px;
         color : white;
`

const RightDialogImage = styled(Box)`
        display : flex;
        flex-direction : column;
        padding : 25px 35px;
        flex : 1;
        & > div, & > button, & > p {
         margin-top : 20px;
        }
`

const LoginButton = styled(Button)`
        text-transform : none;
        background-color : #FB641B;
        color : #fff;
        height : 48px;
        border-radius : 2px;
        :hover {
         background-color : #2974f0;
        }

`

const RequestOTPButton = styled(Button)`
        text-transform : none;
        background-color : #fff;
        color : #2874f0;
        height : 48px;
        border-radius : 2px;
        box-shadow : 0 2px 4px 0 rgb( 0 0 0/ 20%)
        
`

const Error = styled(Typography)`
       font-size : 10px;
       color : #ff6161;
       line-height : 0;
       margin-top: 10px;
       font-weight : 600;
       `


const LoginInitalState = {
   login : {
      view : 'login',
      heading : "Login",
      subHeading : "Get access to your Orders, Wishlist and Recommendations"
   },
   signup : {
      view : 'signup',
      heading : "Looks like you're new here!",
      subHeading : "Sign up with your mobile number to get started"
   }
}

const signupInitialValues = {
      fullname : " ",
      username : " ",
      email : " ",
      password : " ",
      mobileNumber : " "


}

const LoginInitialValues = {
           username : " ",
           password : " "

}

const LoginDialog = ({open, setOpen}) => {

   const [account, toggleAccount] = useState(LoginInitalState.login);
   const [signup, setSignup] = useState(signupInitialValues);
   const [login, setLogin] = useState (LoginInitialValues);
   const [error, setError] = useState (false);

   const { setAccount } = useContext(DataContext);

   const handleClose = () => {
      setOpen(false);
      toggleAccount(LoginInitalState.login);
      setError(false);
   }

   const toggleSignUp = () => {
      toggleAccount(LoginInitalState.signup);
   }

   const loginToggle = () => {
      toggleAccount(LoginInitalState.login);
   }

   const exitLoginButton = () => {
      setOpen(false);
      toggleAccount(LoginInitalState.login);
   }

   const loginUser = async () => {
      const response = await authenticateLogin(login);
      console.log(response);
      if (response.status === 200) {
         handleClose();
         setAccount(response.data.data.username);
      } else {
         setError(true);
      }
   }

   const signupUser = async () => {
      const response = await authenticateSignup(signup);
      console.log(response);
      if (!response) return;
      handleClose(); 
      setAccount(signup.fullname); 
   }

   
   const onInputChange = (e) => {
       setSignup({ ...signup, [e.target.name] : e.target.value });
   }

   const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name] : e.target.value });
   }


   return (
    <Dialog open={open} onClose={handleClose} PaperProps = {{sx : {maxWidth : "unset"}}}>
      <ExitButton onClick={() => exitLoginButton()}><CloseIcon  fontSize="large"  /></ExitButton>
       <LoginDialogMainComponent>
           <LeftDialogImage>
               <Typography variant="h5" style={{fontWeight : 600, fontSize :30}} >{account.heading}</Typography>
               <Typography style={{marginTop : 15, color : "#E5E4E2"}} >{account.subHeading}</Typography>

           </LeftDialogImage>
           {
             account.view === 'login' ?
            <RightDialogImage>
               <TextField variant= "standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Username" />

                 { error && <Error>Please enter a valid username or password</Error>}

               <TextField variant= "standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
               <Typography style={{fontSize : 12, color : "#878787"}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
               <LoginButton onClick ={() => loginUser()}>Login</LoginButton>
               <Typography style={{textAlign : "center"}}>OR</Typography>
               <RequestOTPButton>Request OTP</RequestOTPButton>
               <Button onClick= {() => toggleSignUp()} style ={{fontSize : 14, textAlign : "center", color : "#2874f0", fontWeight : 600, cursor : "pointer", marginTop : 70}}>New to Flipkart? Create an account</Button>
            </RightDialogImage>
        : 
            <RightDialogImage>
               <TextField variant= "standard" onChange={(e) => onInputChange(e)} name="fullname"  label="Enter your full name" />
               <TextField variant= "standard" onChange={(e) => onInputChange(e)} name="username" label="Enter username" />
               <TextField variant= "standard" onChange={(e) => onInputChange(e)} name="email" label="Enter your email" />
               <TextField variant= "standard" onChange={(e) => onInputChange(e)} name="password" label="Enter password" />
               <TextField variant= "standard" onChange={(e) => onInputChange(e)} name="mobileNumber" label="Enter Mobile number" />
               <LoginButton onClick = {() => signupUser()}>Continue</LoginButton>
               <RequestOTPButton onClick={() => loginToggle()}>Existing User? Log in</RequestOTPButton>
            </RightDialogImage>
         }

      </LoginDialogMainComponent>
    </Dialog>
  )
}

export default LoginDialog;