import { pagination, serviceTestiProfil } from "../../../assets/img"

import 'swiper/css';

const SliderTesti = () => {
    return (
        <section className="font-plus-jakarta-sans">
            <div className="w-full h-full bg-[#B0DCFF] pb-12">
                <div className="max-w-[800px] mx-auto text-[30px] md:text-[50px] text-[#002B44] font-bold text-center pt-14">
                    <h1>Client Success Stories</h1>
                </div>
                <div className=" max-w-[1230px] flex flex-row  h-full w-full justify-center mx-auto gap-10 mt-12 px-6">
                    <div className=" bg-white rounded-[20px] h-[300px] w-[600px] flex flex-col p-8">
                        <div className="flex ">
                        <img className=" rounded-full " src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4  justify-center">
                            <h1 className="md:text-[30px] text-[28px] text-[#008FFF] font-bold">John</h1>
                            <h2 className="md:text-[18px] text-[16px] font-thin">CEO, XYZ Company</h2>
                        </div>
                        </div>
                        <div className="mt-6">
                            <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                        </div>
                    </div>
                    <div className=" bg-white rounded-[20px] h-[300px] w-[600px] flex flex-col p-8 hidden lg:block">
                        <div className="flex ">
                        <img className=" rounded-full " src={serviceTestiProfil} alt="" />
                        <div className="flex flex-col w-full pl-4  justify-center">
                            <h1 className="text-[30px] text-[#008FFF] font-bold">John</h1>
                            <h2 className="text-[18px] font-thin">CEO, XYZ Company</h2>
                        </div>
                        </div>
                        <div className="mt-6">
                            <p>Working with HiSocial was a game-changer for our brand. Their logo design and branding strategy catapulted our business to new heights.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex justify-center mt-12">
                    <img src={pagination} alt="" />
                </div>
            </div>
        </section>

    )
}

export default SliderTesti