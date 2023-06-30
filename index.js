require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json())
app.use(cors());

app.post('/portfolio_message',async(req,res)=>{
    console.log(req.body)
    const {name,email,msg}=req.body;
   try {
    if(!name ){
        throw Error("sorry the name field  must be filled  to leave your message !")
    }
    if(!email ){
        throw Error("sorry the email field  must be filled  to leave your message !")
    }
    if(!msg ){
        throw Error("sorry the message field  must be filled  to leave your message !")
    }
    const transport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAILAUTH
        }
    })

    const info = await transport.sendMail({
        from:`'${name}' <${email}>`,
        to:process.env.EMAIL,
        subject:"job purpose !",
        text:"keen to talk to you !",
        html:`<h2>${msg}</h2>`
    });

    if(info){
      await transport.sendMail({
        from:`'Rashid' <${process.env.EMAIL}>`,
        to:email,
        subject:"Recieved your message !",
        html:`<h2>Hello Mr ${name} ! <br>your message has been delivered i will be asnwering you  as soon as possible thank you !!</h2>`
      })
    }

    res.json({msg:"your message has been delivered i will answer you as soon as posible thank you !!!"}).status(201)

   } catch (error) {
      res.status(400).json({error:error.message})
   }
})

app.get("/",(req,res)=>{
    res.send("<h1>Hey welcome to the portfolio server side !!...");
})

app.listen(process.env.PORT,()=>{
    console.log("listening on port 5001 ...")
})