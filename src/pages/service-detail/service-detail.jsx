
import { BannerServiceDetail, ServiceColaborate, ServiceOffer,  ServiceProject,  ServiceUs } from "../../components/service-detail/banner-service-detail";
const ServiceDetail = ({t}) => {
    return (

        <section className="max-w-[1920px] sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-[1920px] mx-auto">
            <BannerServiceDetail t={t}/>
            <ServiceColaborate t={t}/>
            <ServiceOffer />
            <ServiceUs />
            <ServiceProject />
        </section>
    );
}

export default ServiceDetail