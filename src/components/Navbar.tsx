import React, { FC } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/png/logo-t.png'

const Navbar: FC = () => {
    return(
        <div className="container">
            <nav className="flex justify-between">
                <div className="flex">
                    <a href="/">
                        <img src={logo} alt="" className="h-20 w-20 lg:h-32 lg:w-32"/>
                    </a>
                    <a href="/" className="text-white mt-5 text-center font-bold text-lg lg:text-3xl lg:mt-8 font-mono">
                        dorm_harbor
                    </a>
                </div>
                <div className="text-white m-10 font-mono text-lg">
                    <ul className="flex items-center justify-evenly">
                        <li className="mx-16 hover:underline">
                            <a href="/auth">Login</a>
                        </li>
                        <li className="mx-16 hover:underline">
                            <a href="/">Rentals</a>
                        </li>
                        <li className="mx-16 hover:underline">
                            <a href="/">Wallet</a>
                        </li>
                        <li className="mx-16 hover:underline">
                            <a href="/">Become a Host</a>
                        </li>
                    </ul>
                </div>
                <div className="m-5">
                    <FontAwesomeIcon icon={faBars} className="text-white lg:hidden"/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar