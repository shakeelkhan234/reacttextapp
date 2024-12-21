import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpclick=()=>
        {
            console.log("up is clicked" + text);
            let newText=text.toUpperCase();
            settext(newText)
        }

        const handleOnChange=(event)=>{
            console.log("on change clicked");
            settext(event.target.value);
        }
    const [text, settext]=useState('enter text here');
  return (
    <div>
        <br></br><br></br><br></br><br></br>
        <h1>{props.heading}</h1>
      <div className="container ">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea"></textarea>
 
  <button className="btn btn-primary my-3" onClick={handleUpclick}>convert to uppercase</button>

</div>
    </div>
  )
}
