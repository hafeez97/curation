import  React from "react"
import {FaDigitalOcean} from "react-icons/fa";

const MidCard = (props) => {
    return(
        <div className=" w-4/12">
            <div className="mb-5 flex">
                <div className="grad rounded-full mx-auto">
                    {props.children}
                </div>
            </div>
            <div className="font-bold text-[29px] text tracking-[1px]">
                <p>{props.title}</p>
                <br/>
            </div>
            <div className="font-extralight text-[20px] mt-10 mx-auto">
                {props.description}
            </div>
        </div>
    )
}
export default MidCard