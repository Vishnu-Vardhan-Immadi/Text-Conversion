// import React,{useState} from 'react'

export default function About (props) {
  // const [myStyle, setMystyle] = useState(
  //   {
  //     color: 'black',
  //     backgroundColor:'white'
  //   })

    let myStyle={
      color : props.mode === "dark" ? 'white' : '#042743',
      backgroundColor:props.mode === "dark" ? ' rgb(36 74 104)' : 'white',
    }

  // const [btnText, setbtnText]=useState("Enable Dark Mode")
  //  const  toggleStyle=()=>{
  //     if(myStyle.color==='white'){
  //       setMystyle({
  //         color: 'black',
  //         backgroundColor:'white'
  //       })
  //       setbtnText("Enable Light mode")
  //     }
  //   else{
  //     setMystyle({
  //       color: 'white',
  //       backgroundColor:'black'
  //     })
  //    setbtnText("Enable Dark Mode")
  //   }
  //   }
  
  return (
    <div className='container' style={{color : props.mode === "dark" ? 'white' : '#042743'}} >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong>This is the Text-Convo .</strong> Which is used to Analyze and manipulate, until the Text Accordingly To the user needs. <code>Text-Convo</code>, though the transition of the Text many needs will be filled respectively Within short period of Time.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This <strong>Text-Convo </strong> is a Free character counter tool that provides instant character count and word count statistics for a given text. Text-convo represents the number of characters and words.Thus it is sutiable for writing text with word/Character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This  <strong> Text-Convo .</strong> software like word counter and character count, works in any kind of browser. Such as chrome,firefox,Brave,microsoft-edge,Safari,Opera & Internet explorer. It suits to count characters in facebook,blogs,books,excel document, pdf documents, etc..
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
  <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
</div> */}
    </div>
  )
}
