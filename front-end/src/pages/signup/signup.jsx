import { Link } from "react-router-dom";
import GenderCheckBox from "./genderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";


const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  
  const handleGender = (gender) => {
    setInputs({...inputs, gender})
  }

  const {loading, signup} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full h-10"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckBox onCheckboxChange= {handleGender} selectedGender={inputs.gender} />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
          >
            {"Already"} have an account?
          </Link>

          <div>
            <button className="btn glass btn-block mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> :  "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import GenderCheckBox from "./genderCheckBox";

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up</h1>

//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Full Name</span>
//                     </label>
//                     <input type="text" placeholder="Full Name" className="input input-bordered w-full h-10"/>
//                 </div>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder="Username" className="input input-bordered w-full h-10"/>
//                 </div>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder="Password" className="input input-bordered w-full h-10"/>
//                 </div>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10"/>
//                 </div>

//                 <GenderCheckBox />

//                 <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">{"Already"} have an account?</a>

//                 <div>
//                     <button className="btn glass btn-block mt-2">Signup</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Signup;
