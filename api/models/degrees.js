import mongoose from "mongoose";

const degreesSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        },
        subjects:{
            type:[String],
        },
        subject_qt:{
            type:Number,
        },
        university:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"University"
        }
    },
    { timestamps:true },
);

const Degree = new mongoose.model("Degree",degreesSchema)

export default Degree;