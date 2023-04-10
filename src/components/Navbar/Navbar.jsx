import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Career Builder</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
        <Link to='/statistics'>Statistics</Link>
        <Link to='/jobs'>Applied Jobs</Link>
        <Link to='/blog'>Blog</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;