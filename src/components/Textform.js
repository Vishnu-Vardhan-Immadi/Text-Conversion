import React,{useState}from 'react'

export default function Textform(props) {
    const upClick =()=>{
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to UpperCase !!","sucess")
        // console.log("upper case was clicked");
    }
    const loClick =()=>{
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to LowerCase !!","sucess")
        // console.log("upper case was clicked");
    }
    const clearClick =()=>{
        let newText = '';
        settext(newText)
        props.showAlert("Cleared Text Sucessfully !!","sucess")
        // console.log("upper case was clicked");
    }
    const handleOnChange =(event)=>{
        // console.log("onchange");
        settext(event.target.value)
    }

    const CopyClick =()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text)
        props.showAlert("Copied Text Sucessfully !!","sucess")
    }
    
    const RemoveSpaces=()=>{
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Removed Extra Spaces Sucessfully !!","sucess")
    }
    const  [text, settext] = useState("")
  return (
    <>
    <div className='cointaner' style={{color : props.mode=== 'light' ? 'black' : 'white' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
      <label htmlFor="myBox"><b>c2c</b></label>
      <textarea className="form-control" value={text} style={{backgroundColor : props.mode=== 'dark' ? '#13466e' : 'white',color:  props.mode=== 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={upClick}>ConvertToUppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={loClick}>ConvertToLowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onFocus={clearClick}>ClearText</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={CopyClick}>CopyText</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={RemoveSpaces}>Remove Spaces</button>
    </div>
    <div className="cointaner my-3" style={{color : props.mode=== 'dark' ? 'white' : 'black' }}>
    <h2>Your Text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
