import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8080/users/" + username)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error('Please Enter valid username');
          } else {
            if (resp.password === password) {
              toast.success('Success');
              sessionStorage.setItem('username', username);
              sessionStorage.setItem('userrole', resp.role);
              if (resp.role === 'user') {
                navigate('/user');
              } else if (resp.role === 'admin') {
                navigate('/');
              }
            
            } else {
              toast.error('Please Enter valid credentials');
            }
          }
        })
        .catch((err) => {
          toast.error('Login Failed due to :' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={handleLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name <span className="errmsg">*</span></label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button> |
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;