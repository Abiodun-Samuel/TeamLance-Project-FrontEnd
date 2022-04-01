import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  const navigate = useNavigate();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      navigate("/products");
    }
  });

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-6 my-2">
          {error && <Message type="danger" message={error} />}

          <div className="mb-1">
            <Link className="mr-3" to="/login">
              Login
            </Link>
            <Link className="ml-3" to="/register">
              Register
            </Link>
          </div>
          <hr />

          <h4 className="text-primary font-weight-bold">Login</h4>
          <div className="shadow p-3">
            <form onSubmit={handleLogin}>
              <div className="form-row my-2">
                <div className="form-group col-md-12 my-2">
                  <label htmlFor="inputtext4">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputtextl4"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-12 my-2">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {loading && <Loader smallPage={true} />}
              <button type="submit" className="btn btn-primary my-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
