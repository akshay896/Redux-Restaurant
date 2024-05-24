import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchRestaurants } from "../redux/slices/restaurantSlice";
Container;
const Header =({insideHome}) =>{
  const dispatch = useDispatch();

  
  return (
    <Navbar expand="lg" className="bg-dark w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand>
          <Link
            to={"/"}
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Dancing Script",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            DineDiscover
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            { insideHome &&
              <Nav.Link>
              <input onChange={(e)=>dispatch(searchRestaurants(e.target.value.toLowerCase()))} style={{width:'500px'}} 
              className="form-control" type="text" placeholder="Search by Neighbourhood!!!" />
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
