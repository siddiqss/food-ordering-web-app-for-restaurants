// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";
// var mongoose = require('mongoose');
// var Order = mongoose.model('Order')
export default async function handler(req, res) {
    const {method} = req;
    await dbConnect();
    if(method==="GET"){
      try {
        const orders = await Order.find();
        res.status(200).json(orders);
        
      } catch (error) {
        res.status(500).json(error);
      }
    }

    if(method==="POST"){
      try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
        
      } catch (error) {
        res.status(500).json(error);
      }

    }
  }
  