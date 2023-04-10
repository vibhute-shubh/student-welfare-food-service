import { Link } from 'react-router-dom'
const Header=()=>{
    return(
        <div>
        <Link  style={{textDecoration:'none'}} to='/'>
        <span style={{color:'#8ff806',fontSize:50,marginLeft:20}}><b>Food Service</b></span>
        </Link>
    </div>
    );
}
export default Header;