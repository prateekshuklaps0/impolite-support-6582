import "../ComponentsCSS/NavBar.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { Progress } from "@chakra-ui/react";

import AuthContext from "../Contexts/AuthContext";

// Image Imports
import GPStoreImg from "../Images/StoreButtons/GPButton.jpg";
import AppStoreImg from "../Images/StoreButtons/APButton.jpg";
// ********************

// Empty NavBar Search Content
const DefaultSearchTitles = [
  "saree",
  "smartwatch",
  "kurti",
  "tshirt",
  "watch",
  "lehenga",
  "top",
  "shoes",
  "jeans",
  "jewellery",
];
function EmptyNavSearchContent() {
  return (
    <>
      <h1>Popular Searches</h1>

      <div className="titleHolderDiv firstDefaultCont">
        {DefaultSearchTitles.slice(0, 3).map((item, ind) => {
          return (
            <NavLink
              to="/"
              key={item[0] + ind}
              className="defaultNavSearchtitles"
            >
              {item}
            </NavLink>
          );
        })}
      </div>

      <div className="titleHolderDiv secondDefaultCont">
        {DefaultSearchTitles.slice(3, 7).map((item, ind) => {
          return (
            <NavLink
              to="/"
              key={item[0] + ind}
              className="defaultNavSearchtitles"
            >
              {item}
            </NavLink>
          );
        })}
      </div>

      <div className="titleHolderDiv threeDefaultCont">
        {DefaultSearchTitles.slice(7, 10).map((item, ind) => {
          return (
            <NavLink
              to="/"
              key={item[0] + ind}
              className="defaultNavSearchtitles"
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
// ********************

// Nav Bar Category Title

const cateObj = [
  {
    title: "Women Ethnic",
    headings: [
      "All Women Ethnic",
      "Sarees",
      "Kurtis",
      "Kurta Sets",
      "Suits & Dress Material",
      "Other Ethnic",
    ],
    subLinks: [
      ["View All"],
      [
        "All Sarees",
        "Silk Sarees",
        "Cotton Silk Sarees",
        "Cotton Sarees",
        "Georgette Sarees",
        "Chiffon Sarees",
        "Satin Sarees",
        "Embroidered Sarees",
      ],
      [
        "All Kurtis",
        "Anarkali Kurtis",
        "Rayon Kurtis",
        "Cotton Kurtis",
        "Embroidered Kurtis",
      ],
      ["All Kurta Sets"],
      [
        "All Suits & Dress Material",
        "Cotton Suits",
        "Embroidered Suits",
        "Chanderi Suits",
      ],
      ["Blouses", "Dupattas", "Lehanga", "Gown", "Ethnic Bottomwear"],
    ],
  },
  {
    title: "Women Western",
    headings: ["Topwear", "Bottomwear", "Innerwear", "Sleepwear"],
    subLinks: [
      ["Tops", "Dresses", "Sweaters", "Jumpsuits"],
      ["Jeans", "Jeggings", "Palazzos", "Shorts", "Skirts"],
      ["Bra", "Briefs"],
      ["Nightsuits", "Babydolls"],
    ],
  },
  {
    title: "Men",
    headings: [
      "Top Wear",
      "Bottomwear",
      "Men Accessories",
      "Men Footwear",
      "Ethnic Wear",
      "Inner & Sleep Wear",
    ],
    subLinks: [
      ["All Top Wear", "Tshirts", "Shirts"],
      ["Track Pants", "Jeans", "Trousers"],
      [
        "All Men Accessories",
        "Watches",
        "Belts",
        "Wallets",
        "Jewellery",
        "Sunglasses",
        "Bags",
      ],
      ["Casual Shoes", "Sports Shoes", "Sandals", "Formal Shoes"],
      ["Men Kurtas", "Ethnic Jackets"],
      ["All Inner & Sleep Wear", "Vests"],
    ],
  },
  {
    title: "Kids",
    headings: [
      "Boys & Girls 2+ Years",
      "Infant 0-2 Years",
      "Toys & Accessories",
      "Baby Care",
    ],
    subLinks: [
      ["Dresses"],
      ["Rompers"],
      ["Soft Toys", "Footwear", "Stationery", "Watches", "Bags & Backpacks"],
      ["All Baby Care"],
    ],
  },
  {
    title: "Home & Kitchen",
    headings: ["Home Furnishing", "Home Decor", "Kitchen & Dining"],
    subLinks: [
      [
        "Bedsheets",
        "Doormats",
        "Curtains & Sheers",
        "Cushions & Cushion Covers",
        "Mattress Protectors",
      ],
      ["All Home Decor", "Stickers", "Clocks", "Showpieces"],
      ["Kitchen Storage", "Cookware & Bakeware"],
    ],
  },
  {
    title: "Beauty & Health",
    headings: ["Make up", "Wellness", "Skincare"],
    subLinks: [
      ["Face", "Eyes", "Lips", "Nails"],
      ["Sanitizers", "Oral Care", "Feminine Hygiene"],
      ["Deodorants"],
    ],
  },
  {
    title: "Jewellery & Accessories",
    headings: ["Jewellery", "Women Accessory"],
    subLinks: [
      [
        "Jewellery Set",
        "Earrings",
        "Mangalsutras",
        "Studs",
        "Bangles",
        "Necklaces",
        "Rings",
        "Anklets",
      ],
      ["Bags", "Watches", "Hair Accessories", "Sunglasses", "Socks"],
    ],
  },
  {
    title: "Bags & Footwear",
    headings: ["Women Bags", "Men Bags", "Men Footwear", "Women Footwear"],
    subLinks: [
      ["All Women Bags", "Handbags", "Clutches", "Slingbags"],
      ["All Men Bags", "Men Wallets"],
      ["Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals"],
      ["Flats", "Bellies", "Juttis"],
    ],
  },
  {
    title: "Electronics",
    headings: ["Mobile & Accessories", "Appliances"],
    subLinks: [
      [
        "All Mobile & Accessories",
        "Smartwatches",
        "Mobile Holders",
        "Mobile cases and covers",
      ],
      ["All Appliances", "Grooming", "Home Appliances"],
    ],
  },
];
function NavCateTitle() {
  const [cateTitle, setcateTitle] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  function handleTitleChange(name) {
    setcateTitle((prev) => (prev = name));
    setShowPopUp(true);
  }

  function handleMouseLeave() {
    setShowPopUp(false);
  }

  return (
    <div onMouseLeave={handleMouseLeave} className="navCateCont">
      {cateObj.map((item, ind) => {
        return (
          <div
            onMouseEnter={(e) => {
              handleTitleChange(item.title);
            }}
            className="navCateDivs"
            key={ind + item.title[1]}
          >
            <p>{item.title}</p>
          </div>
        );
      })}
      {showPopUp && (
        <CategoriesPopUp
          onMouseEnter={handleTitleChange}
          cateTitle={cateTitle}
        />
      )}
    </div>
  );
}
// ********************

// Child Category Elements
function ReturnElements({ arr }) {
  return (
    <div className="layer4">
      {arr &&
        arr.map((item, ind) => (
          <NavLink
            className="subcatesLinks"
            to="/"
            key={ind + item[0] + item[1]}
          >
            {item}
          </NavLink>
        ))}
    </div>
  );
}

function ChildCate({ array }) {
  return (
    <div className="layer2">
      {array[0] &&
        array[0].headings.map((item, ind) => {
          return (
            <div
              style={
                ind % 2 == 0
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "rgb(249, 249, 249)" }
              }
              key={ind + item[0] + item[1]}
              className="layer3"
            >
              <h1>{item}</h1>
              <ReturnElements arr={array[0].subLinks[ind]} />
            </div>
          );
        })}
    </div>
  );
}

// ********************

// Hidden Category PopUp
function CatchTheArr(name) {
  let requiredArr = cateObj.filter((item, ind) => {
    if (item.title == name) {
      return item.headings;
    }
  });
  return requiredArr;
}

function CategoriesPopUp({ cateTitle, onMouseEnter }) {
  const [text, setText] = useState("");
  const [headingArr, setheadingArr] = useState([]);
  const [linksArr, setlinksArr] = useState([]);

  useEffect(() => {
    setText(cateTitle);
    setheadingArr((prev) => (prev = CatchTheArr(cateTitle)));
  }, [cateTitle]);

  return (
    <div className="CateContainer" onMouseEnter={() => onMouseEnter}>
      {headingArr && <ChildCate array={headingArr} />}
    </div>
  );
}
// ********************

// This is to Indicate SignUp Page to Logout
var SetLogOut = false;

function NavBar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  // Nav Bar Search Input
  const navSearchInpRef = useRef(null);
  const formRef = useRef(null);
  const [navSearchValue, setnavSearchValue] = useState("");
  const [searchPopUpDiv, setsearchPopUpDiv] = useState(false);
  const [SwapLoading, setSwapLoading] = useState(false);
  useEffect(() => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setsearchPopUpDiv(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerNavSearchInp = () => {
    navSearchInpRef.current.focus();
    setsearchPopUpDiv(true);
  };

  const handleNavSearch = (event) => {
    setnavSearchValue(event.target.value);
  };

  const clearNavSearchText = () => {
    setnavSearchValue("");
  };
  //   *******************************

  // Download App PopUp
  const navigateToApricot = () => {
    window.open("https://apricot-prateek.netlify.app/", "_blank");
  };
  const navigateToGithub = () => {
    window.open(
      "https://github.com/prateekshuklaps0/impolite-support-6582",
      "_blank"
    );
  };

  const [showdownload, setshowdownload] = useState(false);
  const handleShowdownload = () => {
    setshowdownload(true);
  };
  const handleHidedownload = () => {
    setshowdownload(false);
  };
  const DownloadAppPopUp = () => {
    return (
      <div
        style={showdownload ? { display: "inline" } : { display: "none" }}
        className="dropdownMenus downloadCont"
      >
        <h1>Download From a</h1>
        <img
          onClick={navigateToGithub}
          className="GPStoreImg"
          src={GPStoreImg}
          alt="Go To Google Play Store"
        ></img>
        <img
          onClick={navigateToApricot}
          className="ApStoreImg"
          src={AppStoreImg}
          alt="Go To App Store"
        ></img>
      </div>
    );
  };
  //   *******************************

  // Login Profile PopUp
  const [showProfileBox, setProfileBox] = useState(false);
  const handleShowProfileBox = () => {
    setProfileBox(true);
  };
  const handleHideProfileBox = () => {
    setProfileBox(false);
  };
  function HiddenProfileBox() {
    return (
      <div
        id="ProfileCont"
        style={showProfileBox ? { display: "inline" } : { display: "none" }}
        className="dropdownMenus downloadCont ProfileCont"
      >
        <h1>Hello User</h1>
        <p>To access your MeShop account</p>
        {/*  */}
        {isLoggedIn ? (
          <Link>
            <button onClick={logout} className="SignUpButton">
              Log Out
            </button>
          </Link>
        ) : (
          <Link>
            <button className="SignUpButton">Sign Up</button>
          </Link>
        )}

        {/*  */}
        <div className="NavBarMyOrderCont">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            iconSize="20"
            class="sc-gswNZR bjZSWs"
          >
            <path fill="#fff" d="M0 0h28v28H0z"></path>
            <g clip-path="url(#orders_svg__a)" fill="#333">
              <path d="M20.032 10.89c.227 0 .418.19.418.418v10.811c0 .228-.19.418-.418.418H7.89a.422.422 0 0 1-.417-.418V11.308c0-.228.19-.418.418-.418h12.14Zm0-1.473H7.89A1.89 1.89 0 0 0 6 11.308v10.811C6 23.154 6.846 24 7.89 24h12.142a1.89 1.89 0 0 0 1.89-1.89V11.308a1.902 1.902 0 0 0-1.89-1.89Z"></path>
              <path d="M13.961 5a4.87 4.87 0 0 0-4.873 4.864v2.84h.009c.019.39.333.704.732.704a.736.736 0 0 0 .731-.723V9.864a3.404 3.404 0 0 1 3.401-3.401 3.398 3.398 0 0 1 3.401 3.401v2.812c.01.399.333.722.732.722.389 0 .712-.313.731-.703h.01V9.864A4.875 4.875 0 0 0 13.96 5Z"></path>
            </g>
            <defs>
              <clipPath id="orders_svg__a">
                <path
                  fill="#fff"
                  transform="translate(6 5)"
                  d="M0 0h15.912v19H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <h1>My Orders</h1>
        </div>
      </div>
    );
  }
  //   *******************************

  return (
    <nav className="navCont">
      {/* Nav Bar Upper Part */}
      <div className="upperNaV">
        {/* Upper Nav Left Elements */}
        <div className="upperNav_left">
          <Link to="/" className="meshopLogo">
            meShop
          </Link>
          {/* Search Form */}
          <form
            className="navSearchForm"
            onClick={triggerNavSearchInp}
            ref={formRef}
            action="#"
            method="get"
          >
            {/* Search Button in Nav Bar */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="greyT2"
              xmlns="http://www.w3.org/2000/svg"
              iconSize="20"
              class="sc-gswNZR jweCCb"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z"
                  fill="#666666"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.000244141)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            {/* Search Input in Nav Bar */}
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Products Code"
              ref={navSearchInpRef}
              value={navSearchValue}
              onChange={handleNavSearch}
            />
            {/* Clear Nav Search */}
            {navSearchValue && (
              <button type="button" onClick={clearNavSearchText}>
                X
              </button>
            )}
            {/* Nav Search PopUp Dropdown */}
            {searchPopUpDiv && (
              <div
                style={{
                  position: "absolute",
                  top: "48%",
                  left: "231px",
                }}
                className="searchPopup dropdownMenus"
                onClick={() => setsearchPopUpDiv(true)}
              >
                {!navSearchValue ? (
                  <EmptyNavSearchContent />
                ) : (
                  <h1>{navSearchValue}</h1>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Upper Nav Right Elements */}
        <div className="upperNav_right">
          {/* Download App Element */}
          <div
            onMouseEnter={handleShowdownload}
            onMouseLeave={handleHidedownload}
            className="navTop_right_conts download_app"
          >
            <svg
              viewBox="0 0 16 24"
              xmlns="http://www.w3.org/2000/svg"
              mr="8"
              class="sc-gswNZR fEPKVe hover"
              iconSize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488ZM2.672 5.335v11.469h10.656V5.335H2.672Zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 0 1-1.488-1.488ZM.8 3.36A3.36 3.36 0 0 1 4.16 0h7.68a3.36 3.36 0 0 1 3.36 3.36v17.28A3.36 3.36 0 0 1 11.84 24H4.16A3.36 3.36 0 0 1 .8 20.64V3.36Zm6 16.447a.6.6 0 0 0 0 1.2h2.4a.6.6 0 1 0 0-1.2H6.8Z"
                fill="#333"
              ></path>
            </svg>
            <p>Download App</p>
            {<DownloadAppPopUp />}
          </div>

          {/* Become a Supplier Element */}
          <div className="navTop_right_conts supplierCont">
            <p>Become a Supplier</p>
          </div>
          {/* Login and Cart Container  */}
          <div className="navTop_right_conts profile_cart_cont ">
            {/* Login Link Element */}
            <div
              onMouseEnter={handleShowProfileBox}
              onMouseLeave={handleHideProfileBox}
              className="profileCont"
            >
              <svg
                id="profileSVG"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-gswNZR fEPKVe hover"
                mr="8"
                iconSize="20"
              >
                <g clip-path="url(#user_svg__a)">
                  <path
                    d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0 0 12 2.4a5.835 5.835 0 0 0-5.832 5.832 5.79 5.79 0 0 0 2.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354ZM7.853 8.232a4.148 4.148 0 0 1 8.294 0 4.148 4.148 0 0 1-8.294 0Zm13.122 14.083H3.025a.245.245 0 0 1-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 0 1-.14.032Z"
                    fill="#333"
                  ></path>
                </g>
                <defs>
                  <clipPath id="user_svg__a">
                    <path
                      fill="#fff"
                      transform="translate(1.2 2.4)"
                      d="M0 0h21.6v21.6H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <p>Profile</p>
              {<HiddenProfileBox />}
            </div>

            {/* Cart Link Element */}
            <div className="cartDiv">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                mr="8"
                class="sc-gswNZR cJeZBN hover"
                stroke="greyBase"
                iconSize="20"
              >
                <path
                  d="m4.987 5.469 1.848 7.2a1 1 0 0 0 .968.752h8.675a1 1 0 0 0 .962-.726l1.697-5.952a1 1 0 0 0-.962-1.274H4.987Zm0 0-.943-3.248a1 1 0 0 0-.96-.721H1"
                  stroke="#666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <ellipse
                  cx="9.421"
                  cy="16.744"
                  rx="1.243"
                  ry="1.256"
                  stroke="#666"
                  stroke-width="1.5"
                ></ellipse>
                <ellipse
                  cx="15.221"
                  cy="16.744"
                  rx="1.243"
                  ry="1.256"
                  stroke="#666"
                  stroke-width="1.5"
                ></ellipse>
              </svg>
              <p>Cart</p>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
      {/*  */}

      {/* Nav Bar Lower Part */}
      <div className="cateNav">{<NavCateTitle />}</div>
      {/*  */}
      {SwapLoading && (
        <Progress className="NavProgress" size="xs" isIndeterminate />
      )}
    </nav>
  );
}
export { NavBar, SetLogOut };
