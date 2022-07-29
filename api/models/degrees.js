import mongoose from "mongoose";

const degreesSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        },
        subjects:{
            type:String,
        },
        subject_qt:{
            type:Number,
        },
    },
    { timestamps:true },
);

const Degree = mongoose.model("Degree",degreesSchema)

export default Degree;