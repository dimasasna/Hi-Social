import { profilUs } from "../../../assets/img"

const ServiceUs = () => {
    return (
        <section className="mt-24 m-12">
            <div className="mx-auto max-w-[1230px] rounded-xl bg-[#008FFF] pb-4">
                <div className="text-white h-52 text-center w-[789px] mx-auto">
                    <h1 className="pt-12 text-[48px] font-bold">Why<span className="text-[#EDC700]"> Work With Us?</span></h1>
                    <p className="leading-loose font-light mt-2 text-[20px]">We have collaborated with various successful businessmen in building branding with our professionals.</p>
                </div>

                <div className="items flex flex-row justify-center gap-10 max-w-6xl mx-auto my-12">
                    <div className="h-[226px] w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Experience</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">With years of experience in branding, we understand what it takes to create a strong brand presence.</p>
                    </div>
                    <div className="h-[226px] w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Creativity</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">Our designers are passionate about creativity and innovation, ensuring your brand stands out in a crowded market.</p>
                    </div>
                    <div className="h-[226px] w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >Client Success</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">We measure our success by the success of our clients. Check out our portfolio to see the brands weve transformed.</p>
                    </div>
                </div>

                <div className="h-[131px] w-[580px] border rounded-[20px] bg-white mx-auto mb-12 shadow-2xl">
                    <div className="grid grid-cols-3  gap-2">
                        <div className="flex justify-center col-span-2 m-4 border-r-2 ">
                            <img src={profilUs} alt="" />
                        </div>
                        <div className="text-center mr-4 mt-2">
                            <h1 className="text-[50px] font-bold text-[#008FFF]">50+</h1>
                            <p className="font-semibold">Meet Our Profesional</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceUs