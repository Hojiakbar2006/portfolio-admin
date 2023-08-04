import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppBar } from "./Components/AppBar/AppBar";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";
import { Project } from "./Pages/Project/Project";
import { Alert } from "./Components/UI/Alert";
import { FeedBack } from "./Pages/FeedBack/FeedBack";
import { View } from "./Pages/View/View";
import { AddProject } from "./Pages/AddProject/AddProject";

const route = [
  { id: 1, name: "Home", routName: "/", element: Home, style: "" },
  { id: 2, name: "Project", routName: "/project", element: Project, style: "" },
  {
    id: 3,
    name: "FeedBack",
    routName: "/feedback",
    element: FeedBack,
    style: "",
  },
  {
    id: 4,
    name: "View",
    routName: "/view-message/:id",
    element: View,
    style: "none",
  },
  {
    id: 5,
    name: "AddProject",
    routName: "/addproject",
    element: AddProject,
    style: "",
  },
];

export function Router() {
  const [openNav, setOpenNav] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  return (
    <div id="Route">
      <AppBar
        data={route}
        openNav={openNav}
        openApp={openApp}
        setOpenNav={setOpenNav}
        setOpenApp={setOpenApp}
      />
      <Alert />
      <NavBar setOpenNav={setOpenNav} setOpenApp={setOpenApp} />
      <Routes>
        {route.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.routName}
              element={<item.element />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
