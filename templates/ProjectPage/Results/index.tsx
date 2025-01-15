import cn from "classnames";
import styles from "./Results.module.sass";
import { projects } from "@/mocks/projects";

type ResultsProps = {
    projectId: string;
};

const Results = ({ projectId }: ResultsProps) => {
    const project = projects.find((project) => project.id === projectId);

    if (!project || !project.results) {
        return <div>No results available for this project</div>;
    }

    const { achievements, stats } = project.results;

    return (
        <div
            className={cn(
                "section-mb160 section-pd section-black",
                styles.section
            )}
        >
            <div className={"container"}>
                <div className={styles.row}>
                    <div className={cn("label", styles.label)}>RESULTATER</div>
                    <div className={styles.wrap}>
                        <div className={cn("h6", styles.title)}>
                            Følgende resultater blev opnået hos {project.client}
                        </div>
                        <div className={styles.result}>
                            {achievements.map((item, index) => (
                                <div className={styles.box} key={index}>
                                    <div className={cn("label", styles.number)}>
                                        {index < 9 ? `0${index + 1}` : index + 1}
                                    </div>
                                    <div className={styles.content}>{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    {stats.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={cn("h3", styles.value)}>
                                {item.value}
                            </div>
                            <div className={styles.description}>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;