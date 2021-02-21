import React, { FC, Fragment } from 'react'
import bg from '../assets/svg/bg2.svg'
import Navbar from '../components/Navbar'
import img from '../assets/svg/dorm.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Landing: FC = () => {

    const [location,setLocation] = React.useState('')
    const [searches, setSearches] = React.useState<Array<String>>([])
    
    const addLocation = (area: string) => {
        var locations = [...searches, area]
        setSearches(locations)
        setLocation('')
    }

    return(
        <Fragment>
            <div className="h-screen w-screen font-mono" style={{backgroundImage:`url(${bg})`, width:'100%'}} id="background">
                <Navbar/>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                </style>
                <section className="flex m-8 justify-around items-center" style={{fontFamily:"'Space Mono', monospace"}}>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-200 text-center">Affordable Living Spaces for all.</h2>
                        <div className="flex mt-8">
                            <input 
                                type="text" 
                                className=" w-full text-xl p-2 rounded-full focus:outline-none text-center" 
                                placeholder="Search for dorms nearby"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />    
                            <button className="-ml-12 focus:outline-none">
                                <FontAwesomeIcon icon={faSearch} className="focus:outline-none text-gray-800 hover:text-gray-600"/>
                            </button>
                        </div>
                        <SearchPredictor location={location} addLocation={addLocation}/>
                        <h2 className="text-xl font-bold text-gray-200 text-center mt-4">*No middlemen. No Hidden Fee. No BS</h2>
                    </div>
                    <img src={img} alt=""/>
                </section>
                <footer className="flex items-end text-gray-200 justify-between mx-16">
                    <p>
                        A Web 3.0 Project
                    </p>
                        © 2021 dormharbor inc.
                    <p>
                    </p>
                    <div className="text-xs">Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </footer>
            </div>
        </Fragment>
    )
}

interface SearchPredictorProps {
    location?: string
    addLocation: Function
}

const SearchPredictor: FC<SearchPredictorProps> = ({location, addLocation}) => {

    const locations = ['San Francisco', 'Los Angeles', 'New York']
    if(location !== ''){
        return(
            <Fragment>
                <div className="bg-gray-50 text-black ml-6 mr-6">
                    {
                        locations.map(area => {
                            return(<p className="p-3 hover:bg-blue-400" onClick={() => addLocation(area)}>{area}</p>)
                        })
                    }
                </div>
            </Fragment>
        )
    }
    else{
        return(<></>)
    }
}

export default Landing