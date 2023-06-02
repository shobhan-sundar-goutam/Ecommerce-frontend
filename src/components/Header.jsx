import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useState } from 'react';

const categories = [
    'sfsdfdasff',
    'ghdhjrt',
    'htfshrtjoaifj',
    'hoihjs',
    'oghtihais',
    'aeuirfa',
    'ghortish',
    'othios',
    'yumn;io',
    'gtyrfswa',
    'yguknoi',
    'irexw',
    'oij5ex4w',
    'lo;ix',
    'liuye4w',
    'eoghi>',
    'h;oig;riw',
    'porgjjbmhmjqao',
];

function Header() {
    const [showCatergories, setShowCatergories] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <div className="w-full sticky top-0 z-50 ">
            <div className="w-full bg-green_dark text-whiteText px-4 py-4 flex items-center gap-4 justify-between xl:justify-evenly">
                {/* ************ Brand Name **************** */}
                <div className="cursor-pointer text-xl font-textBody font-bold">Shop-e-zone</div>

                {/* ************ Categories  **************** */}
                <div className="hidden xl:block h-5 rounded-md relative">
                    <span
                        className="text-base text-whiteText cursor-pointer font-textBody"
                        onClick={() => setShowCatergories(!showCatergories)}
                    >
                        Categories
                        <ExpandMoreIcon />
                    </span>
                    {showCatergories && (
                        <div>
                            <ul className="absolute w-56 h-80 top-11 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-green_dark text-black p-2 flex flex-col gap-1 z-50">
                                {categories.map((category, index) => (
                                    <li
                                        className="text-sm tracking-wide font-textBody border-b-[1px] border-b-transparent hover:border-b-green_dark cursor-pointer duration-200"
                                        key={index}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* ************ Search Box ****************** */}
                {/* <div className="flex flex-grow relative">
                    <input
                        className="h-full text-base text-black font-textBody flex-grow outline-none border-none px-2"
                        type="text"
                    />
                    <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-green_light duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                        <SearchIcon />
                    </span>
                </div> */}
                <div className="hidden xl:block w-[50%] relative">
                    <input
                        type="text"
                        placeholder="Search Product..."
                        className="h-[40px] font-textBody text-black w-full px-5 border-green_light border-[2px] rounded-full outline-none"
                    />
                    <SearchIcon className="absolute right-4 top-2 cursor-pointer text-green_dark" />
                </div>

                {/* ************ Login/Signup ****************** */}
                <div className="hidden space-x-2 xl:block font-textBody">
                    <button
                        type="button"
                        className="rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-whiteText hover:bg-green_light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green_light"
                    >
                        Login / Signup
                    </button>
                </div>

                {/* ************ Cart & Wishlist  ****************** */}
                <div className="hidden xl:flex items-start justify-center relative cursor-pointer">
                    <FavoriteBorderRoundedIcon />
                    <span className="absolute text-xs -top-1 -right-2 font-textBody w-4 h-4 p-0 m-0  bg-green_light text-whiteText rounded-full flex justify-center items-center">
                        0
                    </span>
                </div>
                <div className="hidden xl:flex items-start justify-center relative cursor-pointer">
                    <ShoppingCartOutlinedIcon />
                    <span className="absolute text-xs -top-1 -right-2 font-textBody w-4 h-4 p-0 m-0  bg-green_light text-whiteText rounded-full flex justify-center items-center">
                        0
                    </span>
                </div>
                <div className="xl:hidden flex gap-5">
                    <div className="flex items-start justify-center cursor-pointer">
                        <AccountCircleOutlinedIcon />
                    </div>
                    <div className="flex items-start justify-center relative cursor-pointer">
                        <ShoppingCartOutlinedIcon />
                        <span className="absolute text-xs -top-1 -right-2 font-textBody w-4 h-4 p-0 m-0  bg-green_light text-whiteText rounded-full flex justify-center items-center">
                            0
                        </span>
                    </div>
                    <div
                        className="flex items-start justify-center cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        {toggle ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
