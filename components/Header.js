import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Router from "next/router";
import { isAuth, signout } from '../actions/auth';
import NextNprogress from 'nextjs-progressbar';
import Search from './blog/Search';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  //NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
  //   NavbarText
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <Link href="/"><NavLink className="font-weight-bold">SEOBLOG</NavLink></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
              />


              <React.Fragment>
                <NavItem>
                  <a style={{ cursor: 'pointer' }} href="/blogs">Blogs</a>
                </NavItem>
              </React.Fragment>


              {!isAuth() && (
                <React.Fragment>
                  <NavItem>
                    <Link href="/signup"><NavLink style={{ cursor: 'pointer' }}>Signup</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signin"><NavLink style={{ cursor: 'pointer' }}>Signin</NavLink></Link>
                  </NavItem>
                </React.Fragment>
              )}

              {isAuth() && !isAuth().role == 0 && (
                <NavItem>
                  <Link href="/user">
                    <NavLink>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
              )}
              {isAuth() && !isAuth().role == 1 && (
                <NavItem>
                  <Link href="/admin">
                    <NavLink>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => {
                    Router.replace('/signin')
                  })}>Signout</NavLink>
                </NavItem>
              )}

              <NavItem>
                <Link href="/user/crud/blog">
                  <NavLink className="btn btn-primary text-light">
                    Write a blog
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Search />
      </React.Fragment>
    </div>
  );
}

export default Header;

