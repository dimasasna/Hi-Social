import { serviceTestiProfil } from "../../../assets/img"

const ServiceTesti = () => {
    return (
        <section className="bg-[#008FFF] h-full w-full pb-10 px-4 lg:px-0 font-plus-jakarta-sans">
            <div className="mx-auto pt-16  max-w-[1230px] flex justify-center xl:justify-start">
                <h1 className="lg:text-[50px] text-[42px] font-bold text-white"><span className="text-[#002B44] border-b-4 pb-2">What</span> Client Say</h1>
            </div>
            <div className=" my-12 flex flex-row flex-wrap gap-10 justify-center items-center  max-w-[1230px] mx-auto ">
                <div className="xl:w-[350px] xl:h-[258px] w-[435px] h-full rounded-[20px] bg-white shadow-lg flex flex-col items-center p-4">
                    <div className="w-[280px] h-[108px] xl:w-[284px] xl:h-[80px] mt-4 rounded-[20px] p-4 bg-[#008FFF] flex flex-row items-center text-white lg:ml-4">
                        <img className="border-8 border-white rounded-full lg:-ml-12 -ml-10 h-28" src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4 -mt-2">
                            <h1 className="text-[30px] xl:text-[25px] font-bold">John</h1>
                            <h2 className="text-[18px] xl:text-[14px] font-thin">CEO, XYZ Company</h2>
                        </div>
                    </div>
                    <div className="mt-6 p-2 text-[16px] xl:text-[16px]">
                        <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                    </div>
                </div>
                
                <div className=" w-[435px]  h-fulllg:h-[320px] rounded-[20px] bg-white shadow-lg flex  flex-col items-center p-4">
                    <div className="w-[280px] h-[108px] xl:w-[330px] xl:h-[108px] mt-4 rounded-[20px] p-4 bg-[#008FFF] flex flex-row items-center text-white">
                        <img className="border-8 border-white rounded-full -ml-10 xl:h-36 h-28" src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4 -mt-2">
                            <h1 className="text-[30px] font-bold">John</h1>
                            <h2 className="text-[18px] font-thin">CEO, XYZ Company</h2>
                        </div>
                    </div>
                    <div className="mt-6 p-2 text-[16px] lg:text-[20px] font-normal">
                        <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                    </div>
                </div>
                <div className="xl:w-[350px] xl:h-[258px] w-[435px] h-full rounded-[20px] bg-white shadow-lg flex  flex-col items-center p-4">
                    <div className="w-[280px] h-[108px] xl:w-[284px] xl:h-[80px] mt-4 rounded-[20px] p-4 bg-[#008FFF] flex flex-row items-center text-white lg:ml-4">
                        <img className="border-8 border-white rounded-full lg:-ml-12 -ml-10 h-28" src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4 -mt-2">
                            <h1 className="text-[30px] xl:text-[25px] font-bold">John</h1>
                            <h2 className="text-[18px] xl:text-[14px] font-thin">CEO, XYZ Company</h2>
                        </div>
                    </div>
                    <div className="mt-6 p-2 text-[16px] xl:text-[16px]">
                        <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceTesti