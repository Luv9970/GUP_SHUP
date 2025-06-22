import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    //Participants in the conversation. It is an array.
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    }]
},{timestamps:true}) 

export default mongoose.model('Conversation' , conversationSchema);
