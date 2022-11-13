import React, { Component } from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  Form,
  Button,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import logo from "./logo.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Maincraftluv from "../pages/Maincraftluv";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Photolup from "../pages/Photolup";
import Contacts from "../pages/Contacts";
import { PageComponent } from '../Components/PageComponent';
//import Redline from "../pages/Redline";
// import Spotifyushel from "../pages/Spotifyushel";
// import Etaforforovayakukla from "../pages/Etaforforovayakukla";
// import Anonskingdomheartsiv from "../pages/Anonskingdomheartsiv";


export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="50"
                  width="50"
                  className="d-line-block align-top"
                  alt="Логотип"
                />
                {"Myafix"}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="asdasd">
                  <Nav.Link as={Link} to="/">
                    {" "}
                    Главная
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    {" "}
                    Блог{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/photolup">
                    {" "}
                    Фототека{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts">
                    {" "}
                    Контакты{" "}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes> 
            <Route path="/etaforforovayakukla" element={<PageComponent articleFileName='/Anime/Etaforforovayakukla.md' image='/img/blog/forforbig.png'/>} />
            <Route path="/spotifyushel" element={<PageComponent articleFileName='/Irl/Spotifyushel.md' image='/img/blog/spotifyvsebig.png'/>} />
            <Route path="/anonskingdomheartsiv" element={<PageComponent articleFileName='/Games/Anonskingdomheartsiv.md' image='/img/blog/Anonskingdomheartsivbig.png'/>} />
            <Route path="/maincraftluv" element={<PageComponent articleFileName='/Irl/Maincraftluv.md' image='/img/blog/mainluvbig.png'/>} />
            <Route path="/redline" element={<PageComponent articleFileName='/Anime/Redline.md' image='/img/blog/redlinebig.png'/>} />
            {/* <Route path="/etaforforovayakukla" element={<Etaforforovayakukla />} />
            <Route path="/spotifyushel" element={<Spotifyushel />} />
            <Route path="/anonskingdomheartsiv" element={<Anonskingdomheartsiv />} />
            <Route path="/maincraftluv" element={<Maincraftluv />} />
            <Route path="/redline" element={<Redline />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photolup" element={<Photolup />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
      </>
    );
  }
}
