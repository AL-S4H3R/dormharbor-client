import React from 'react'
import bg from '../assets/svg/bg2.svg'
import dorm from '../assets/png/logo-t.png'
import Navbar from '../components/Navbar'

const Auth: React.FC = () => {
    return(
        <React.Fragment>
            <div className="h-screen w-screen" style={{backgroundImage:`url(${bg})`}}>
                {/* <img src={dorm} alt="" className="h-64 w-64"/> */}
                <Navbar/>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                </style>
                <div className="flex justify-center">
                    <div className="bg-gray-200 rounded-xl p-6 flex-row" style={{fontFamily:"'Space Mono', monospace"}}>
                        <h1 className="text-center font-bold text-3xl mb-8">Welcome to dorm_harbor</h1>
                        <div className="flex justify-between">
                            <input type="text" placeholder="First Name" className="rounded-md shadow-lg text-xl p-2 focus:outline-none"/>
                            <input type="text" placeholder="Last Name" className="rounded-md shadow-lg text-xl p-2 focus:outline-none mx-4"/>
                        </div>
                        <div className="my-8">
                            <input type="text" placeholder="Email" className="w-full -mr-4 rounded-md shadow-lg text-xl p-2 focus:outline-none"/>
                        </div>
                        <div className="my-8 flex justify-between">
                            <input type="password" placeholder="Password" className="rounded-md shadow-lg text-xl p-2 focus:outline-none"/>
                            <input type="password" placeholder="Confirm Password" className="rounded-md shadow-lg text-xl p-2 focus:outline-none mx-4"/>
                        </div>
                        <div className="my-8">
                        </div>
                        <div className="my-8 flex justify-around ml-1 items-center font-semibold">
                            <button className="bg-gray-800 text-gray-200 p-2">Sign Up</button>
                            <a href="/" className="hover:underline hover:text-gray-700">Already Have an Account? Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Auth