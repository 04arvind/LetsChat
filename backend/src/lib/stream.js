import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY
const apiScret = process.env.STREAM_API_SECRET

if(!apiKey || !apiScret){
    console.error("Stream API key or Secret is missing");
}
export const streamClient = StreamChat.getInstance(apiKey,apiScret);

export const upsertStreamUser = async (userData)=>{
 try {
    await streamClient.upsertUsers([userData]);
    return userData
 } catch (error) {
    console.error("Error upserting stream user : ",error);
 }   
};


export const generateStreamToken = (userId)=>{
   try {
      // ensure userid is a string
      const userIdstr = userId.toString();
      return streamClient.createToken(userIdstr);
   } catch (error) {
      console.log("Error generating stream token : ",error);
   }
};