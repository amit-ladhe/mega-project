import {Link} from "react-router-dom";
import "./index.css";

const Header = () => {
 

  

  return (

      <nav >
        <ul className="my-nav">
            <li>
              <Link to={"/"}>
                <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" className="header-logo" alt="web-logo" />
                </Link>
            </li>

          <span className="home-jobs">

            <li>  <Link to={"/"}> Home </Link> </li>

            <li>  <Link to={"/jobs"}> Jobs </Link></li>

          </span>

            <li>
              <button className="btn btn-primary" > Logout </button>
            </li>
        </ul>
      </nav>
  )
};
export default Header;
