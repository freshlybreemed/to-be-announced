import { NextApiRequest, NextApiResponse } from "next"
import { ticketTemplate } from "./ticketTemplate"
const pdf = require('html-pdf');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {order,event} = req.body

   return  await pdf.create(ticketTemplate.content(order, event),{width: '50mm',
    height: '90mm'}).toBuffer(async (err,buffer)=>{
        res.send(buffer)
      })
      
    
    }