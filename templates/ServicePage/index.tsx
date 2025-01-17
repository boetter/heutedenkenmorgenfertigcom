import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Preview from "@/components/Preview";
import Plans from "./Plans";
import Gallery from "@/components/Gallery";
import Description from "./Description";
import Companies from "@/components/Companies";
import Projects from "@/components/Projects";

import { companiesLight } from "@/mocks/companies";
import { projects } from "@/mocks/projects";
import { services } from "@/mocks/services";

const ServicePage = ({ id }: any) => {
    const service = services.find((service) => service.id === id);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <Layout>
            <Main id={id} />
            <Details id={id} />
            <Preview className="section-mb120" video={service.video} />
            <Plans id={id} />
            <Gallery images={service.gallery} />
            <Preview className="section-mb160" image={service.previewImage} />
            <Description id={id} />
            <div className="section-pd section-black">
                <Companies
                    className="section-mb120 section-separator"
                    title="Erfaring fra en lang række tidligere projekter de seneste 20 år"
                    items={companiesLight}
                />
                <Projects
                    title="Læs mere om udvalgte tidligere projekter"
                    label="CASES"
                    items={projects}
                    viewItem={4}
                    viewAll="VIS FLERE PROJEKTER"
                    dark
                />
            </div>
        </Layout>
    );
};

export default ServicePage;