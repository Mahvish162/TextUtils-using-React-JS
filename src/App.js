
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
   const toggleMode=()=>{
      if(mode==='Light'){
         setMode('dark')
         document.body.style.backgroundColor='rgb(8 32 77)';

         document.title="TextUtils-Dark mode";
         setInterval(()=>{
            document.title="TextUtils is Amazing";
         },1000)
         setInterval(()=>{
            document.title="Install TextUtils Now";
         },1500)
      }
      else{
         setMode('Light')
         document.body.style.backgroundColor='white';
         showAlert("Light Mode has been enabled","success")
         document.title="TextUtils-Light Mode";
      }
   }
const [mode,setMode]=useState('Light'); //whether dark mode is enabled or not
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
     setAlert({ 
       msg:message,
      type:type,
     })
     setTimeout(()=>{
      setAlert(null)
     },1500)
}


 return (
    <>
{/*<Navbar title="TextUtils2" AboutText="About us"/>*/}

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />

<div className="container my-3">      
       <Textform showAlert={showAlert} mode={mode} heading="Enter the text analyze Below" />       
</div> 
      </> 
  );
 //npm run start
}

export default App;
