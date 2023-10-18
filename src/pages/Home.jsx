import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGraduate,faRightLong,faUserGroup,faBookOpen,faAddressBook} from '@fortawesome/free-solid-svg-icons'

function Home(){
    return(
        <main>
            
            <div className="px-5 flex flex-col gap-5">
                {/* 1stpart */}
                <div className="flex justify-between mt-3">
                    
                    <div>
                        <h1 className="text-3xl text-slate-600 ">Administrative Dashboard</h1>
                    </div>
                    <div>
                        <h2 className="text-base text-gray-700   mt-1"><span className="text-[#6f42c2] font-semibold">Home</span> &nbsp; /  &nbsp; Administrative Dashboard</h2>
                    </div>
                </div> 
                {/* banner */}
                <div className='flex justify-center gap-10'>
                    {/* 1banner */}
                    <div className="border bg-[#6f42c2] w-72 h-48 rounded-lg">
                        <div className='flex justify-around mt-8'>
                            <div className='flex flex-col gap-3 pl-4'>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold text-5xl">07</h3>
                                </div>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold relative right-4">Total Students</h3>
                                </div>
                             </div>

                            <div>
                            <FontAwesomeIcon icon={faUserGraduate} className='text-8xl opacity-30'/>
                            </div>
                        </div>
                        <div className='h-12 px-4 border-t mt-4  '>
                             <button className=' w-[110px] flex gap-2  relative left-2 rounded-3xl top-2 '>
                                <h3 className="text-slate-200 brightness-150 font-san whitespace-wrap tracking-wider ">More Info</h3>
                                <FontAwesomeIcon icon={faRightLong} className='text-white mt-[6px] ' />
                             </button>
                        </div>
                    </div>
                    {/* 2banner */}
                    <div className="border bg-red-600 w-72 h-48 rounded-lg">
                        <div className='flex justify-around mt-8'>
                            <div className='flex flex-col gap-3 pl-4'>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold text-5xl">21</h3>
                                </div>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold relative right-4">Total Staff</h3>
                                </div>
                             </div>

                            <div>
                            <FontAwesomeIcon icon={faUserGroup } className='text-8xl opacity-30'/>
                            </div>
                        </div>
                        <div className='h-12 px-4 border-t mt-4  '>
                             <button className=' w-[110px] flex gap-2  relative left-2 rounded-3xl top-2 '>
                                <h3 className="text-slate-200 brightness-150 font-san whitespace-wrap tracking-wider ">More Info</h3>
                                <FontAwesomeIcon icon={faRightLong} className='text-white mt-[6px] ' />
                             </button>
                        </div>
                    </div>
                    {/* 3banner */}
                    <div className="border bg-yellow-500 w-72 h-48 rounded-lg">
                        <div className='flex justify-around mt-8'>
                            <div className='flex flex-col gap-3 pl-4'>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold text-5xl">07</h3>
                                </div>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold relative right-4">Total Subject</h3>
                                </div>
                             </div>

                            <div>
                            <FontAwesomeIcon icon={faBookOpen} className='text-8xl opacity-30'/>
                            </div>
                        </div>
                        <div className='h-12 px-4 border-t mt-4  '>
                             <button className=' w-[110px] flex gap-2  relative left-2 rounded-3xl top-2 '>
                                <h3 className="text-slate-200 brightness-150 font-san whitespace-wrap tracking-wider ">More Info</h3>
                                <FontAwesomeIcon icon={faRightLong} className='text-white mt-[6px] ' />
                             </button>
                        </div>
                    </div>
                     {/* 4banner */}
                    <div className="border bg-green-500 w-72 h-48 rounded-lg">
                        <div className='flex justify-around mt-8'>
                            <div className='flex flex-col gap-3 pl-4'>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold text-5xl">06</h3>
                                </div>
                                <div>
                                    <h3 className="text-slate-200 brightness-150 font-semibold relative right-4">Total Course</h3>
                                </div>
                             </div>

                            <div>
                            <FontAwesomeIcon icon={faAddressBook} className='text-8xl opacity-30'/>
                            </div>
                        </div>
                        <div className='h-12 px-4 border-t mt-4'>
                             <button className=' w-[110px] flex gap-2  relative left-2 rounded-3xl top-2 '>
                                <h3 className="text-slate-200 brightness-150 font-san whitespace-wrap tracking-wider ">More Info</h3>
                                <FontAwesomeIcon icon={faRightLong} className='text-white mt-[6px] ' />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    )
}
export default Home;