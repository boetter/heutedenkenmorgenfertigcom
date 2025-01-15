import Layout from "@/components/Layout";
import Main from "./Main";
import Overview from "./Overview";
import Gallery from "./Gallery";
import Review from "@/components/Review";
import Projects from "@/components/Projects";
import Content from "./Content";
import Results from "./Results";
import Screenshots from "./Screenshots";
import Preview from "@/components/Preview";

import { projects } from "@/mocks/projects";

const ServicePage = ({ id }: any) => {
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    const reviewAuthor = project.reviewAuthor;

    return (
        <Layout>
            <Main id={id} />
            <Overview id={id} />
            <Gallery id={id} />
            <Review className="section-mb160" review={reviewAuthor} />
            <Preview
                className="section-mb120"
                video={project.video} // Dynamisk video
                wide
            />
            <Content id={id} />
            <Results projectId={id} />
            <Projects
                className="section-mb160"
                title="Flere cases"
                label="OUR PROJECTS"
                description="Der er kun beskrevet et uddrag af over 100 tidligere projekter."
                items={projects}
                viewItem={2}
                viewAll="VIS ALLE PROJEKTBESKRIVELSER"
            />
        </Layout>
    );
};

export default ServicePage;