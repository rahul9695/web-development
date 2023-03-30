import React from 'react'

import { Box, Typography, styled, Table, TableBody, TableRow, TableCell} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OffersText = styled(Box)`
      font-size : 14px;
      vertical-align : baseline;
      & > p {
        font-size : 16px;
        margin-top: 6px;
      }
`

const StyledBadge = styled(LocalOfferIcon)`
      margin-right : 10px;
      color : #00CC00;
      font-size : 15px;
`

const ColumnText = styled(TableRow)`
     font-size : 14px;
     vertical-align : baseline;
     & > td {
      font-size : 14px;
      margin-top : 10px;
      border : none;
     }
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date( new Date().getTime()+( 5 * 24 * 60 * 60 * 1000));
  return (
    <Box style={{margin : '0px 20px', marginTop : 50}}>
        <strong style={{fontSize : 20}}>{product.title.longTitle}</strong>
        <Typography style={{ marginTop : 5, color : '#878787', fontSize: 14, display : 'flex'}}>
        8 Rating & 1 Review
        <Box> <img src={fassured} alt='Fassured Imagelogo' style={{ width : 87, marginLeft : 20}}/> </Box>
        </Typography>
        <Typography>
            <Box component="span" style={{ fontSize : 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;
            <Box component="span" style={{ color : '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;
            <Box component="span" style={{ color : '#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offer</Typography>
        <OffersText>
            <Typography><StyledBadge /><span style={{position : 'relative', bottom: 2}}><strong>Special Offer</strong> Get extra 48% off (price inclusive of cashback/coupon) <a href="http://www.google.com"> T&C</a></span></Typography>
            <Typography><StyledBadge /><span style={{position : 'relative', bottom: 2}}><strong>Bank Offer</strong> 10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above <a href="http://www.google.com"> T&C</a></span></Typography>
            <Typography><StyledBadge /><span style={{position : 'relative', bottom: 2}}><strong>Bank Offer</strong> 10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above <a href="http://www.google.com"> T&C</a></span></Typography>
            <Typography><StyledBadge /><span style={{position : 'relative', bottom: 2}}><strong>Bank Offer</strong> 5% Cashback on Flipkart Axis Bank Card <a href="http://www.google.com"> T&C</a></span></Typography>
        </OffersText>
        <Table>
          <TableBody>
            <ColumnText>
              <TableCell style={{ color : '#878787' }}>Delivery</TableCell>
              <TableCell style ={{ fontWeight : 600}}>Delivery by {date.toDateString()} | ₹40/-</TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color : '#878787' }}>Warranty</TableCell>
              <TableCell>No warranty</TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color : '#878787' }}>Seller</TableCell>
              <TableCell><span style ={{ color : '#2874f0', fontSize: 16}} >Retail Net</span><img src={fassured} alt='Fassured Imagelogo' style={{ width : 67, marginLeft : 10, position : 'relative', top : 4}}/>
                   <Typography style={{ fontSize : 14 }}><FiberManualRecordIcon style={{fontSize: 10 , color: 'grey', marginRight : 3 }}/>14 Days Return Policy <a href="http://www.google.com">  ?</a></Typography>
                   <Typography style={{ fontSize : 14 }}><FiberManualRecordIcon style={{fontSize: 10 , color: 'grey', marginRight : 3 }}/>14 Days Return Policy <a href="http://www.google.com">  ?</a></Typography>
              </TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell colspan={2}>
                   <img src={adURL} alt ="Flipkart Super Coins" style={{ width : 390 }}/>
              </TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color : '#878787' }}>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </ColumnText>
          </TableBody>
        </Table>
      </ Box>
  )
}

export default ProductDetail;