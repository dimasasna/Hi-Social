
import { BannerServiceDetail, ServiceColaborate, ServiceFooter, ServiceOffer,  ServiceProject,  ServiceTesti,  ServiceTransform,  ServiceUs } from "../../components/service-detail/branding-identity-visual";
import ServicePrice from "../../components/service-detail/branding-identity-visual/service-prices";
const ServiceDetail = ({t}) => {
    return (

        <section className="max-w-[1920px] sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-[1920px] mx-auto">
            <BannerServiceDetail t={t}/>
            <ServiceColaborate t={t}/>
            <ServiceOffer />
            <ServiceUs />
            <ServiceProject />
            <ServicePrice />
            <ServiceTesti/>
            <ServiceTransform/>
            <ServiceFooter/>
        </section>
    );
}

export default ServiceDetail