import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReturnModal } from "./ReturnModal";
import { useState } from "react";

export const Header = () => {
  const nav = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleNav = () => {
    if (window.location.pathname === "/") nav("/");
    else setShowModal(true);
  };

  return (
    <header className="h-[10%] shadow-md">
      <ReturnModal showModal={showModal} setShowModal={setShowModal} />
      <img
        src={logo}
        alt="logo"
        className="h-16 ml-16 p-1 cursor-pointer"
        onClick={handleNav}
      />
    </header>
  );
};
