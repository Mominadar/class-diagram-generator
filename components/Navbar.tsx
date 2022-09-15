import Logo from "./Logo";
import NavButton from "./NavButton";
export default function Navbar() {
  return (
    <div className="flex justify-between bg-gray-dark">
      <Logo />
      <div>
        <NavButton text="Login" handleClick={() => console.log("login")} />
        <NavButton text="Signup" handleClick={() => console.log("signup")} />
      </div>
    </div>
  );
}
