
import mongoose from "mongoose"
const jobPostingSchema = new mongoose.Schema({

    email : {
        type: Array,
        default: []
    },

    // description: {
    //     type: String,
        
    // },

    contact: {
        type: Array,
        default: []
    },

   


},
    
{timestamps : true}
)

export default mongoose.model('job', jobPostingSchema)  