const express =require('express')
const app =express()

app.use(express.json());

function middleware(req,res,next){
    
}


const kishi=[];
app.post('/kishi',(req,res)=>{
    
    const {email,password}=req.body;
    // const password=req.body;
    kishi.push({email,password});
    
res.send(kishi)
})

app.post('/game',(req,res)=>{
    const game={
        email:"email",
        password:"password"
    }
    kishi.push(game);
    res.send(kishi);
})

app.get('/',(req,res)=>{
    
    res.send(kishi);
})




app.listen(3000,()=>console.log("sever is listening at 3000"));