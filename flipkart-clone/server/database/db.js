import mongoose from "mongoose";




export const Connection = async (USERNAME, PASSWORD) => {
    // const URL = `mongodb+srv://${USERNAME} : ${PASSWORD}@ecommerce-flipkart-clon.l7xbzoh.mongodb.net/Ecommerce-Flipkart-Clone?retryWrites=true&w=majority`;
    const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@flip-ecommerce.dwzlqdn.mongodb.net/?retryWrites=true&w=majority`

    try{
       await mongoose.connect(URL , { useUnifiedTopology : true, useNewUrlParser : true  });
        console.log('Database connected sucessfully');
    } catch(error) {
       console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;    