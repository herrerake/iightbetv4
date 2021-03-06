import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // MAKE THE CALL TO FIREBASE AND LOG USER IN WITH EMAIL AND PASSWORD
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      // NAVIGATE TO THE DASHBOARD PAGE
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch (error) {
      // ON THE CATCH SET EMAIL ADDRESS AND PASSWORD TO NULL
      setEmailAddress("");
      setPassword("");
      // RELAY ERROR MESSAGE FROM FIREBASE
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex">
        <img
          src="/images/iphone-iightbet.png"
          alt="iPhone with iight Bet app"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/iight-bet-logo.png"
              alt="iight Bet"
              className="w-6/12"
            />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50"}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
