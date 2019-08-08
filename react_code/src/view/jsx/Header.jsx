import React from 'react';

import { Navbar, Nav, NavItem, Form, FormControl, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" variant="light">
          <nav className="mr-auto" >

            <NavLink className="main-anchor" activeClassName="selected" to="/">Home</NavLink> | &nbsp;
             <NavLink className="main-anchor" activeClassName="selected" to="/list">ListProducts</NavLink> | &nbsp;
             <NavLink className="main-anchor" activeClassName="selected" to="/search">Search</NavLink> | &nbsp;
             <NavLink className="main-anchor" activeClassName="selected" to="/spring">Backend</NavLink>
          </nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </Container>
    );
  }
}


export default Header;