import React from 'react'
import { Link } from "react-router-dom"
import library from './library.jpg';
function Topbar() {
  return (
    <>
      <div class="topbar">
      
        <img src={library} class="topbar-img" alt="..."></img>
        <h3 class="topbar-h3">Library Management System</h3>
        <Link to="/booklist" type="button" class="btn topbar-bt">BookList</Link>
     
      </div>
    </>
  )
}

export default Topbar