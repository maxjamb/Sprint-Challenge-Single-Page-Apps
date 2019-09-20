import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const StyledNavBar = styled.header`
     colour: grey;
     height: 2rem;
     display:flex;
     justify-content: flex-start;
     align-items: center;
     margin: 0 rem;`
     

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledNavBar>
        <ul>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </ul>
        <ul>
          <NavLink to='/characters'>
            Characters
          </NavLink>
        </ul> 
        <ul>
          <NavLink to="/search" activeClassName="activeNavButton">
            Search
          </NavLink>
        </ul>
      </StyledNavBar>
    </header>
  );
}
