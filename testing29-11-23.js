const express =require('express')
const app =express()
const jwt = require('jsonwebtoken');

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
app.post('/admin/signup', (req, res) => {
    const { username, password } = req.body;
    const admin = ADMINS.find(a => a.username === username);
    console.log("admin signup");
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const newAdmin = { username, password };
      ADMINS.push(newAdmin);
      fs.writeFileSync('admins.json', JSON.stringify(ADMINS));
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }
  });




app.listen(3000,()=>console.log("sever is listening at 3000"));