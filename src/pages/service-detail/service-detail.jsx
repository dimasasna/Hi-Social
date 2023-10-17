
import { BannerServiceDetail, ServiceColaborate } from "../../components/service-detail/banner-service-detail";
const ServiceDetail = ({t}) => {
    return (

        <section >
            <BannerServiceDetail t={t}/>
            <ServiceColaborate t={t}/>
        </section>
    );
}

export default ServiceDetail