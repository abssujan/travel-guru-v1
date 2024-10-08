import { Fragment, useContext } from "react";
import NavBarBlack from "../NavBar/NavBarBlack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const {createUser, googleSignIn} = useContext(AuthContext);

  const handleRegisterData = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const firstName = form.get('first');
    const lastName = form.get('last');
    const email = form.get('email');
    const password = form.get('password');
    console.log(firstName, lastName, email, password);
    const fullName = `${firstName} ${lastName}`;

    createUser(email, password)
    .then(result => {
        const user = result.user;
        //UPDATED user
        updateProfile(user, {
          displayName: fullName,
        })
        .then(() => {
          console.log("Profile updated successfully:", user.displayName);
        })
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
  const SocialLoginButton = () => (
    <Fragment>
      <button className="bg-transparent text-black hover:text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4 border hover:bg-[#F9A51A] transition-all delay-75 ease-linear">
        <FontAwesomeIcon icon={faFacebook} className=" mr-2 text-inherit" />
        <span className="text-center">Continue with Facebook</span>
      </button>
      <button onClick={handleGoogleSignIn} className="bg-transparent text-black py-3 px-6 rounded w-full flex items-center justify-center mt-4 border hover:bg-[#F9A51A] transition-all delay-75 ease-linear hover:text-white">
        <FontAwesomeIcon icon={faGoogle} className="mr-2  text-inherit" />
        <span className="text-center">Continue with Google</span>
      </button>
    </Fragment>
  );
  return (
    <div>
      <NavBarBlack></NavBarBlack>
      <div className="w-[400px] mx-auto mt-20">
        <form onSubmit={handleRegisterData}>
          <div className="mb-4">
            <label className="block mb-2 font-normal" htmlFor="email">
              First Name
            </label>
            <input
              type="text"
              className="w-full bg-blue-50 dark:bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-gray-300 focus:border-[#F9A51A]"
             
              name="first"
              required
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-normal" htmlFor="email">
              Last Name
            </label>
            <input
              type="text"
              className="w-full bg-blue-50 dark:bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-gray-300 focus:border-[#F9A51A]"
              
              name="last"
              required
              placeholder="Enter Your Last Name"
            />
          </div>
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
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-normal" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full bg-blue-50 dark:bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-gray-300 focus:border-[#F9A51A]"
              
              name="confirm"
              placeholder="Enter Password"
            />
          </div>
          
          <button className="bg-[#F9A51A] text-white py-3 px-6 rounded w-full">
            Register
          </button>
          
          <div className="relative">
            <hr className="my-8 border-t border-gray-300" />
            <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
              Or
            </span>
          </div>
          <SocialLoginButton />
          <div className="text-center mt-8 mb-20">
            <p className="opacity-50">Already have an account?</p>
            <Link
              to='/login'
              className="hover:text-blue-600 font-medium text-decoration-none text-[#F9A51A]"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
