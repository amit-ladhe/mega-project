import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookies";
import "./index.css";

const Login = () => {

  const navigate=useNavigate();
  const token=Cookies.getItem('jwtToken')

  const [allValues, setValues] = useState({
    username: "",
    password: "",
    errorMsg: "",
  });

  const onSubmitDetails = async (e) => {
    e.preventDefault();

    //fetch call
    //response ok--> redirect to home
    //response failed--> error msg to user

    // console.log(`${allValues.username}, ${allValues.password}`);

    const url = "https://apis.ccbp.in/login";

    const userDetails = {
      username: allValues.username,
      password: allValues.password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const fetchData = await response.json();
    // console.log(fetchData);  
    // console.log(fetchData.error_msg)

    if (response.ok === true) {
      // console.log("redirect to home page");
      Cookies.setItem("jwtToken", fetchData.jwt_token)
      setValues({ ...allValues, errorMsg: "" });
      navigate("/")
    } else {
      //  console.log("error msg")
      setValues({ ...allValues, errorMsg: fetchData.error_msg });
    }
  };

  const onChangeUsername = (event) => {
    // console.log("running1") for test purpose
    // console.log(event.target.value) for testing purpose
    setValues({ ...allValues, username: event.target.value });
  };

  const onChangePassword = (event) => {
    // console.log("running2")
    // console.log(event.target.value) for testing purpose
    setValues({ ...allValues, password: event.target.value });
  };

     useEffect(()=>{
        if (token !== null) {
          navigate("/")
        }
     },[])

  return (
    <div className="login-cont">
      <form className="my-form" onSubmit={onSubmitDetails}>
        <img
          className="web-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt=""
        />

        <div className="form-group w-100 mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group w-100 mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={onChangePassword}
          />
        </div>

        <div className="btn-cont">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <p className="e-msg">{...allValues.errorMsg}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
