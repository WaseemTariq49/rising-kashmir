import React from 'react';
import '../styles/header.scss';
import { ImHome3 } from 'react-icons/im';
import {BsSearch} from 'react-icons/bs';
import { Select, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Health from "./Health"

// import {Link} from 'react-router-dom';

const Header = () => {
  const options = [
    {value:'KASHMIR', label:'kashmir'},
    {value:'CITY', label:'city'},
    {value:'JAMMU', label:'jammu'},
    {value:'POLITICS', label:'politics'}
  ]

  return (
    
      <div className='container'>
        <div className='social'>
          <Link to='#' >About Us</Link>|
          <Link to='#' >Our Team</Link>|
          <Link to='#' >Contact Us</Link>|
          <Link to='#' >E-Paper</Link>
        </div>

        <nav>
          <Link to="/">
            <img className='himg' src={require('../assets/logo.png')} ></img>
          </Link>
          <Link to="/">
            <ImHome3 className='h'/>
          </Link>
          <Link to='/topstories'>TOP STORIES</Link>
          <Link to='/city'>
          <Select value={2} className='select'>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={1}>KASHMIR</MenuItem>
            <MenuItem value={2}>CITY</MenuItem>
            <MenuItem value={3}>JAMMU</MenuItem>
            <MenuItem value={4}>POLITICS</MenuItem>
          </Select>
          </Link>
          <Link to='/health'>HEALTH</Link>
          <Link to='/anchor'>ANCHOR</Link>
          <Link to='/features'>FEATURES</Link>
          <Link to='/interviews'>INTERVIEWS</Link>
          <Link to='/more'>MORE</Link>
          <BsSearch className='s'/>
        </nav>
      </div>



//     <div class="container">
//       <div class="social" style="text-align:right;;font-size:20px;">
//           <table style="width:100%">

//               <tbody><tr>
//                   <td >
//                       <a >About Us</a>  |
//                       <a >Our Team </a> |
//                       <a >Contact Us </a> |
//                       <a >E-Paper </a>
//                   </td>
//                   <td>
//                       <a href="https://www.facebook.com/therisingkashmir" title="Facebook"> <i class="fa fa-facebook-square" style="color: blue"></i>  </a>
//                       <a href="https://twitter.com/RisingKashmir" title="Twitter"> <i class="fa fa-twitter-square" style="color: #00acee "></i>  </a>
//                       <a href="https://www.youtube.com/risingkashmirvideos" title="Youtube"> <i class="fa fa-youtube-square" style="color:red"></i>  </a>
//                       <a href="https://www.instagram.com/rising_kashmir/?hl=en" title="Instagram"> <i class="fa fa-instagram"></i>  </a>
//                   </td>

//               </tr>
//           </tbody></table>



//       </div>
      
//       <nav>
//           {/* <!-- Brand --> */}
//           <a class="navbar-brand" >
//               <img src="../assets/logo.png" />
//           </a>

//           {/* <!-- Links --> */}
//           <ul class="navbar-nav">
//               <li class="nav-item">
//                   <a href="http://risingkashmir.com/"><i ></i></a>
//               </li>
//               <li class="nav-item" >
//                   <a  href="/category/top stories">TOP STORIES</a>
//               </li>

//               <li class="nav-item dropdown">
//                   <a class="nav-link dropdown-toggle NHeadernav-link" href="#" id="navbardrop" data-toggle="dropdown">
//                       NEWS
//                   </a>
//                   <div class="dropdown-menu">
//                       <a class="dropdown-item" href="/category/kashmir">KASHMIR</a>
//                       <a class="dropdown-item" href="/category/city">CITY</a>
//                       <a class="dropdown-item" href="/category/jammu">JAMMU</a>
//                       <a class="dropdown-item" href="/category/politics">POLITICS</a>
//                   </div>
//               </li>

//               <li class="nav-item" title="Health">
//                   <a class="nav-link NHeadernav-link" href="/category/health">HEALTH</a>
//               </li>
//               <li class="nav-item" title="Anchor">
//                   <a class="nav-link NHeadernav-link" href="/category/anchor">ANCHOR</a>
//               </li>
//               <li class="nav-item">
//                   <a class="nav-link NHeadernav-link" href="/category/features">FEATURES</a>
//               </li>
//               <li class="nav-item">
//                   <a class="nav-link NHeadernav-link" href="/category/interviews">INTERVIEWS</a>
//               </li>
              



//               {/* <!-- Dropdown --> */}
//               <li class="nav-item dropdown">
//                   <a class="nav-link dropdown-toggle NHeadernav-link" href="#" id="navbardrop" data-toggle="dropdown">
//                       MORE
//                   </a>

//                   <div class="dropdown-menu">
//                       <a class="dropdown-item" href="/category/opinion">OPINION</a>
//                       <a class="dropdown-item" href="/category/business">BUSINESS</a>
//                       <a class="dropdown-item" href="/category/opinion">OPINION</a>
//                       <a class="dropdown-item" href="/category/editorial">EDITORIAL</a>
//                       <a class="dropdown-item" href="/category/viewpoint">VIEWPOINT</a>
//                       <a class="dropdown-item" href="/category/trending">TRENDING</a>
//                       <a class="dropdown-item" href="/category/education">EDUCATION</a>
//                       <a class="dropdown-item" href="/category/features">FEATURES</a>
//                       <a class="dropdown-item" href="/category/kath bath">KATH BATH</a>
//                       <a class="dropdown-item" href="/category/sports">SPORTS</a>

//                   </div>
//               </li>

//               <li class="nav-item" title="Search News">
//                   <a class="nav-link NHeadernav-link" href="#"> <i class="fa fa-search" aria-hidden="true" style="color: #c31833; cursor:pointer"></i></a>

//               </li>
//           </ul>
//       </nav>

//       <nav class="navbar navbar-inverse smallNavigation">
//           <div class="container-fluid">
//               <div class="navbar-header">
                  
//                   <a href="http://risingkashmir.com/"><img src="../assets/logo.png" style="width:90%" /></a>
//                   <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mobileNavbar">
//                       <i class="fa fa-bars"></i>
//                   </button>

//               </div>
//               <div class="collapse navbar-collapse" id="mobileNavbar">
//                   <ul class="nav navbar-nav smallNavigationul">
//                       <li class="active nav-link NHeadernav-link"><a href="http://risingkashmir.com/"><i class="fa fa-home" aria-hidden="true" style="font-size:19px"></i></a></li>

//                       <li><a href="/category/top stories" class="nav-link NHeadernav-link">TOP STORIES</a></li>
//                       <li class="dropdown">
//                           <a class="dropdown-toggle nav-link NHeadernav-link" data-toggle="dropdown" href="#">NEWS<span class="caret"></span></a>
//                           <ul class="dropdown-menu">
//                               <li> <a class="nav-link NHeadernav-link" href="/category/kashmir">KASHMIR</a> </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/city">CITY</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/jammu">JAMMU</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/politics">POLITICS</a>
//                               </li>

//                           </ul>
//                       </li>
//                       <li><a href="/category/health" class="nav-link NHeadernav-link">HEALTH</a></li>
//                       <li><a href="/category/anchor" class="nav-link NHeadernav-link">ANCHOR</a></li>
//                       <li><a href="/category/feature" class="nav-link NHeadernav-link">FEATURES</a></li>
//                       <li><a href="/category/interviews" class="nav-link NHeadernav-link">INTERVIEWS</a></li>
//                       <li class="dropdown">
//                           <a class="dropdown-toggle nav-link NHeadernav-link" data-toggle="dropdown" href="#">MORE<span class="caret"></span></a>
//                           <ul class="dropdown-menu">
//                               <li> <a class="nav-link NHeadernav-link" href="/category/opinion">OPINION</a> </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/business">BUSINESS</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/opinion">OPINION</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/editorial">EDITORIAL</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/viewpoint">VIEWPOINT</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/trending">TRENDING</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/education">EDUCATION</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/features">FEATURES</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/kath bath">KATH BATH</a>
//                               </li>
//                               <li>
//                                   <a class="nav-link NHeadernav-link" href="/category/sports">SPORTS</a>
//                               </li>
//                           </ul>
//                       </li>
//                   </ul>

//               </div>
//           </div>
//       </nav>
// </div>
  )
}

export default Header;