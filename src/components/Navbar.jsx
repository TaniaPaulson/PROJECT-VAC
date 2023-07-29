import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  const NavLinks = [
    {
      name: "Tania Paulson",
      Link: "/",
    },
    
    // {
    //   name: "Products",
    //   Link: "/products",
    // },
    // {
    //   name: "Dashboard",
    //   Link: "/dashboard",
    // },
    // {
    //   name: "Pricing",
    //   Link: "/pricing",
    // },
  ];
  return (
    <div className={`header`}>
    {/* Left side */}
      <div className="RightSection">
        {/* Nav links */}
        <div className="Links">
          {NavLinks.map((Data, index) => {
            return (
              <Link key={index} to={Data.Link}>
                  <p className={`NavLinks`}>{Data.name}</p>
              </Link>
              
            )
          })}
          <button class='Btn'>Now available</button>
        </div>
        

      </div>
          {/* Right side */}
      <div className="LeftSection">
      <img
          src="/1st.jpg"
          alt=""
          className={`image`}
          style={{ width: 20, height: 20,margin: 20 }}
        />
        <img
          src="/2nd.jpg"
          alt=""
          className={`image`}
          style={{ width: 20, height: 20,margin: 20 }}
        />
        <img
          src="/3rd.jpg"
          alt=""
          className={`image`}
          style={{ width: 20, height: 20, margin: 20, gap:5 }}
        />
        
      </div>

    </div>
  );
};

export default Navbar;
