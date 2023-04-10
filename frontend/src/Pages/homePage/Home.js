import homeImage from "../../images/banner.png"
import "./home.css"
import { useNavigate } from "react-router-dom"
import Muskan from "../../images/muskan.jpeg"
import Suryakant from "../../images/suryakant.jpg"
import Shubham from "../../images/shubham.jpg"
import Ishita from "../../images/ishita.png"
const Home = () => {

    const navigate = useNavigate()
    const loginUser=()=>{
        navigate('/signin')
    }
    const SignupUser=()=>{
        navigate('/signup')
    }
    const RegisterRest=()=>{
        navigate('/registerRestaurant')
    }
    return(
        <div className="container-fluid" class="gradient">
          
            <div class="nav">
            <nav className="navbar navbar-expand-lg "  >
                
                    <div className="container-fluid">
                     <ul  className='navbar-nav me-auto mb-2 mb-lg-0'>
                     <li className='nav-item' > <button className="btn"
                     onClick={RegisterRest}>
                        Add Restaurants
                       </button></li>
                       <li className='nav-item '> 
                        <button className="btn" onClick={loginUser} >
                        Login
                        </button>
                       </li>
                       <li className='nav-item' class="d">
                         <button  className="btn" onClick={SignupUser} >
                         Sign Up
                         </button>
                         </li>
                    </ul>
                    </div>
                  </nav>
                 
            </div>
      
           <div class="p">
           <div className="row">
            <div className="col col-7" >
            <div class="foodi">Order your <b>Food</b></div>
               <form>
               <div className="row">
                    <div className="col">
                        <div className="mb-3" class="a">
                        <input className="form-control" placeholder="Enter your location"/>
                        </div>
                    </div>
                    <div className="col">
                        <div class="b">
                        <button className="btn" type="submit" ><span>search</span></button>
                        </div>
                    </div>
                </div>
               </form>
                
            </div>
            <div className="col col-5">
            <img alt='Home' src={homeImage} style={{
                height: 400, width: 400, marginleft: 40
                }}/>
            </div>
        </div>
           </div>
            <div style={{textAlign:"center",marginTop:40}}>
                
                <h5><b style={{fontSize:80,color:'gray'}}>Student Welfare</b></h5>
                <div className="container" style={{textAlign:"justify",
                fontFamily:"sans-serif",
                textIndent:30,
                fontStyle:"italic"}}>
                    <p>This website can primarily be used in such places where extensive food service facility is not available and if any
particular restaurant wants to deliver their food in such areas. This is achieved through an easy to use graphical
interface menu options. It is managed by the admin. Restaurants can list their available food menus. Users can add
number of items to the cart. different payment options are available to continue the order.Deliveryboy has
permission to choose orders by their locality.</p>
                </div>
                <hr/>
                <div className="container" style={{margin:30,marginLeft:140}}>
                    <h4 style={{marginLeft:-140}}>Contact Us</h4>
                    <div className="row" style={{height:50,marginTop:30,marginRight:100}}>
                        <div className="col" >
                        <img src={Muskan} className="card-img-top" style={{ height: 250,
                                width: 200,
                               boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/>
                                 <div style={{marginLeft:-110,marginTop:10}}> <h5 style={{textAlign:"center"}}>Muskan Singh</h5></div>
                                 <div style={{marginLeft:-40,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}>parulsinghdhull@gmail.com</h7></div>

                        </div>
                        <div className="col">
                        <img src={Suryakant} className="card-img-top" style={{ height: 250,
                                width: 200,
                                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/>
                                 <div style={{marginLeft:-100,marginTop:10}}> <h5 style={{textAlign:"center"}}>Suryakant Shintre</h5></div>
                                 <div style={{marginLeft:-60,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}>suryakantshintre18@gmail.com</h7></div>

                        </div>
                        <div className="col">
                        <img src={Shubham} className="card-img-top" style={{ height: 250,
                                width: 200,
                                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/>
                                 <div style={{marginLeft:-110,marginTop:10}}> <h5 style={{textAlign:"center"}}>Shubham Vibhute</h5></div>
                                 <div style={{marginLeft:-60,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}>vibhute.shubh@gmail.com</h7></div>

                        </div>
                        <div className="col">
                        <img src={Ishita} className="card-img-top" style={{ height: 250,
                                width: 200,
                                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                                display: "block",
                                 borderRadius: 5,}} alt="..."/>
                                 <div style={{marginLeft:-110,marginTop:10}}> <h5 style={{textAlign:"center"}}>Ishita Rajora</h5></div>
                                 <div style={{marginLeft:-60,marginTop:10,marginBottom:20, color:"blue"}}> <h7 style={{textAlign:"center"}}>ishita@gmail.com</h7></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
 
    );
}

export default Home;