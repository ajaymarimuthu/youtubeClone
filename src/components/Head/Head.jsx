
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggelMenu } from "../../utils/appSlice";
import { Link, BrowserRouter } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { useEffect } from "react";
import { cacheResults } from "../../utils/searchSlice";
 

const Head = () => {

    const [search, setsearch] = useState("")
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache=useSelector(store=>store.search)
    console.log(searchCache);

    const dispatch = useDispatch();

    //function to toggle the side menu by dispatching action     
    const toggleMenuHandler = () => {
        console.log("clciked");
        dispatch(toggelMenu())
    }

 

    const handleFocus = () => {
        setShowSuggestion(true)
    }

    const handleFocusOut = () => {
        setShowSuggestion(false)
    }


    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + search);
        const json = await data.json();
        setSuggestion(json[1])

        // --- updating in cache --
        dispatch(cacheResults({
            [search] : json[1],
        }))
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            if(searchCache[search]){
                setSuggestion(searchCache[search])
            }
            else{
                getSearchSuggestion()
            }
    
        }, 200);

        return () => {
            clearTimeout(timer);
        }

    },[search])



    return (

        <BrowserRouter>

            <div className="grid grid-flow-col m-1">
                <div className="flex items-center col-span-1">
                    <img onClick={() => toggleMenuHandler()} className="cursor-pointer h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU_XFxtCDg2rvWr-IK3bOOopdu6QJovnKCQ&usqp=CAU" alt="menu" />

                    <Link><img className="h-6 mx-2" src="https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=180" /></Link>

                </div>

                <div className="col-span-10 ">

                    <div>
                        <input onBlur={handleFocusOut} onFocus={handleFocus} onChange={(e) => setsearch(e.target.value)} placeholder="Search"
                            className="px-5 border-2 h-8 rounded-l-full w-1/2 cursor-pointer" type="text" />
                        <button className="border-2 h-8 rounded-r-full px-3"><img className="h-8" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1DQ3CsVs5UQQFkRCi_T2LzJe3aFOPJzrpkRv7lZXUdU3TjPCL" alt="search-icon" /></button>
                    </div>


                    <div className="fixed bg-white py-2 px-5 w-[36rem] shadow-md rounded-md">
                        {showSuggestion &&
                            <ul>
                                {suggestion?.map((suggestion, index) => {
                                    return (
                                        <li key={index} className="py-2 shadow-sm hover:bg-gray-100">🔍 {suggestion}</li>
                                    )
                                })}
                            </ul>

                        }
                    </div>

                    <img className="h-5 pl-5" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4jV_ugKjNeBsDitWlP_EySobxdmp4dMFAK5T2NHMJdJLwas0U" alt="audio-icon" />

                </div>


                <div className="col-span-1 flex items-center">


                    <img className="h-5 m-3" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFtMBKlzgRRPy3_yduE5tDn-v--HsDBkqV1sbaD-36sD49vwqS" alt="create-icon" />
                    <img className="h-8" src="https://tse1.mm.bing.net/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" alt="user" />


                </div>

            </div>

        </BrowserRouter>



    )
}

export default Head