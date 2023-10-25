const WebsiteServiceOffer = () => {
    return (
        <section className="mt-20 md:mb-32 font-plus-jakarta-sans">
            <div className="max-w-[500px] mx-auto text-center text-[#002B44] md:text-[50px] text-[38px] font-bold">
                <h1>What We Offers?</h1>
            </div>
            <div className="max-w-[1230px] mx-auto h-full flex flex-row  mt-10 flex-wrap lg:justify-between justify-center gap-8 lg:gap-0 p-6 lg:p-0 ">
                <div className="w-[360px] h-[409px]  rounded-[20px] shadow-2xl relative">
                    <div className="h-[117px] w-full bg-[#008FFF] rounded-t-[20px] text-white p-6">
                        <h1>Icons</h1>
                        <h2 className="font-bold text-[25px] mt-3">Website Development</h2>
                    </div>
                    <div className="p-6  inset-0  items-center leading-loose font-light flex flex-col">
                        <p className="h-[200px]">Boost your website and get more engagement from your customers. We create responsive, attention-grabbing websites that leave a lasting impression.</p>
                        <div className="w-full justify-center flex">
                        <button className="flex items-center justify-center font-normal btn-blue rounded-full text-[16px] h-[32px] w-[140px]">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="w-[360px] h-[409px]  rounded-[20px] shadow-2xl relative">
                    <div className="h-[117px] w-full bg-[#008FFF] rounded-t-[20px] text-white p-6">
                        <h1>Icons</h1>
                        <h2 className="font-bold text-[25px] mt-3">System & Integration</h2>
                    </div>
                    <div className="p-6  inset-0  items-center leading-loose font-light flex flex-col">
                        <p className="h-[200px]">Streamline your business operations with our system development and integration solutions. From CRM systems to e-commerce platforms, we tailor solutions that enhance efficiency and productivity.</p>
                        <div className="w-full justify-center flex">
                        <button className="flex items-center justify-center font-normal btn-blue rounded-full text-[16px] h-[32px] w-[140px]">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="w-[360px] h-[409px]  rounded-[20px] shadow-2xl relative">
                    <div className="h-[117px] w-full bg-[#008FFF] rounded-t-[20px] text-white p-6">
                        <h1>Icons</h1>
                        <h2 className="font-bold text-[25px] mt-3">Maintenance & Support</h2>
                    </div>
                    <div className="p-6  inset-0  items-center leading-loose font-light flex flex-col">
                        <p className="h-[200px]">We dont  just build and leave. Our team provides ongoing maintenance and support to keep your website and systems running smoothly. Count on us for updates, security, and troubleshooting.</p>
                        <div className="w-full justify-center flex">
                        <button className="flex items-center justify-center font-normal btn-blue rounded-full text-[16px] h-[32px] w-[140px]">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebsiteServiceOffer