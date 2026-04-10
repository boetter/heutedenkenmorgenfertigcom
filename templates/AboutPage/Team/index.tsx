import cn from "classnames";
import styles from "./Team.module.sass";
import Image from "@/components/Image";
import Socials from "@/components/Socials";

import { TeamType } from "@/types/index";

type TeamProps = {
    items: TeamType[];
};

const Team = ({ items }: TeamProps) => {
    const jacob = items[0];

    return (
        <div
            className={cn("section-mb160 section-pd section-black", styles.section)}
        >
            <div className={"container"}>
                <div className={cn("label", styles.label)}>DU FÅR MIG — OG INGEN ANDRE</div>
                <div className={styles.inner}>
                    <div className={styles.preview}>
                        <Image
                            src={jacob.photo}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 33.33vw"
                            alt={jacob.title}
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={cn("h5", styles.name)}>{jacob.title}</div>
                        <div className={styles.position}>{jacob.position}</div>
                        <div className={styles.description}>{jacob.description}</div>
                        <Socials items={jacob.socials} small />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
