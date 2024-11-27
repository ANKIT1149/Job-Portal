import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Company Name Is Required"]
    },
    
    position: {
        type: String,
        required: [true, "Position is required"],
        maxlength: 100,
    },

    status: {
        type: String,
        enum: ["Accept", "Pending", "Reject"],
        default: "Pending"
    },

    workType: {
        type: String,
        enum: ["Contract", "Internship", "Full-Time", "Part-Time"],
        default: "Full-Time"
    },

    workLocation: {
        type: String,
        default: "Mumbai",
        require: [true, "Work location is necessary"],
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Job = mongoose.model("Job", JobSchema);

export default Job