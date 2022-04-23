import mongoose from "mongoose";

// delete mongoose.connection.models['Order'];
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0
    },
    method: {
        type: Number,
        required: true
    },
    customer_phone_number: {
      type: String,
      required: true,
      maxLength: 20
    }
  },
  { timestamps: true }
);

export default (mongoose.models && mongoose.models.Order
  ? mongoose.models.Order
  : mongoose.model('Order', OrderSchema));

