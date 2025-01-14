import cn from "classnames";
import styles from "./Team.module.sass";
import Item from "./Item";

import { TeamType } from "@/types/index";

type TeamProps = {
    items: TeamType[];
};

const Team = ({ items }: TeamProps) => (
    <div
        className={cn("section-mb160 section-pd section-black", styles.section)}
    >
        <div className={"container"}>
            <div className={cn("label", styles.label)}>JEG ER IKKE ALENE</div>
            <div className={cn("h5", styles.title)}>
                Jeg trækker på mit netværk når der er brug for det.
            </div>
            <div className={styles.list}>
                {items.map((man) => (
                    <Item className={styles.item} item={man} key={man.id} />
                ))}
            </div>
        </div>
    </div>
);

export default Team;
