import { serviceProject1, serviceProject2, serviceProject3, serviceProject4, serviceProject5 } from "../../../assets/img"

const ServiceProject = () => {
    return (
        <section className="mx-4 h-full mt-20">
            <div className=" h-full max-w-[1230px] mx-auto">
                <div className="flex flex-row flex-wrap max-w-full justify-center lg:justify-between">
                    <div className="max-w-[789px] ">
                        <h1 className="text-[32px] lg:text-[38px] font-bold"><span className="text-[#008FFF]">Our Project</span> Have Done</h1>
                    </div>
                    <div className="flex max-w-full items-center mt-2 md:mt-0 px-5 lg:px-0">
                        <button className=" m-2 w-[120px] btn-blue shadow-3xl rounded-full shadow-blue-400 text-[9px] lg:text-[16px]">Logo Design</button>
                        <button className="m-2 w-[160px] btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-light text-[9px] lg:text-[16px]">Branding Strategy</button>
                        <button className="m-2 text-[9px]  w-[150px] btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-light lg:text-[16px]">Visual Identity</button>
                    </div>
                </div>
                <div className="h-full mt-2 md:mt-10 flex flex-wrap  justify-center items-center gap-4">
                    <div className=" border w-[395px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={serviceProject1} alt="Service Project 1" />
                        </div>
                        <div className="flex justify-end h-12">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                        </div>
                    </div>
                    <div className=" w-[395px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={serviceProject2} alt="Service Project 2" />
                        </div>
                        <div className="flex justify-end h-12">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                        </div>
                    </div>
                    <div className="w-[395px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={serviceProject3} alt="Service Project 3" />
                        </div>
                        <div className="flex justify-end h-12">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                        </div>
                    </div>
                    <div className="w-[395px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={serviceProject4} alt="Service Project 4" />
                        </div>
                        <div className="flex justify-end h-12">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                        </div>
                    </div>
                    <div className="w-[395px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={serviceProject5} alt="Service Project 5" />
                        </div>
                        <div className="flex justify-end h-12">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceProject