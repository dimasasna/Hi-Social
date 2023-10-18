import { profilUs } from "../../../assets/img"

const ServiceUs = () => {
    return (
        <section className="mt-24 m-12">
            <div className="h-[710px] m-20 rounded-xl bg-[#008FFF]">
                <div className="text-white h-52 text-center w-[689px] mx-auto">
                    <h1 className="pt-12 text-[48px] font-bold">Why <span className="text-[#EDC700]">Work With Us?</span></h1>
                    <p className="leading-loose font-light mt-2 text-[20px]">We have collaborated with various successful businessmen in building branding with our professionals.</p>
                </div>

                <div className="grid grid-cols-3 gap-0 mt-1 ml-7 mr-16">
                    <div className="m-12 h-[226px] w-[335px] border rounded-[20px] bg-white shadow-xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Experience</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">With years of experience in branding, we understand what it takes to create a strong brand presence.</p>
                    </div>
                    <div className="m-12 h-[226px] w-[335px] border rounded-[20px] bg-white shadow-xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Creativity</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">Our designers are passionate about creativity and innovation, ensuring your brand stands out in a crowded market.</p>
                    </div>
                    <div className="m-12 h-[226px] w-[335px] border rounded-[20px] bg-white shadow-xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Client Success</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">We measure our success by the success of our clients. Check out our portfolio to see the brands weve transformed.</p>
                    </div>
                </div>

                <div className="h-[131px] w-[580px] border rounded-[20px] bg-white mx-auto mb-24 shadow-xl">
                    <div className="grid grid-cols-3  gap-2">
                        <div className="flex justify-center col-span-2 m-4 border-r-2 ">
                            <img src={profilUs} alt="" />
                        </div>
                        <div className="text-center mr-4 mt-2">
                            <h1 className="text-[50px] font-bold text-[#008FFF]">50+</h1>
                            <p className="font-bold">Meet Our Professional</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceUs