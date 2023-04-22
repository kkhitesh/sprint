import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="h-[10%] shadow-md">
      <img src={logo} alt="logo" className="h-20 ml-10" />
    </header>
  );
};
