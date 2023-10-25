
import { ServiceColaborate, ServiceFooter, ServicePrice, WebsiteProject, WebsiteServiceBanner, WebsiteServiceOffer, WhyUs } from "../../../components/service-detail";
const WebsiteService = () => {
    return (

        <section className="max-w-[1920px] sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-[1920px] mx-auto">
            <WebsiteServiceBanner />
            <ServiceColaborate />
            <WebsiteServiceOffer />
            <WhyUs />
            <WebsiteProject />
            <ServicePrice />
            <ServiceFooter />
        </section>
    );
}

export default WebsiteService