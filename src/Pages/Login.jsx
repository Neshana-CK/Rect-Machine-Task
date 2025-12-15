import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input type="text" required />

          <label>Password</label>
          <input type="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
