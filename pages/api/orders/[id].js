// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";
export default async function handler(req, res) {
    const {method, query:{id}} = req;
    await dbConnect();

    if(method==="GET"){

    }

    if(method="PUT"){
      
    }
    if(method="DELETE"){

    }
  }
  