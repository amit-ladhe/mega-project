import "./index.css";

const Login = () => {
  return (
    <div className="login-cont">
    <form className="my-form">

         <img className="web-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt=""/>

      <div className="form-group w-100 mb-4">
        <label for="exampleInputEmail1" className="form-label">
          Username :
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group w-100 mb-4">
        <label for="exampleInputPassword1" className="form-label">
          Password :
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div className="btn-cont">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      </div>
    </form>
    </div>
  );
};

export default Login;
