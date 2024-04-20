const express =require("express")
require("./config")
const product =require("./product")

const app = express();
app.use(express.json())
app.put("/update/:_id",  async (req,resp)=>{
    let data = await product.updateOne(req.params,{$set:req.body})
    
    resp.send(data)
   
})
app.listen(5000)