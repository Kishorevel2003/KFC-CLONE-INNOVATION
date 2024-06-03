import React from "react";
import Loogo from '../Images/Loogo.svg';
import { Link } from "react-router-dom";
 import { FaShoppingCart } from "react-icons/fa";

function Navbar(){

    return(
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'><img src={Loogo} alt=""/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='Menu/'>Menu</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <Link class="nav-link active" aria-current="page" to='Cart/'><FaShoppingCart /></Link>
      </form>
    </div>
  </div>
</nav>
    </>
    )
}

export default Navbar;
