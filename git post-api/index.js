const express =require("express")
require("./config")
const product =require("./product")

const app = express();
app.use(express.json())
app.post("/create",  async (req, resp)=>{
    let data =new product(req.body);
    let result = await data.save();
    resp.send("done")
    console.log(result)
})
app.listen(5000)