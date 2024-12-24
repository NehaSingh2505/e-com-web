import React  from 'react';
import {NavLink} from 'react-router-dom'
function Header(props){
  return(
    <>
    {props.children}
    <div className='head'>
      <h2>Ducat India</h2>
<ul>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/page1">About us</NavLink></li>
  <li><NavLink to="/page2">Contact us</NavLink></li>
  <li><NavLink to="/page3">Courses</NavLink></li>
  <li><NavLink to="/page4">Placements</NavLink></li>
  <li><NavLink to="page5">Registrations</NavLink></li>
  <li><NavLink to="page6">Certificates</NavLink></li>
  <li><NavLink to="page7">Conseling</NavLink></li>
  <li><NavLink to="page8">Tutorials</NavLink></li>
  <li><NavLink to="page9">Blog</NavLink></li>
  <li><NavLink to="page10">FAQ</NavLink></li>
  <li><NavLink to="page12">Career</NavLink></li>
  <li><NavLink to="page13">Alumni</NavLink></li>
  <li><NavLink to="page14">Events</NavLink></li>
  <li><NavLink to="page15">Privacy policy</NavLink></li>

</ul>
</div>
</>
  )
}


export default Header;