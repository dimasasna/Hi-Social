const ServiceProject = () => {
    return (
        <section className="m-12">
            <div className="m-20">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className="text-[50px] font-bold"><span className="text-[#008FFF]">Our Project</span> Have Done</h1>
                    </div>
                    <div className="flex justify-end items-center">
                        <button className=" m-2 w-[120px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Logo Design</button>
                        <button className="m-2 w-[160px] btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-extralight">Branding Strategy</button>
                        <button className="m-2 w-[150px] btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-extralight">Visual Identity</button>
                    </div>
                </div>
                    <div className="h-[700px] w-full  mt-10 flex flex-wrap justify-center">
                        <div className="m-4 w-[387px] h-[307px] bg-white rounded-[20px] shadow-xl">
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="m-4 w-[387px] h-[307px] bg-white rounded-[20px] shadow-xl"></div>
                        <div className="m-4 w-[387px] h-[307px] bg-white rounded-[20px] shadow-xl"></div>
                        <div className="m-4 w-[387px] h-[307px] bg-white rounded-[20px] shadow-xl"></div>
                        <div className="m-4 w-[387px] h-[307px] bg-white rounded-[20px] shadow-xl"></div>
                    </div>
            </div>
        </section>
    )
}

export default ServiceProject