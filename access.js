db.collection.aggregate([{$group:{_id:null, count:{$sum:1}}}])

const app = express()
const cors = require(cors)

app.use(cors())

app.get("/", async(req, res)=>{
    res.send({msg:"Data is here"})
})


app.post("/add", async(req, req)=>{
    const  {name, email} = req.body
    const user = new UserModel({name,email})
    user.save()
})

app.put
app.patch
app.delete


app.get("/items", (req,res)=>{
    const page = req.query.page
    const limit = req.query.page
    const stIdx = (page-1) * limit;
    const eIdx = page*limit
    const re={
    }
    if(eIdx < DataTransferItemList.lnegth){
        re.next={
            page:page+1,
            limit:limit
        }
    }
    if(stIdx > 0){

    }
    re.results = items.slice(stIdx,eIdx)
    res.json(re);
})


// {
//     "name":"Prity",
//     "age":26,
//     "class":'graduate'

// }