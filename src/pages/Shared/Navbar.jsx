import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  const navLinks = <>

    <NavLink className="focus:bg-green-700 px-3 py-1 text-xl font-semibold rounded-md focus:text-white" to='/'>Home</NavLink>
    <NavLink className="focus:bg-green-700 px-3 py-1 text-xl font-semibold rounded-md focus:text-white" to='/about'>Event</NavLink>
    <NavLink className="focus:bg-green-700 px-3 py-1 text-xl font-semibold rounded-md focus:text-white" to='/career'>Services</NavLink>
    <NavLink className="focus:bg-green-700 px-3 py-1 text-xl font-semibold rounded-md focus:text-white" to='/career'>Pricing</NavLink>
    <NavLink className="focus:bg-green-700 px-3 py-1 text-xl font-semibold rounded-md focus:text-white" to='/career'>About</NavLink>
    <NavLink className="focus:bg-green-700 px-3 py-1 text-xl font-semibold rounded-md focus:text-white" to='/career'>Contact Us</NavLink>


  </>



  return (

    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <img src="../../../public/Resources/event4.PNG" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <CgProfile className="text-5xl cursor-pointer"></CgProfile>
          {
            user ?
              <button onClick={handleSignOut} className="text-lg text-white font-semibold px-10 py-2 bg-[#403F3F]">Sign out</button>
              :
              <Link to='/login'>
                <button className="text-lg text-white font-semibold px-10 py-2 bg-green-700 rounded-md">Login</button>
              </Link>
          }



        </div>
      </div>

    </div>

  );
};

export default Navbar;