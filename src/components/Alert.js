import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1) ;
    }


  return (
  //this syntax works as if else statement means if 1st part is not null then only 2nd will be executed otherwise 2nd part will also not be executed
   props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>
  
  )
}

export default Alert
