import { useRef, useState } from "react";
import Layout from "@/components/Layout";
import Listing from "@/components/Listing";
import Projects from "@/components/Projects";
import Companies from "@/components/Companies";

import { linksProject } from "@/mocks/links";
import { projects } from "@/mocks/projects";
import { companies } from "@/mocks/companies";

const ProjectsPage = () => {
    const scrollToRef = useRef<any>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all-projects");

    const filteredProjects = activeFilter === "all-projects"
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter));

    return (
        <Layout>
            <Listing
                title="Erfaring fra 100+ projekter de seneste 20 år"
                links={linksProject}
                scrollToRef={scrollToRef}
                onFilter={setActiveFilter}
            />
            <Projects
                className="section-mb160 section-separator"
                items={filteredProjects}
                more
                scrollToRef={scrollToRef}
            />
            <Companies
                className="section-mb160"
                title="Erfaring fra over 100 tidligere projekter"
                items={companies}
            />
        </Layout>
    );
};

export default ProjectsPage;
