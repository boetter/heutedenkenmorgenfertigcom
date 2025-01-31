import Layout from "@/components/Layout";
import Main from "./Main";
import Description from "./Description";
import Services from "./Services";
import Projects from "@/components/Projects";

import { services } from "@/mocks/services";
import { projects } from "@/mocks/projects";

const ServicesPage = () => {
    return (
        <Layout>
            <Main />
            <Description />
            <Services items={services} />
            <Projects
                className="section-pd"
                title="Erfaring fra en lang række projekter"
                label="SENESTE PROJEKTER"
                items={projects}
                viewItem={4}
                viewAll="UDFORSK PROJEKTER"
                dark
            />
        </Layout>
    );
};

export default ServicesPage;