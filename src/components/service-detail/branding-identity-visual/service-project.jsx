import { serviceProject1, serviceProject2, serviceProject3, serviceProject4, serviceProject5 } from "../../../assets/img"

const ServiceProject = () => {
    return (
        <section className="m-32">
            <div className="">
                <div className="grid grid-cols-2 max-w-[1230px] mx-auto">
                    <div className="">
                        <h1 className="text-[42px] font-bold"><span className="text-[#008FFF]">Our Project</span> Have Done</h1>
                    </div>
                    <div className="flex justify-end items-center">
                        <button className=" m-2 w-[120px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Logo Design</button>
                        <button className="m-2 w-[160px] btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-light">Branding Strategy</button>
                        <button className="m-2 w-[150px] btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-light">Visual Identity</button>
                    </div>
                </div>
                    <div className="h-[700px] w-full  mt-10 flex flex-wrap justify-center">
                        <div className="m-4 w-[387px] h-[327px] bg-white rounded-[20px] shadow-xl">
                            <div>
                                <img src={serviceProject1} alt="Service Project 1" />
                            </div>
                            <div className="flex justify-end h-12">
                                <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            </div>
                        </div>
                        <div className="m-4 w-[387px] h-[327px] bg-white rounded-[20px] shadow-xl">
                            <div>
                                <img src={serviceProject2} alt="Service Project 2" />
                            </div>
                            <div className="flex justify-end h-12">
                                <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            </div>
                        </div>
                        <div className="m-4 w-[387px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                                <img src={serviceProject3} alt="Service Project 3" />
                            </div>
                            <div className="flex justify-end h-12">
                                <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            </div>
                        </div>
                        <div className="m-4 w-[387px] h-[327px] bg-white rounded-[20px] shadow-xl">
                        <div>
                                <img src={serviceProject4} alt="Service Project 4" />
                            </div>
                            <div className="flex justify-end h-12">
                                <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            </div>
                        </div>
                        <div className="m-4 w-[387px] h-[327px] bg-white rounded-[20px] shadow-xl">
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