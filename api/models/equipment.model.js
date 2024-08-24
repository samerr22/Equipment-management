import mongoose from 'mongoose';

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    Reqdata: {
      type: String,
      required: true,
      
    },
    Task: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
     
    },
    fund: {
      type: Number,
      required: true,
     
    },
   
  },
  { timestamps: true }
);

const Equipment = mongoose.model('Equipment', equipmentSchema);

export default Equipment;