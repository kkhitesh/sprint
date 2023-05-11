import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  const nav = useNavigate();
  return (
    <header className="h-[10%] shadow-md">
      <img
        src={logo}
        alt="logo"
        className="h-16 ml-16 p-1 cursor-pointer"
        onClick={() => nav("/")}
      />
    </header>
  );
};
