import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"



const Comp1 = () => {
  const [myName, setmyName] = useState("Daniel")
  const [amount, setamount] = useState(40)
  const [paid, setpaid] = useState(false)
  const [user, setuser] = useState({name:"Daniel", class:"React"})
  const [collection, setcollection] = useState(["orange", "bananna","Apple"])
  const [arrObj, setarrObj] = useState([
    {Name:'Samuel doe',
     Occupation:'Artisan',
     Country:'Nigeria',
     Age:'50'
    },
    {Name:'Williams Mark',
      Occupation:'Artisan',
      Country:'Nigeria',
      Age:'25'},
    {Name:'Bob Smith',
      Occupation:'Engineer',
      Country:'Togo',
      Age:'33'},
     {Name:'John Doe',
        Occupation:'Driver',
        Country:'Benin ',
        Age:'25'},
      {Name:'Jane Wills',
          Occupation:'Designer',
          Country:'Nigeria',
          Age:'30'}
  ])
  const [products, setproducts] = useState([
    {
      prodName:"Shoe",
      prodPrice:"75",
      instock:true,
      prodDesc:"The Shoe is very nice",
      prodPix:"artist1.webp"
    },
    {
      prodName:"Shoe",
      prodPrice:"75",
      instock:true,
      prodDesc:"The Shoe is very nice",
      prodPix:"artist1.webp"
    },
    {
      prodName:"Shoe",
      prodPrice:"75",
      instock:true,
      prodDesc:"The Shoe is very nice",
      prodPix:"artist1.webp"
    },
    {
      prodName:"Shoe",
      prodPrice:"75",
      instock:true,
      prodDesc:"The Shoe is very nice",
      prodPix:"artist1.webp"
    }
  ])
  const eligibility = (Country)=> Country=="Nigeria"? "Eligible":"Not"
    const[text, setText] = useState('');
  // let name = "Daniel"
  const ClickDan = ()=>{
    alert("you clicked login")
  }
  
  return (
    <>
    <div className="bg-success" style={{height:"300px", width:"100%",}} >
      <div style={{display:"flex",justifyContent:"space between",alignItems:"center"}}>
        <img  style={{height:"250px", width:"200px"}} src="artist1.webp"></img>
        <div style={{width:"50%", margin:"0px 10px"}}>
          <h1>Happy Ninja Dish</h1>
          <h5>$41.67</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eligendi consectetur delectus accusamus labore, officiis repudiandae, placeat culpa pariatur facilis ad impedit facere eaque voluptas amet enim. Reprehenderit, incidunt! Dolorum?</p>
          <p>8 in stock(limited supply left)</p>
          <div >
            <button style={{margin:"5px"}}>
              1
            </button>
            <button>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>



       <h1>products</h1>
       {products.map((el)=>(
        <div>
          <Card
          title={el.prodName }
          img={el.prodPix}
          Desc={el.prodDesc}
          price={el.prodPrice}

           bgcolour="info"/>
        </div>

       ))

       }

    <h1>Testing button components</h1>
    <Button color = "btn btn-danger" clickMe={ClickDan} name="Login"/><br></br>
    <Button color = "btn btn-primary" clickMe= {()=>{alert("you clicked signup")}} name= "sign up"/><br></br>
    <Button clickMe={()=>alert()} name ="Submit"/><br></br>
    <Button clickMe={()=>alert()} name= "sign in"/><br></br>
    <hr></hr>

    <div  className="d-flex flex-wrap">
      <Card bgcolour="success" />
      <Card bgcolour = "danger "/>
      <Card bgcolour = "dark"/>
      <Card  bgcolour = "warning"/>
      <Card  bgcolour = "white"/>
      <Card  bgcolour = "primary"/>
      <Card   bgcolour = "danger"/>
      <Card bgcolour = "primary"/>
    </div>

   <table >
    {
       <tr >
       <th>Name</th>
       <th >Occupation</th>
       <th >Country</th>
       <th >Age</th>
       <th >Eligibility</th>
     </tr>
    }
    
      {arrObj.map((el)=>(
        <tr>
          <td>{el.Name}</td>
          <td>{el.Occupation}</td>
          <td>{el.Country}</td>
          <td>{el.Age}</td>
          <td>{eligibility(el.Country)}</td>
          
        </tr>
      ))}
    
    
    
     
    

   </table>









      <h1>My name is .... {myName}</h1>
      <h1>{5 + 8}</h1>
      <button onClick={()=>setmyName('victor')}>Change name</button>
      <button onClick={()=>setmyName('opeyemi')}> changemyname </button>
      <h1>{amount}</h1>
      <h1>{useState("orange")}</h1>
      <h1>{collection[0]}</h1>
      <h1>{user.class}</h1>

      <div>
        {
          collection.map((el,index)=>(
            <div>
              <h1>{index+1}.{el}</h1>
            </div>
            

          ))
        }
      </div>

     
      <div> 
          {
            paid?
            <div className="box"></div>: null
          }
         </div>
         <button onClick={()=>{setpaid(!paid)}}>{paid?"hide":"show"}</button>
  

      <div className={myName=="Daniel"? "hi": "hey"} >{myName == "Daniel"? "He is a boy": "He is not a boy"}</div>
      <div>
        <input type="text"  onChange={(e)=>setText(e.target.value)} placeholder="Type here.."/>
        <div>
      
          <p>{text}</p>
        </div>
        </div >
    </>
  )
}

export default Comp1