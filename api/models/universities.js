import mongoose from "mongoose";

const universitiesSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        },
        college_degree:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Degree",
        }],
        college_degree_qt:{
            type:Number,
        }
    },
    { timestamps:true },
);

//En caso de no establecer un id a mano se establece _id automaticamente
universitiesSchema.pre("remove",function(next){
    this.model("Degree").deleteMany({user:this._id},next)
})

const University = new mongoose.model("University",universitiesSchema)

export default University;