import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">Intellion</h1>
      <div>
        <Link to="/" className="mx-3 hover:underline">Home</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
