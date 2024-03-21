import { useState } from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import ManDropMenu from "../ManDropMenu/ManDropMenu";
import WomanDropMenu from "../WomanDropMenu/WomanDropMenu";
import KidDropMenu from "../KidDropMenu/KidDropMenu";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  const [searchValue, setSearchValue] = useState();
  const [isDropdownVisibleMan, setIsDropdownVisibleMan] = useState(false);
  const [isDropdownVisibleWoman, setIsDropdownVisibleWoman] = useState(false);
  const [isDropdownVisibleKid, setIsDropdownVisibleKid] = useState(false);

  const handleMouseEnterMan = () => {
    setIsDropdownVisibleMan(true);
  };

  const handleMouseLeaveMan = () => {
    setIsDropdownVisibleMan(false);
  };

  const handleMouseEnterWoman = () => {
    setIsDropdownVisibleWoman(true);
  };

  const handleMouseLeaveWoman = () => {
    setIsDropdownVisibleWoman(false);
  };

  const handleMouseEnterKid = () => {
    setIsDropdownVisibleKid(true);
  };

  const handleMouseLeaveKid = () => {
    setIsDropdownVisibleKid(false);
  };

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const searchSite = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-upper">
        <div className="logo flex-grow-3">
          <h1>Gehena</h1>
        </div>
        <div className="search-box flex-grow-3">
          {/* <div className="search-logo"><SearchIcon /></div> */}
          {/* <div className="search-box-input"> */}
          <form onSubmit={searchSite}>
            <input
              type="text"
              placeholder="Search.."
              value={searchValue}
              onChange={changeSearchValue}
            ></input>
            <button type="submit">search</button>
          </form>
          {/* </div> */}
        </div>
        <div className="button-section">
          <div className="profile">
            <PersonIcon />
          </div>
          <div className="wish-list">
            <FavoriteBorderIcon />
          </div>
          <div className="bag">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
      <div className="drop-down-section">
        <div
          className="section-div"
          onMouseEnter={handleMouseEnterWoman}
          onMouseLeave={handleMouseLeaveWoman}
        >
          <p>Women's Jewellery</p>
          {isDropdownVisibleWoman && <WomanDropMenu />}
        </div>
        <div
          className="section-div"
          onMouseEnter={handleMouseEnterMan}
          onMouseLeave={handleMouseLeaveMan}
        >
          <p>Men's Jewellery</p>
          {isDropdownVisibleMan && <ManDropMenu />}
        </div>
        <div
          className="section-div"
          onMouseEnter={handleMouseEnterKid}
          onMouseLeave={handleMouseLeaveKid}
        >
          <p>Kid's Jewellery</p>
          {isDropdownVisibleKid && <KidDropMenu />}
        </div>
      </div>
      <div className="drop-down-menu">
        
      </div>
    </div>
  );
}

export default NavBar;
