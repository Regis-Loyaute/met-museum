import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Search from "./Search";
import styled from "styled-components";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);
  const handleSearchBar = () => setSearchBar(!searchBar);

  const NavLink = styled(Link)`
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px;
    background-color: #ffff;
    border-radius: 10px;
    &:hover {
        color: #000;
        background-color: #808080;
    }
  `;

  const SearchIcon = styled(FiSearch)`
    color: #000;
    font-size: 3rem;
    &:hover {
        color: #fff;
    }
  `;

  const HeaderContainer = styled.header`
    background-image: url('../../white (2) (1).jpg');
    color: #000;
    font-family: 'Roboto', sans-serif;
    padding: 2rem;
    text-align: center;
  `;

  return (
    <HeaderContainer role="contentinfo" className="flex gap-2 items-center">
      {!searchBar && (
        <nav className="flex gap-4 items-center flex-grow justify-end">
          <button role="button" onClick={handleSearchBar} className="text-xl">
            <SearchIcon />
          </button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/advanced-search">Advanced search</NavLink>
        </nav>
      )}
      {searchBar && <Search handleSearchBar={handleSearchBar} />}
    </HeaderContainer>
  );
};

export default Header;
