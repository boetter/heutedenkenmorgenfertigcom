import Link from "next/link";
import cn from "classnames";
import styles from "./Services.module.sass";
import Icon from "@/components/Icon";

import { ServicesType } from "@/types/index";

type ServicesProps = {
    items: ServicesType[];
};

const Services = ({ items }: ServicesProps) => (
    <div className={cn("section-mb144", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>PRIMÆRE YDELSER</div>
            <div className={cn("h7", styles.info)}>
            Jeg understøtter dine kolleger i en kortere periode for at træne dem eller bygge prototyper.
            </div>
            <div className={styles.list}>
                {items.slice(0, 5).map((service, index) => (
                    <Link
                        className={styles.item}
                        key={service.id}
                        href={`/ydelser/${service.id}`}
                    >
                        <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={styles.title}>{service.title}</div>
                        <div className={styles.arrow}>
                            <Icon name="arrow-up-right" />
                        </div>
                    </Link>
                ))}
            </div>
            <Link className={cn("button", styles.button)} href="/services">
                LÆS MERE OM YDELSER
            </Link>
        </div>
    </div>
);

export default Services;
