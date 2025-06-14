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

// TODO : do it later
export const generateStreamToken = (userId)=>{};