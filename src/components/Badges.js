import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Badges = () => {
    return (
        <>
            <div className='badges-container gap-12'>
                <div className='flex flex-wrap justify-center gap-6 mt-12 mb-12 '>
                    <div className="hexagon text-black">
                        <h4 className='flex justify-center text-black font-bold text-3xl'>aws <BsFillPatchCheckFill className='mt-3 text-orange-500 text-2xl' size={20}/>
                        </h4>
                        <p className='text-center'>Certified</p>
                        <h4 className='flex justify-center text-black font-bold text-'>cloud practitioner</h4>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center md:gap-12 mt-12 mb-12'>
                    <div className="hexagon-green text-black mt-5 small-on-mobile">
                    <h4 className='flex justify-center text-black font-bold text-3xl'>aws <BsFillPatchCheckFill className='mt-3 text-orange-500 text-2xl' size={20}/>
                        </h4>
                        <p className='text-center'>Certified</p>
                        <h4 className='text-center text-black font-bold text-'>associate level certifications</h4>
                    </div>
                    <div className="hexagon-green text-black mt-5 small-on-mobile">
                    <h4 className='flex justify-center text-black font-bold text-3xl'>aws <BsFillPatchCheckFill className='mt-3 text-orange-500 text-2xl' size={20}/>
                        </h4>
                        <p className='text-center'>Certified</p>
                        <h4 className='text-center text-black font-bold text-sm'>professional solutions Architect certification</h4>
                    </div>
                </div>

                <div className='flex flex-wrap gap-y-10 justify-center md:gap-20 mt-12 mb-12'>
                    <div className="hexagon-blue text-black mt-5 small-on-mobile">
                    <h4 className='flex justify-center text-black font-bold text-3xl'>aws <BsFillPatchCheckFill className='mt-3 text-orange-500 text-2xl' size={20}/>
                        </h4>
                        <p className='text-center'>Certified</p>
                        <h4 className='text-center text-black font-bold text-'>security specialty certification</h4>
                    </div>
                    <div className="hexagon-blue text-black mt-5 small-on-mobile">
                    <h4 className='flex justify-center text-black font-bold text-3xl'>aws <BsFillPatchCheckFill className='mt-3 text-orange-500 text-2xl' size={20}/>
                        </h4>
                        <p className='text-center'>Certified</p>
                        <h4 className='text-center text-black font-bold text-'>Solutions Architect Associate</h4>
                    </div>
                    <div className="hexagon-blue text-black mt-5 small-on-mobile">
                         <h4 className='flex justify-center text-black font-bold text-3xl'>aws <BsFillPatchCheckFill className='mt-3 text-orange-500 text-2xl' size={20}/>
                        </h4>
                        <p className='text-center'>Certified</p>
                        <h4 className='text-center text-black font-bold text-'>Solutions Architect Associate</h4>
                    </div>
                </div>
                </div>
      </>

    )
}

export default Badges