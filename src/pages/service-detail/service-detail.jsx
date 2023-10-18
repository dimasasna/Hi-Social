
import { BannerServiceDetail, ServiceColaborate, ServiceOffer,  ServiceProject,  ServiceUs } from "../../components/service-detail/banner-service-detail";
const ServiceDetail = ({t}) => {
    return (

        <section >
            <BannerServiceDetail t={t}/>
            <ServiceColaborate t={t}/>
            <ServiceOffer />
            <ServiceUs />
            <ServiceProject />
        </section>
    );
}

export default ServiceDetail