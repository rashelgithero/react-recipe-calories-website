const Nav = () => {
    return (
        <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md ">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className=" p-2 flex justify-between ">
                <div className="navbar-start w-1/3 lg:w-1/4">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <button className="btn btn-ghost text-3xl font-bold text-[#150B2B]">Recipe Calories</button>
                </div>
                <div className="navbar-center hidden lg:flex text-[#150B2BB3] text-base font-normal">
                    <ul className="menu menu-horizontal px-1">
                        <li><button>Home</button></li>
                        <li><button>Recipes</button></li>
                        <li><button>About</button></li>
                        <li><button> Search</button></li>
                    </ul>
                </div>
                <div className="navbar-end w-1/4 lg:w-1/4 gap-5">
                    <label className="input input-bordered flex items-center gap-2  rounded-4xl outline-none boder-none">
                        <svg
                            className="w-4 h-4 opacity-70"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>

                        <input type="text" placeholder="Search" />
                    </label>
                    <button className="px-5 py-2 rounded-full bg-[#150B2B] hidden md:block text-white md:flex items-center gap-2 hover:opacity-90 transition cursor-pointer btn">

                        {/* user icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 12h-9m0 0l3-3m-3 3l3 3"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <button className="px-5 py-2 rounded-full bg-[#150B2B] md:hidden  text-white flex items-center gap-2 hover:opacity-90 transition">

                    {/* user icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12h-9m0 0l3-3m-3 3l3 3"
                        />
                    </svg>
                </button>
                <ul className="menu">
                    <li><button>Home</button></li>
                    <li><button>Recipes</button></li>
                    <li><button>About</button></li>
                    <li><button> Search</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;