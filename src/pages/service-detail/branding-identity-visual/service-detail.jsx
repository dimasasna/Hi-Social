import { BannerServiceDetail, ServiceColaborate, ServiceFooter, ServiceOffer,  ServicePrice,  ServiceProject,  ServiceTesti,  ServiceTransform,  ServiceUs } from "../../../components/service-detail";
const ServiceDetail = ({t}) => {
    return (
        
        <section className="max-w-[1920px] sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-[1920px] mx-auto">
            <BannerServiceDetail t={t}/>
            <ServiceColaborate t={t}/>
            <ServiceOffer t={t}/>
            <ServiceUs t={t}/>
            <ServiceProject t={t}/>
            <ServicePrice t={t}/>
            <ServiceTesti t={t}/>
            <ServiceTransform t={t}/>
            <ServiceFooter t={t}/>
        </section>
    );
}

export default ServiceDetail