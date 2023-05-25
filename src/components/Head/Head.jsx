
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggelMenu } from "../../utils/appSlice";
import { Link ,BrowserRouter} from "react-router-dom";

const Head = () => {

    const [search, setsearch] = useState("")


    const dispatch = useDispatch();


    //function to handle the change event when user input
    const handleChange = (e) =>{
        console.log(e);
        setsearch(e.target.value)
    }


    //function to toggle the side menu by dispatching action     
    const toggleMenuHandler = () => {

        console.log("clciked");

        dispatch(toggelMenu())

    }


    return (

        <BrowserRouter>


     
      

        <div className="grid grid-flow-col m-1">
            <div className="flex items-center col-span-1">
                <img onClick={() => toggleMenuHandler()} className="cursor-pointer h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU_XFxtCDg2rvWr-IK3bOOopdu6QJovnKCQ&usqp=CAU" alt="menu" />
                {/* <a href="/"> */}
                    <Link><img className="h-6 mx-2" src="https://tse4.mm.bing.net/th?id=OIP._IfEaUssjZQwZ1u92b1_GgHaEK&pid=Api&P=0&h=180" /></Link>
                    
                {/* </a> */}
            </div>

            {search}


            <div className="col-span-10 flex items-center">

                <input onChange={handleChange} placeholder="Search" className="border-2 h-8 rounded-l-full w-1/2 cursor-pointer" type="text" />
                <button className="border-2 h-8 rounded-r-full px-3"><img className="h-8" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1DQ3CsVs5UQQFkRCi_T2LzJe3aFOPJzrpkRv7lZXUdU3TjPCL" alt="search-icon"/></button>
                <img className="h-5 pl-5" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4jV_ugKjNeBsDitWlP_EySobxdmp4dMFAK5T2NHMJdJLwas0U" alt="audio-icon"/>

            </div>


            <div className="col-span-1 flex items-center">


                <img className="h-5 m-3" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFtMBKlzgRRPy3_yduE5tDn-v--HsDBkqV1sbaD-36sD49vwqS" alt="create-icon"/>
                <img className="h-8" src="https://tse1.mm.bing.net/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120" alt="user" />
               

            </div>

        </div>

        </BrowserRouter>

      

    )
}

export default Head