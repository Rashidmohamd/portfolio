import {useState}from "react";
const Contact = () => {
  const noteScreen = document.querySelector(".noteScreen");
  const noteBlog= document.getElementById("noteBlog");
  const [name,setName]=useState('');
  const [email,setEmail]=useState("");
  const [msg,setMsg]=useState("")
  const [err,setErr]=useState("");
  const [pending,setPending]=useState(false)
  

  const handleSubmit= async(e)=>{
    e.preventDefault();
    e.target.disabled=true;
    setPending(true)
    noteScreen.style.display="flex"
    if(!email.includes("."||"@"||"com")){
        setErr("sorry you must use a valid email address");
        e.target.disabled=false;
        setPending(false)
        noteScreen.style.display="none"
        return;
    }
    if(name.length<=2){
      setErr("please use a valid name thank you !")
      e.target.disabled=false;
      setPending(true)
      noteScreen.style.display="none"
      return;
    }
    if(msg.length<=10){
      setErr("sorry you can not leave a empty or less than 10 character message !")
     setPending(false)
      e.target.disabled=false;
      noteScreen.style.display="none"
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
      noteBlog.classList.add("noteBlog");
      noteBlog.classList.remove("hideNote")
      noteScreen.style.display="flex"
      setTimeout(() => {
        noteBlog.classList.add("hideNote");
        noteBlog.classList.remove("noteBlog")
        noteScreen.style.display="none"
      }, 7000);

      setErr("")
      setMsg("");
      setEmail('');
      setName("");
      setPending(false)
      e.target.disabled=false;
    
    }else{
      setMsg("");
      setEmail('');
      setName("");
      setPending(false)
      setErr(json.error)
      e.target.disabled=false;
     
    }

  }

  const hideThankScreen=(e)=>{
     e.preventDefault();
     noteBlog.classList.add("hideNote");
     noteBlog.classList.remove("noteBlog")
     noteScreen.style.display="none"
  }
    return ( 
        <>
          <div className="contact">
            <div className="Text">
              <h1 className="head">Contact me!</h1>
              <p className="prag">Want a website for your brand or business? <br/>I can build what you desire!....</p>
              <img id="img" src="/contact.png" alt="contact_img" />
            </div>
            <form  className="form">
              <h3 className="note">
                <big>Note!</big> <br />
                please use a valid email address so that i will be able to reach you!
              <br />you will get an email back when your message has delivered !
              <br /><span>if you do not get an email back after submiting please check your email and try to leave your message again thank you! <br /> <big>Thank you !!</big> </span></h3>
              {err && <h3 className="err">{err}</h3>}
              <label htmlFor="name">Name :</label>
              <input onChange={e=>setName(e.target.value.toUpperCase())} value={name}  placeholder="Enter Your Name!" type="text" required/>
              <label htmlFor="email">Emial :</label>
              <input  type="email"  placeholder="Enter your Email!" value={email} onChange={e=>setEmail(e.target.value.toLowerCase())} name="email" id="email" required/>
              <label htmlFor="message">Message :</label>
              <textarea required value={msg} placeholder="Please type your message here Notice you can not just Submit an empty or less than 10 character Message!" onChange={e=>setMsg(e.target.value)} name="message" id="message" cols="30" rows="10"></textarea>
              <button onClick={handleSubmit}>Submit</button>
            </form>
            <div className="noteScreen">
              {pending && <div className="pending">
                    <div className="loader">
                    </div>
                    <div className="msg">Sending...</div>
                    <div className="waiting">Sending please wait !... <br /><span>sorry i am using free hosting that is why it is delaying to deliver your message !</span></div>
                </div>
                }
              <div id="noteBlog" className="hideNote">
                <div className="mark">
                  <svg width="70" height="47" viewBox="0 0 70 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M23.7751 46.0769L1.02508 25.5931C-0.341695 24.3625 -0.341695 22.3672 1.02508 21.1364L5.97472 16.6797C7.3415 15.449 9.55771 15.449 10.9245 16.6797L26.25 30.4785L59.0755 0.922971C60.4423 -0.307657 62.6585 -0.307657 64.0253 0.922971L68.9749 5.37967C70.3417 6.6103 70.3417 8.60562 68.9749 9.83637L28.7249 46.077C27.358 47.3077 25.1419 47.3077 23.7751 46.0769Z" fill="black"/>
                  </svg>
                </div>
                <div className="prag">
                  <big>Message successfully sent!</big>
                  <p>I have receive your message an will reply you as soon as possible. Thank you!</p>

                  <big onClick={hideThankScreen} className="bigOk">Ok</big>
                </div>

              </div>

              {!pending &&<div onClick={hideThankScreen} className="exit">X</div>}
            </div>
          </div>
        </>
     );
}
 
export default Contact;