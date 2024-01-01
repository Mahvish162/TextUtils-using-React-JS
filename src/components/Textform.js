import React,{useState} from 'react'


export default function TextForm(props) {
               
    const handleUpClick=()=>{
       console.log("uppercase was clicked" + text)
       let newText=text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to UPPERCASE","success")
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked" + text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
 
     }
     const handleClearClick=()=>{
       // console.log(" was clicked" + text)
        let newText="";
        setText(newText)
        props.showAlert("Cleared text","success")
 
     }
     const handleCopyClick=()=>{
      // console.log(" was clicked" + text)
       var text=document.getElementById("myBox")
       text.select();
       navigator.clipboard.writeText(text.value)
       props.showAlert("Text copied","success")
 
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("All extra spaces are removed","success")
 
    }
   /*  const handleCapitalizeClick=()=>{
        let newText=text.split(" ");
        let verynewText=newText.map((newText)=>{
          return newText[0].toUpperCase() + newText.substring(1);
        }).join(" ");
      setText(verynewText)
     }
   
   */  

/*    const handleCapitalizeClick=()=>{
        let newText=text.split(" ")
       for(let i=0;i<newText.length;i++){
            newText[i]=newText[i][0].toUpperCase()+newText[i].substr(1);
       }
      // newText.join(" ")
        setText(newText)    
    }
*/
    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    
    const[text,setText]=useState("" );
   //setText("okay write the texts here: : : : : : : : :");
  return (
    <>

    <div className="container" style={{color:props.mode === 'Light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'Light'?'white':'#130000',color:props.mode === 'Light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Space</button>              
    </div>
    <div className="container my-4"  style={{color:props.mode === 'Light'?'black':'white'}}> 
    <h1>Your text summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter some text in above text area to preview it here"}</p>
    </div>

    </>
  )
}


//hooks : bina class banaye class ke features use krne me sahahyak hote hain
