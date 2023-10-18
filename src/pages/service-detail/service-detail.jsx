
import { BannerServiceDetail, ServiceColaborate, ServiceOffer,  ServiceProject,  ServiceUs } from "../../components/service-detail/banner-service-detail";
import ServicePrice from "../../components/service-detail/banner-service-detail/service-prices";
const ServiceDetail = ({t}) => {
    return (

        <section className="max-w-[1920px] sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-[1920px] mx-auto">
            <BannerServiceDetail t={t}/>
            <ServiceColaborate t={t}/>
            <ServiceOffer />
            <ServiceUs />
            <ServiceProject />
            <ServicePrice />
        </section>
    );
}

export default ServiceDetail