import reactLogo from '../../assets/image.png';

type props = {
    searchText: string;
    setSearchText: (text: string) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setLevel: (level: string) => void;
    level: string;

}

const Navbar = ({
    searchText,
    setSearchText,
    handleKeyDown,
    setLevel,
}: props) => {


    return (
        <nav className="bg-black border-b border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4 space-x-4">
                <a href="https://github.com/bravesdevs" className="flex items-center space-x-4">
                    <img src={reactLogo} className="h-12" alt="Flowbite Logo" />
                    <span className="text-xl font-semibold dark:text-white">Allmaps</span>
                </a>
                <div className="relative hidden md:block w-full md:w-1/2">
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                        type="text"
                        id="search-navbar"
                        className="block w-full h-12 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="I want to learn..."
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                </div>
                {/* <div className="flex items-center space-x-4 w-full md:w-auto md:order-2"> */}

                {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-gray-50 rounded-lg border border-gray-100 md:bg-white md:dark:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Login</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                    </ul>
                </div> */}
                <select
                    className="h-12 px-4 py-4 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
            </div>
        </nav>
    )
};

export default Navbar;




// <header className="flex items-center p-6 bg-gray-800 shadow-md">
//     <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden">
//         <img className="logo object-cover" src={reactLogo} alt="logo" />
//     </div>
//     <div className="flex-1 ml-6">
//         <input
//             type="text"
//             placeholder="I want to learn ..."
//             className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             onKeyDown={(e) => handleKeyDown(e)}
//         />
//     </div>
//     <div className="ml-6">
//         <select
//             className="px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             onChange={(e) => setLevel(e.target.value)}
//         >
//             <option>Beginner</option>
//             <option>Intermediate</option>
//             <option>Advanced</option>
//         </select>
//     </div>
// </header>


