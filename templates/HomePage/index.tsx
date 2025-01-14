import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Preview from "@/components/Preview";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Advantages from "./Advantages";
import Projects from "@/components/Projects";
import Reviews from "./Reviews";
import Companies from "@/components/Companies";
import Blogs from "./Blogs";

import { services } from "@/mocks/services";
import { projects } from "@/mocks/projects";
import { reviews } from "@/mocks/reviews";
import { companies } from "@/mocks/companies";
import { blogs } from "@/mocks/blogs";

const HomePage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Preview
                className="section-mb120"
                video="/videos/video-1.mp4"
                wide
            />
            <AboutUs scrollToRef={scrollToRef} />
            <Services items={services} />
            <Advantages />
            <Projects
                className="section-mb160 section-separator"
                title="AI kan gøre en kæmpe forskel, hvis du tør sætte det fri"
                label="PROJEKTER"
                items={projects}
                viewItem={4}
                viewAll="SE TIDLIGERE PROJEKTER"
            />
            <Reviews items={reviews} />
            <Companies
                className="section-mb160"
                info="Erfaring fra over 100 tidligere projekter"
                items={companies}
            />
            <Blogs items={blogs} />
        </Layout>
    );
};

export default HomePage;
