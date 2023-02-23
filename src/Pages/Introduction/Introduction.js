/*
import "./Introduction.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";

function Introduction({ isEntering }) {
  const submenus = [
    ["CEO 인사말", "/introduction/ceo_hello"],
    ["회사소개", "/introduction/company_intro"],
  ];
  const navigate = useNavigate();
  if (isEntering) {
    isEntering = false;
    return () => navigate("./ceo_hello");
  }
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Introduction;
*/

import "./Introduction.css";
import { useEffect } from "react";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";

function Introduction() {
  const submenus = [
    ["CEO 인사말", "/introduction/ceo_hello"],
    ["회사소개", "/introduction/company_intro"],
  ];

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/introduction/ceo_hello");
  });

  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Introduction;
