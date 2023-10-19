import { serviceTestiProfil } from "../../../assets/img"

const ServiceTesti = () => {
    return (
        <section className="bg-[#008FFF] h-[594px] w-full mb-12">
            <div className="mx-32 pt-16">
                <h1 className="text-[50px] font-bold text-white"><span className="text-[#002B44] border-b-4 pb-2">What</span> Client Say</h1>
            </div>
            <div className=" mx-32 my-12 flex flex-row flex-wrap gap-10 justify-center items-center ">
                <div className="w-[370px] h-[258px] rounded-[20px] bg-white shadow-lg flex  flex-col items-center p-4">
                    <div className="w-[284px] h-[80px] mt-4 rounded-[20px] p-4 bg-[#008FFF] flex flex-row items-center text-white">
                        <img className="border-8 border-white rounded-full -ml-10" src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4 -mt-2">
                            <h1 className="text-[25px] font-bold">John</h1>
                            <h2 className="text-[14px] font-thin">CEO, XYZ Company</h2>
                        </div>
                    </div>
                    <div className="mt-6 p-2">
                        <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                    </div>
                </div>
                
                <div className=" w-[435px] h-[324px] rounded-[20px] bg-white shadow-lg flex  flex-col items-center p-4">
                    <div className="w-[330px] h-[108px] mt-4 rounded-[20px] p-4 bg-[#008FFF] flex flex-row items-center text-white">
                        <img className="border-8 border-white rounded-full -ml-10 h-36" src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4 -mt-2">
                            <h1 className="text-[30px] font-bold">John</h1>
                            <h2 className="text-[18px] font-thin">CEO, XYZ Company</h2>
                        </div>
                    </div>
                    <div className="mt-6 p-2 text-[20px] font-normal">
                        <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                    </div>
                </div>
                <div className="w-[370px] h-[258px] rounded-[20px] bg-white shadow-lg flex  flex-col items-center p-4">
                    <div className="w-[284px] h-[80px] mt-4 rounded-[20px] p-4 bg-[#008FFF] flex flex-row items-center text-white">
                        <img className="border-8 border-white rounded-full -ml-10" src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4 -mt-2">
                            <h1 className="text-[25px] font-bold">John</h1>
                            <h2 className="text-[14px] font-thin">CEO, XYZ Company</h2>
                    </div>
                    </div>
                    <div className="mt-6 p-2">
                        <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceTesti