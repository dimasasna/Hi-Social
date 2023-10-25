import {  websiteWhyUs } from "../../../assets/img"

const WhyUs = () => {
    return (
        <section className="px-6  lg:px-32 xl:px-0 font-plus-jakarta-sans lg:pb-12 mt-6">
            <div className="relative max-w-[1230px] w-full mx-auto py-10">
                <div className="relative flex  justify-center items-center ">
                    <div className="relative hidden lg:block flex-1 rounded-xl z-10">
                        <img src={websiteWhyUs} alt="gambar paid advertising" />
                    </div>
                    <div className="lg:absolute lg:w-[65%] lg:h-[633px] lg:top-[50%] lg:bottom-[50%]  lg:right-0 px-8 lg:px-10 py-8 lg:py-8 bg-white border  lg:-translate-y-[50%] rounded-xl lg:rounded-xl shadow-2xl z-0">
                        <div className="lg:ml-48 my-7 mr-8 leading-tight  z-20" >
                            <h1 className="lg:text-[32px] text-[28px] leading-tight text-pb-normal-active text-[#008FFF]">Why Choose Us</h1>
                            <p className="mt-4 xl:mt-5 text-[38px] lg:text-[50px] font-bold">We Deliver Increased Oportunities For Your Online Business</p>
                            <p className="leading-loose mt-6">Whether youre a startup looking to establish your digital footprint or an established enterprise seeking to optimize your systems, we have the expertise and solutions to make it happen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs