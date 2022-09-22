import { useRef } from "react";

function Contact({MyFunction}) {
  const inputRef= useRef()
  const clickHandler =(e)=>{
    console.log(inputRef.current.value)
  }




  return (
    <>
      <h1>asdasdasd</h1>
      <input type='text' ref={inputRef}></input>
      <button onClick={clickHandler}>Get input value</button>
      {
        MyFunction()
      }
    </>
  );
}

export default Contact;
