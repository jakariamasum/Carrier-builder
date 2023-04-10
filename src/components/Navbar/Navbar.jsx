import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Career Builder</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Statistics</a></li>
      <li><a>Applied Jobs</a></li>
      <li><a>Blog</a></li>
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