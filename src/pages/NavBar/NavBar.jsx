import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-2.png'

const NavBar = () => {
  return (
    <div className=' '>
      <nav className="bg-white border-gray-200 dark:bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to='/'
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-"
              alt="Flowbite Logo"
            />
          </Link>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-80 p-2 ps-10 text-sm text-white  border border-white rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-white dark:placeholder-slate-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search your Destination..."
              />
            </div>
          </div>

          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-base  rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent ">
              <li>
                <NavLink
                  to='/news'
                  className="block py-2 px-3 text-white  rounded md:bg-transparent - md:p-0 "
                  aria-current="page"
                >
                  News
                </NavLink>
              </li>
              <li>
              <NavLink
                  to='/destination'
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Destination
                </NavLink>
              </li>
              <li>
              <NavLink
                  to='/blog'
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Blog
                </NavLink>
              </li>
              <li>
              <NavLink
                  to='/contact'
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li>
              <NavLink
                  to='/register'
                  className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Register
                </NavLink>
              </li>
            </ul>
            <div className='ml-20'>
                <Link to='/login'>
                <button className='bg-[#F9A51A] font-medium px-6 py-2 rounded-md'>
                    Login
                </button>
                </Link>
            </div>
          </div>
          
        </div>
        
      </nav>
    </div>
  );
};

export default NavBar;
