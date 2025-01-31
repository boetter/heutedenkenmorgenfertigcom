import cn from "classnames";
import styles from "./Content.module.sass";

import { projects } from "@/mocks/projects";

type ContentProps = {
    id: any;
};

const Content = ({ id }: ContentProps) => {
    const project = projects.find((project) => project.id === id);

    return project ? (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={styles.row}>
                <div className={styles.content}>
                    <p>
                    {project.beskriv1}
                    </p>
                    <p>
                    {project.beskriv2}
                    </p>
                </div>
                <div className={styles.content}>
                    <p>
                    {project.beskriv3}
                    </p>
                    <p>
                    {project.beskriv4}
                    </p>
                </div>
            </div>
        </div>
    </div>
    ) : null;
};


export default Content;
