const express =require("express")
require("./config")
const product =require("./product")

const app = express();
app.use(express.json())
app.delete("/delete/:key",  async (req, resp)=>{
    let data = await product.deleteOne(req.params);
    
    resp.send("done ")
   
})
app.listen(5000)