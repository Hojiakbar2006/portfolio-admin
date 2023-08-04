import React from "react";
import "./AppBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import signOut from "../../Assets/Icons/signout.svg";
import visible from "../../Assets/Icons/Visible blue.svg";

export function AppBar({ data, openNav, setOpenNav, openApp, setOpenApp }) {
  const navigate = useNavigate();
  const feedback = [
    {
      id: 1,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 2,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 3,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 4,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 5,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
  ];
  return (
    <>
      <div
        className={
          openNav || openApp ? "NavContainer openCard" : "NavContainer"
        }
        onClick={() => {
          setOpenNav(false);
          setOpenApp(false);
        }}
      ></div>

      <div className={openNav ? "NavBar openNav" : "NavBar"}>
        <div className="AppBar">
          <div className="profile">
            <figure>
              <img src="./my-logo.png" alt="" />
            </figure>
            <p>Hojiakbar Nasriddinov</p>
          </div>
          <div className="nav-link">
            {data.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.routName}
                  style={{ display: item.style }}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <NavLink>
          <img src={signOut} alt="" /> Sign out
        </NavLink>
      </div>

      <div className={openApp ? "notifCenter openNotif" : "notifCenter"}>
        <button onClick={() => navigate("/feedback")}>
          you have {feedback.length} message
        </button>
        <div className="btn-group">
          {feedback.map((item) => {
            return (
              <button onClick={() => navigate(`view-message/${item.id}`)}>
                <div>
                  <p>{item.name}</p>
                  <p>{item.phone}</p>
                </div>
                <img src={visible} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
