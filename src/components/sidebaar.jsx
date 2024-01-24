
import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
        path:"/",
        name:"Home"
    },
    {
        path:"/about",
        name:"About"
    },]
  return (
    <div className="container">
         <div className="sidebar">

         <div className="top-section">
            Madhu Kumari 
         </div>
         {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className= "link" activeClassName="active">
                    <div className='link_text'>{item.name}</div>

                </NavLink>
            )

            )
         }
         </div>
         <main>{children}</main>
         </div>
   
  
  );
};

export default Sidebar;



