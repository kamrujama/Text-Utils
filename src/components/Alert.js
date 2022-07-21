import React from 'react'

export default function Alert(props) {

  return (
   
    props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
      {/* {props.alert} */}
      <strong>{props.alertMsg.type[0].toUpperCase() + props.alertMsg.type.slice(1)} !</strong> {props.alertMsg.msg}
    </div>
    
   
  )
}
