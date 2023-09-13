import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex px-4 border-b md:shadow-lg items-center relative">
       <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li>
            <Link to="/" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">Home</Link>
        </li>
        <li>
            <Link to="/owner" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">Owner</Link>
        </li>
       </ul>
    </nav>

  );
}

export default Navbar;
