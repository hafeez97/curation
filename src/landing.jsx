import { useState } from 'react'
import './App.css'
import logo from "../src/assets/logo.png"
import ladyImg from "../src/assets/lady-pic.png"
import whiteVector from "../src/assets/vectorwhite.png"
import leftVector from "../src/assets/leftVector.png"
import rightVector from "../src/assets/rightVector.png"


import {
    FaDiscord,
    FaInstagram,
    FaTwitter,
    FaDigitalOcean,
    FaHandHoldingHeart,
    FaHeadphones,
    FaGlobe, FaMusic
} from "react-icons/fa";

import { db } from "./firebase-config";
import {
    collection,
    addDoc,
    doc,
} from "firebase/firestore";

import Vector1 from "../src/assets/V1.png"
import Vector2 from "../src/assets/V2.png"
import Vector3 from "../src/assets/V3.png"
import rectangle from "../src/assets/Rectangle.png"
import sectionVector from "../src/assets/sec3.png"
import FooterBg from "../src/assets/footerbg.png"
import Getdata from "./getdata";


function Landing() {
    const [newEmail, setNewEmail] = useState("");
    const [users, setUsers] = useState(false);


    const usersCollectionRef = collection(db, "users");
    const createUser = async () => {
        await addDoc(usersCollectionRef, { email: newEmail });
        setUsers(true)
    };

    return (
        <>
            <div className="h-full w-full">
                <section>
                    <div className="laptop:h-screen w-full grad-head flex">
                        <div className="w-8/12 laptop:ml-20 mobile:ml-3">
                            <div className="laptop:mt-28 -mb-16 laptop:-ml-3 mobile:mt-0 mobile:-ml-2">
                                <img src={logo} alt="" height="250px" width="400px"/>
                            </div>
                            <div className="text-white text-left font-sans laptop:text-[54px] mobile:text-[16px] mobile:mt-3 mobile:w-full laptop:w-9/12 ">
                                <h1 className="">
                                    LIVE A UNIQUE EXPERIENCE WITH YOUR FAVORITE ARTIST
                                </h1>
                            </div>
                            <div className="laptop:w-7/12  mobile:w-full mobile:text-[16px] font-robo laptop:mt-6 laptop:text-3xl mobile:mt-6 text-2xl text-white">
                                <h1>
                                    Be part of the curator community by sharing your
                                    favorite song and get the opportunity to be displayed in our playlist. <br/><br/>
                                    Follow us to enjoy our daily curation.
                                </h1>
                            </div>
                            <div className="pb-10">
                                <div className="mt-24 flex gap-6">
                                    <a href="https://www.instagram.com/curationmusic_fr/">
                                        <FaInstagram size="2rem" color="white"/>
                                    </a>
                                    <a href="https://twitter.com/curation_music" target="_blank">
                                        <FaTwitter size="2rem" color="white"/>
                                    </a>
                                    <a href="">
                                        <FaDiscord size="2rem" color="white"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className=" w-4/12 relative">
                            <div className="absolute right-0 bottom-0 mobile:w-[280px] laptop:w-[750px]  mobile:-z-10">
                                <img src={rightVector} alt=""/>
                            </div>
                            <div className="absolute bottom-0 right-0 mobile:w-[180px] laptop:w-[550px]">
                                <img src={ladyImg} alt=""/>
                            </div>


                        </div>
                    </div>
                </section>
                <section className="mt-32 w-full">
                    <div className=" w-full items-center w-8/12  mx-auto mb-52">
                        <div className="font-sans text-black laptop:text-[54px] mobile:text-[30px] laptop:ml-28 mobile:ml-14">
                            <p>
                                THE PROJECT
                            </p>
                        </div>
                        <div className="laptop:flex mobile:grid mobile:w-full gap-10  text-center justify-center font-robo mt-20 mx-auto ">
                            <div className="w-4/12 mobile:w-full">
                                <div className="mb-5 flex">
                                    <div className="grad rounded-full mx-auto ">
                                        <FaDigitalOcean color="white" size="130px" style={{padding:"18px"}}/>
                                    </div>
                                </div>
                                <div className="font-bold text-[29px] tracking-[1px]">
                                    <p>Digital Collectible</p>
                                    <br/>
                                </div>
                                <div className="font-extralight text-[20px] mt-10 mx-auto">
                                    <p>Artists share his <span className="font-bold">NFT creation </span></p>
                                </div>
                            </div>
                            <div className=" w-4/12 mobile:w-full">
                                <div className="mb-5 flex">
                                    <div className="grad rounded-full mx-auto">
                                        <FaHandHoldingHeart color="white" size="130px" style={{padding:"18px"}}/>
                                    </div>
                                </div>
                                <div className="font-bold text-[29px] ">
                                    <p>
                                        Fans own property
                                        of the asset</p>
                                    <br/>
                                </div>
                                <div className="font-extralight text-[20px] mt-10   mx-auto">
                                    <p>Fans own <span className="font-bold">
                              100 % of the digital collectible </span>(Music/Picture/Clip/Animation...) </p>
                                </div>
                            </div>
                            <div className=" w-4/12 mobile:w-full">
                                <div className="mb-5 flex">
                                    <div className="grad rounded-full mx-auto">
                                        <FaHeadphones color="white" size="130px"  style={{padding:"18px"}}/>
                                    </div>
                                </div>
                                <div className="font-bold text-[29px] ">
                                    <p>Fans live an experience
                                        with his favorite artist
                                    </p>
                                </div>
                                <div className="font-extralight text-[20px] mt-10  mx-auto">
                                    <p>Thanks to the digital collectible, fans get the right to  <span className="font-bold">live a crazy experience</span> with the favorite artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="h-full w-full grad-head pt-16 pb-16">
                        <div className="absolute mix-blend-darken">
                            <img src={leftVector} alt=""/>
                        </div>
                        <div className=" mx-auto w-9/12 relative">
                            <div className="font-sans text-[54px] text-white ">
                                <p>MISSION</p>
                            </div>
                            <div className="font-robo text-white text-[40px] mt-20 "  >
                                <p>
                                    Curation will help artists to cope with 3 issues they face
                                </p>
                            </div>
                        </div>


                        <div className="mt-24">
                            <div className=" laptop:flex mobile:grid w-full gap-4 mx-auto justify-evenly overflow-hidden">
                                <div className="bg-white font-thin font-robo text-[30px] w-[400px] p-14 text-center  z-10">
                                    <div>
                                        <p>99% of artists <span className="font-bold">don’t</span>  make money with streaming</p>
                                    </div>
                                    <div className=" flex justify-center mt-5">
                                        <img src={Vector1} alt=""/>
                                    </div>
                                </div>
                                <div className="bg-white font-thin font-robo text-[30px] w-[400px] p-14 text-center ">
                                    <div>
                                        <p><span className="font-bold">WEB 3</span> musical
                                            projects are centralized</p>
                                    </div>
                                    <div className=" flex justify-center mt-5">
                                        <img src={Vector2} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-center laptop:-mt-32 ">
                                <div className="bg-white font-thin font-robo text-[30px] w-[400px] h-[300px] p-14 text-center drop-shadow-lg mobile:mt-3">
                                    <div>
                                        <p>Big labels
                                            <span className="font-bold"> get rich</span> off the artist</p>
                                    </div>
                                    <div className=" flex justify-center mt-5">
                                        <img src={Vector3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className=" laptop:flex mobile:grid h-screen mx-auto  w-full bg-white pt-16 flex ">
                        <div className=" mx-auto w-8/12 laptop:ml-40 laptop:mt-50">
                            <div className="font-sans text-[54px]">
                                <p>THE EXPERIENCE</p>
                            </div>
                            <div className="font-robo text-[40px] mt-20">
                                <p>LIVE  A UNIQUE EXPERIENCE</p>
                            </div>
                            <div style={{backgroundImage:`url(${rectangle})`, backgroundRepeat:"no-repeat"}} className=" mt-10 h-[600px]">
                                <ul className="laptop:ml-10 mobile:w-full font-robo laptop:text-[38px] leading-relaxed pt-14 mobile:text-[26px]">
                                    <li>
                                        •  Private show in unique places
                                    </li>
                                    <li>
                                        •    Own shares of a song
                                    </li>
                                    <li>•  Get a life ticket for shows
                                    </li>
                                    <li>
                                        •  Collectors clothes
                                    </li>
                                    <li>•  Events in the metaverse</li>
                                    <li>
                                        •  Etc.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full w-8/12 ml-24">
                            <div className="mt-48 bottom-0 right-0">
                                <img src={sectionVector} height="790px" width="849px" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="h-screen mx-auto  laptop:w-full pt-16 style bg-top" style={{backgroundImage:`url(${whiteVector})`, backgroundRepeat:"no-repeat"}}>
                        <div className="text-[30px] text-center font-bold mb-32">
                            <p>And the possibilities are endless, feel free to share your ideas with us.</p>
                        </div>
                        <div className="border-b-amber-300 border-t-amber-500 border-r-amber-500 border-l-amber-500 border-2 mx-auto w-8/12 flex p-12 my-auto  rounded-lg mt-10 mb-32">
                            <div className="font-robo font-extralight text-[25px] w-6/12 w-[550px]">
                                <p><span className="font-bold ">  Enter your email and share your favorite song.</span><br/>
                                    If the song is good, it will be displayed in our <span className="font-bold"> Curation playlist </span> and you will get a shoutout in <span className="font-bold"> instagram.</span> </p>
                            </div>
                            <div className="text-[30px] mx-auto">
                                <input onChange={(event) => {
                                    setNewEmail(event.target.value);}} type="text" placeholder="enter your mail" className="rounded-full text-center border-amber-300 border-dotted border-2"/>
                                <div className="text-center mt-4">
                                    {
                                        users ? <button className="btn-bg text-white font-robo text-[25px] pl-28 pr-24 pb-1.5 pt-1.5">Submitted!</button>  : <button onClick={createUser} className="btn-bg text-white font-robo text-[25px] pl-28 pr-24 pb-1.5 pt-1.5">Share your song</button>
                                    }
                                </div>
                            </div>
                        </div>
                        {/*Round section*/}
                        <div className="flex mx-auto justify-between w-8/12">
                            <div className="flex flex-col justify-center w-4/12">
                                <div className="bg-[#F6F6F6BF] pl-6 pt-5 pb-5  gap-4 drop-shadow-xl overflow-hidden">
                                    <div className="flex gap-6">
                                        <div className="my-auto ">
                                            <FaInstagram size="40px"/>
                                        </div>
                                        <div className="font-robo text-[20px] text-center w-8/12">
                                            <p>
                                                Has between <br/>
                                                0 and 100k followers in Instagram
                                            </p></div>
                                    </div>
                                </div>
                            </div>

                            <div className=" w-6/12 ml-2">
                                <div className="bg-[#FF6E00] p-[4.6rem] rounded-full font-semibold  text-white text-center text-[35px]">
                                    <p>
                                        To have a chance to be displayed
                                        in our playlist Curation Music,  enter you mail and share with us
                                        your favorite song
                                        <br/>
                                        <br/>
                                        <span className="font-bold text-[48px]">The artist:</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between w-4/12">
                                <div className="bg-[#F6F6F6BF] pl-6 pt-5 pb-5  gap-4 drop-shadow-xl overflow-hidden">
                                    <div className="flex gap-6">
                                        <div className="my-auto ">
                                            <FaGlobe size="40px"/>
                                        </div>
                                        <div className="font-robo text-[20px] text-center w-8/12 pt-3 pb-3">
                                            <p>
                                                Didn’t sign with a big label like Universal/Sony
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex drop-shadow-xl p-6 gap-4 bg-[#F6F6F6BF]">
                                    <div className="flex m-auto ">
                                        <FaMusic size="40px"/>
                                    </div>
                                    <div className="font-robo text-[20px] text-center w-8/12 pt-4 pb-4">
                                        <p>
                                            Make Good Music
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="mt-80 h-screen w-full" style={{backgroundImage:`url(${FooterBg})`, backgroundRepeat:"no-repeat"}}>
                        <div className=" w-8/12 text-center font-robo text-[48px] mx-auto bg-white border-2 rounded-lg h-1/2">
                            <div className=" mb-14 mt-5 font-bold">
                                <p>Join our Community !</p>
                            </div>
                            <div className="text-[40px]">
                                <input type="text" className="rounded-lg border-2 mb-5" />
                            </div>
                            <div className="text-[40px]">
                                <input type="text"  className="rounded-lg border-2"/>
                            </div>
                            <div className="font-robo text-[24px] mt-16">
                                <button className="bg-black text-white rounded-full pt-2 pb-2 pl-20 pr-20"> Submit</button>
                            </div>
                        </div>
                        <div className="mt-10 w-8/12 mx-auto flex justify-between">
                            <div>
                                <div className="-mb-20">
                                    <img src={logo} width="450px" height="270px" alt=""/>
                                </div>
                                <div className="font-robo text-white w-4/12 ml-4">
                                    <p>
                                        Curation Music is a music NFT platform where fan community own the creation of their favorite artist
                                        in order to live a unique experience with him.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ul className="text-[24px] text-white leading-[4rem] mt-20">
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Follow Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Landing
