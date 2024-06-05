import reactLogo from '../../assets/image.png';
import { useState } from 'react';

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
        <header className="flex items-center p-6 bg-gray-800 shadow-md">
            <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden">
                <img className="logo object-cover" src={reactLogo} alt="logo" />
            </div>
            <div className="flex-1 ml-6">
                <input
                    type="text"
                    placeholder="I want to learn ..."
                    className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
            <div className="ml-6">
                <select
                    className="px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
            </div>
        </header>
    )
};

export default Navbar;