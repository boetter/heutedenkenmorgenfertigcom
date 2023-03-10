import type { NextPage } from "next";
import { useRouter } from "next/router";
import ProjectPage from "@/templates/ProjectPage";

const Project: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <ProjectPage id={id} />;
};

export default Project;
