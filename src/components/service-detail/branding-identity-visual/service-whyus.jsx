import { profilUs } from "../../../assets/img"

const ServiceUs = () => {
    return (
        <section className="mt-24 lg:m-5 px-4">
            <div className="mx-auto max-w-[1230px] rounded-xl bg-[#008FFF] pb-4">
                <div className="text-white h-52 text-center max-w-[789px] mx-auto p-6">
                    <h1 className="pt-5 lg:pt-12 text-[32px] lg:text-[42px] font-bold">Why<span className="text-[#EDC700]"> Work With Us?</span></h1>
                    <p className="leading-loose font-light mt-2 text-[18px] lg:text-[20px]">We have collaborated with various successful businessmen in building branding with our professionals.</p>
                </div>

                <div className="items flex flex-row justify-center flex-wrap gap-10 max-w-6xl mx-auto md:my-12 my-4 p-6 lg:p-0">
                    <div className="h-[226px] max-w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Experience</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">With years of experience in branding, we understand what it takes to create a strong brand presence.</p>
                    </div>
                    <div className="h-[226px] w-[335px]  border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Creativity</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">Our designers are passionate about creativity and innovation, ensuring your brand stands out in a crowded market.</p>
                    </div>
                    <div className="h-[226px] w-[335px]  border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Client Success</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">We measure our success by the success of our clients. Check out our portfolio to see the brands weve transformed.</p>
                    </div>
                </div>

                <div className="h-full max-w-[350px] lg:max-w-[580px] sm:max-w-[450px] rounded-[20px] bg-white  mb-12 shadow-2xl  flex mx-auto">
                    <div className="grid grid-cols-3  gap-2">
                        <div className="flex items-center justify-center col-span-2 m-4 border-r-2 pr-2">
                            <img className="" src={profilUs} alt="" />
                        </div>
                        <div className="text-center mr-4 mt-2">
                            <h1 className="text-[36px]  lg:text-[50px] font-bold text-[#008FFF]">50+</h1>
                            <p className="font-semibold pb-4 text-[12px] sm:text-[16px]">Meet Our Profesional</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceUs