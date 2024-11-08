import React from 'react'

const Card = (props) => {
  return (
    <div>
 <div style={{height:"300px"}} className ={`w-25 bg-${props.bgcolour} rounded shadow m-1 `}>{props.name}
  <img src={props.img} className={`w-50`}></img>
 <h5>{props.title}</h5>
 <p>{props.Desc}</p>
 <b>{props.price}</b>

 </div>
   
    </div>
   
    

  
  )
}

export default Card