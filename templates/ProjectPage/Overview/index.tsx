import cn from "classnames";
import styles from "./Overview.module.sass";

import { projects } from "@/mocks/projects";

type OverviewProps = {
    id: any;
};

const Overview = ({ id }: OverviewProps) => {
    const project = projects.find((project) => project.id === id);

    return project ? (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>KORT FORTALT</div>
            <div className={styles.row}>
                <div className={cn("h7", styles.title)}>
                {project.overview1}
                </div>
                <div className={styles.content}>
                    <p>
                    {project.overview2}
                    </p>
                    <p>
                    {project.overview3}
                    </p>
                </div>
            </div>
        </div>
    </div>
    ) : null;
};


export default Overview;
