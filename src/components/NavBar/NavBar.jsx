
import account from '../../assets/images/account.png'
const NavBar = () => {
    return (
      <div className="font-lexend ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="bg-white menu menu-sm dropdown-content mt-3 z-[1] md:p-2 shadow  rounded-box md:w-52 text-[#150B2BB2]"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>

                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Flavor Fusion</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#150B2BB2] space-x-3">
              <li>
                <a className="hover:scale-95 hover:bg-[#0BE58A] duration-300">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:scale-95 hover:bg-[#0BE58A] duration-300">
                  Recipes
                </a>
              </li>

              <li>
                <a className="hover:scale-95 hover:bg-[#0BE58A] duration-300">
                  About
                </a>
              </li>
              <li>
                <a className="hover:scale-95 hover:bg-[#0BE58A] duration-300">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <div className="md:flex hidden items-center relative">
              <input
                type="text"
                className="input bg-[#150B2B0D] border-none outline-none rounded-full placeholder:pl-8"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-5 absolute left-4 active:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <img
              src={account}
              alt=""
              className="bg-[#0BE58A] size-9 p-2 rounded-full "
            />
          </div>
        </div>
        ;
      </div>
    );
};

export default NavBar;