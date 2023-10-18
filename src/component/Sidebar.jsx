import student from './assets/student.png'
import teacher from './assets/teacher.png'
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faBookBookmark, faBook, faClock, faUserPlus, faTable, faBullhorn } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    function openMenu(){
        setIsOpen(true);
    }
    return (
        <>
            {/* <Outlet /> */}



            {/* side navbar */}
             {isOpen && 
                        <div class="absolute w-80 h-full overflow-auto text-gray-400 bg-[#252525d6] px-3 flex flex-col gap-1" id="main_nav">
                        <div class="flex gap-3 border border-slate-600 bg-[#252525d6] py-4 px-3 rounded-lg mt-3">
                            <img src={student} width="40px" alt="" />
                            <h1 class="text-2xl">Admin Panel</h1>
                        </div>
                        <div class="flex gap-3 border border-slate-600 text-gray-400 bg-[#252525d6] py-4 px-3 rounded-lg">
                            <img src={teacher} width="40px" alt="" />
                            <h1 class="text-2xl">Hi lilan,</h1>
                        </div>
                        <span class="border border-slate-600 mt-3"></span>
                        <form class="flex flex-col gap-2">
        
                            <Link to="/">
                            <button class="flex gap-3 rounded-lg hover:text-white w-full hover:brightness-125 ease-in-out duration-100 mt-1 hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faHouse} className='mt-[6px]' />
                                
                                    <h1 class="text-xl">Home</h1>
        
                              
        
                            </button>
                            </Link>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faAddressCard} className='mt-[6px]' />
                                
                                <Link to="/profile">
                                <h1 class="text-xl">Update Profile</h1>
        
                                </Link>
                            </button>
                            <FontAwesomeIcon icon={faBookBookmark} className='text-xl text-slate-400 absolute ml-3' id="course_icon-1" />
                            <select class=" rounded-lg text-xl hover:text-white hover:brightness-125 ease-in-out duration-100 hover:bg-[#6f42c2de]  text-gray-400 bg-[#252525d6] py-3 px-3" id="course">
                                <option value="" class="bg-[#6f42c2de]">&nbsp; &nbsp; &nbsp;Course</option>
                                <option value="" class="bg-[#252525d6] text-lg h-2"><button > &nbsp; &nbsp; &nbsp;Add Course</button></option>
                                <option value="" class="bg-[#252525d6] text-lg"><button> &nbsp; &nbsp; &nbsp;Modify Course</button></option>
                            </select>
        
                            <FontAwesomeIcon icon={faBook} className="fa-solid fa-book text-xl text-slate-400 absolute ml-3" id="course_icon-2" />
                            <select class=" rounded-lg text-xl hover:text-white hover:brightness-125 ease-in-out duration-100 hover:bg-[#6f42c2de]  text-gray-400 bg-[#252525d6] py-3 px-3" id="course">
                                <option value="" class="bg-[#6f42c2de]">&nbsp; &nbsp; &nbsp;Subject</option>
                                <option value="" class="bg-[#252525d6] text-lg h-2"><button > &nbsp; &nbsp; &nbsp;Add subject</button></option>
                                <option value="" class="bg-[#252525d6] text-lg"><button> &nbsp; &nbsp; &nbsp;Modify subject</button></option>
                            </select>
        
                            <FontAwesomeIcon icon={faClock} className="fa-solid fa-book text-xl text-slate-400 absolute ml-3" id="course_icon-3" />
                            <select class=" rounded-lg text-xl hover:text-white hover:brightness-125 ease-in-out duration-100 hover:bg-[#6f42c2de]  text-gray-400 bg-[#252525d6] py-3 px-3" id="course">
                                <option value="" class="bg-[#6f42c2de]">&nbsp; &nbsp; &nbsp;Sessions</option>
                                <option value="" class="bg-[#252525d6] text-lg h-2"><button > &nbsp; &nbsp; &nbsp;Add Sessions</button></option>
                                <option value="" class="bg-[#252525d6] text-lg"><button> &nbsp; &nbsp; &nbsp;Modify Sessions</button></option>
                            </select>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faUserPlus} className='mt-[6px]' />
                                <h1 class="text-xl">Add Staff</h1>
                            </button>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faTable} className='mt-[6px]' />
                                <h1 class="text-xl">Manage Staff</h1>
                            </button>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faUserPlus} className='mt-[6px]' />
                                <h1 class="text-xl">Add student</h1>
                            </button>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faTable} className='mt-[6px]' />
                                <h1 class="text-xl">Manage Student</h1>
                            </button>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faBullhorn} className='mt-[6px]' />
                                <h1 class="text-xl">Report Staff</h1>
                            </button>
        
                            <button class="flex gap-3 rounded-lg hover:text-white hover:brightness-125 ease-in-out duration-100  hover:bg-[#6f42c2de] text-gray-400 bg-[#252525d6] py-3 px-3 ">
                                <FontAwesomeIcon icon={faBullhorn} className='mt-[6px]' />
                                <h1 class="text-xl">Report Student</h1>
                            </button>
        
                        </form>
                    </div>
        
            }

            {/* main */}
            <main>
                {/* button  */}
                <div onClick={openMenu} class="border-2 h-14 pl-[330px] flex flex-col gap-[1px] pt-5 cursor-pointer">
                    
                    <span class="border  bg-gray-600 w-7 h-[4.2px]"></span>
                    <span class="border bg-gray-600 w-7 h-1"></span>
                    <span class="border bg-gray-600 w-7 h-1"></span>
                </div>
                <Outlet/>

            </main>
        </>
    )
}
export default Sidebar;