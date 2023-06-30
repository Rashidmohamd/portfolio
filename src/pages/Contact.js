import {useState}from "react"
const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState("");
  const [msg,setMsg]=useState("")
  const [stat,setStat]=useState("")
  const [err,setErr]=useState("");
  
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    e.target.disabled=true;
    if(!email.includes("."||"@"||"com")){
        setErr("sorry you must use a valid email address");
        setStat("")
        e.target.disabled=false;
        return;
    }
    if(name.length<=2){
      setErr("please use a valid name thank you !")
      setStat("")
      e.target.disabled=false;
      return;
    }
    if(msg.length<=10){
      setErr("sorry you can not leave a empty or less than 10 character message !")
      setStat("")
      e.target.disabled=false;
      return;
    }
    const res= await fetch(process.env.REACT_APP_Uri,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        name:name,email:email,msg:msg
      })
    })

    const json = await res.json();

    if(res.status ===200){
      setStat(json.msg)
      console.log(json)
      setErr("")
      setMsg("");
      setEmail('');
      setName("");
      e.target.disabled=false;
    
    }else{
      setErr(json.error)
      setStat("");
      e.target.disabled=false;
     
    }

  }
    return ( 
        <>
          <div className="contact">
            <div className="Text">
              <h1 className="head">Contact me!</h1>
              <p className="prag">Want a website for your brand and business? <br/>I can build what you desire!....</p>
              <img id="img" src="/contact.png" alt="contact_img" />
            </div>
            <form  className="form">
              <h3 className="note">
                <big>Note!</big> <br />
                plese use a vild email address so that i will be able to reach you!
              <br />you will get an email black when your message has delevered !
              <br /><span>if you do not get an email back after submiting please check your email and try to leave your message again ! <br /> <big>Thank you !!</big> </span></h3>
              {err && <h3 className="err">{err}</h3>}
              {stat && <h3 className="succ">{stat}</h3>}
              <label htmlFor="name">Name :</label>
              <input onChange={e=>setName(e.target.value.toUpperCase())} value={name}  placeholder="Enter Your Name!" type="text" required/>
              <label htmlFor="email">Emial :</label>
              <input  type="email"  placeholder="Enter your Email!" value={email} onChange={e=>setEmail(e.target.value.toLowerCase())} name="email" id="email" required/>
              <label htmlFor="message">Message :</label>
              <textarea required value={msg} placeholder="Please type your message here Notice you can not just Submit an empty or less than 10 character Message!" onChange={e=>setMsg(e.target.value)} name="message" id="message" cols="30" rows="10"></textarea>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </>
     );
}
 
export default Contact;