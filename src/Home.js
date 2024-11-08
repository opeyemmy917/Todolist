import "./Home.css"
import { CiHome } from "react-icons/ci";
function Home(){
  return(
    <div>
        <h1 style={{color: "black"}}>React Class</h1> 
        <p>lorem ipsum <CiHome /></p>
        <div className="myClass"></div>
        <i className="fa fa-user"></i>
        <i className="fa fa-search"></i>
    </div>
  )

  
}
export default Home