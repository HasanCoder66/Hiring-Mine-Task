
import mongoose from "mongoose"
const jobPostingSchema = new mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true
    // },

    email : {
        type: String,
        required: true,
        unique : true
    },

    description: {
        type: String,
        // required: true,
    },

    contact: {
        type: String,
        // required: true,
    },

   


},
    
{timestamps : true}
)

export default mongoose.model('job', jobPostingSchema)  