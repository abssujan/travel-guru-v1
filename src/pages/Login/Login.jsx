import { Fragment, useContext } from "react";
import NavBarBlack from "../NavBar/NavBarBlack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const SocialLoginButton = () => (
    <Fragment>
      <button className="bg-transparent text-black hover:text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4 border hover:bg-[#F9A51A] transition-all delay-75 ease-linear">
        <FontAwesomeIcon
          icon={faFacebook}
          className=" mr-2 text-inherit"
        />
        <span className="text-center">Continue with Facebook</span>
      </button>
      <button onClick={handleGoogleSignIn} className="bg-transparent text-black py-3 px-6 rounded w-full flex items-center justify-center mt-4 border hover:bg-[#F9A51A] transition-all delay-75 ease-linear hover:text-white">
        <FontAwesomeIcon
          icon={faGoogle}
          className="mr-2  text-inherit"
        />
        <span className="text-center">Continue with Google</span>
      </button>
    </Fragment>
  );
  
   const { SignIn , googleSignIn} = useContext(AuthContext);
   const location = useLocation();
   console.log(location)
   const navigate = useNavigate();

  const handleLoginData = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password)
    SignIn(email, password)
    .then(result => {
        console.log(result.user)
       navigate(location?.state? location.state : '/')
    })
    .catch(error => console.log(error))
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => console.log(error))
  }
  return (
    <div>
      <NavBarBlack></NavBarBlack>
      <div className="w-[400px] mx-auto mt-20">
        <form onSubmit={handleLoginData}>
          <div className="mb-4">
            <label className="block mb-2 font-normal" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-blue-50 dark:bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-gray-300 focus:border-[#F9A51A]"
              name="email"
              required
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-normal" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-blue-50 dark:bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-gray-300 focus:border-[#F9A51A]"
              id="password"
              name="password"
              required
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <input type="checkbox"  className="mr-2" id="remember-me"  />
            <label className="font-normal" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <button className="bg-[#F9A51A] text-white py-3 px-6 rounded w-full">
            Log In
          </button>
          <button className="hover:text-blue-600 font-medium py-2 px-4 rounded-lg w-full mt-4">
            Forget your password?
          </button>
          <div className="relative">
            <hr className="my-8 border-t border-gray-300" />
            <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
              Or
            </span>
          </div>
          <SocialLoginButton />
          <div className="text-center mt-8">
            <p className="opacity-50">Don't have an account?</p>
            <Link
              to='/register'
              className="hover:text-blue-600 font-medium text-decoration-none text-[#F9A51A]"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
