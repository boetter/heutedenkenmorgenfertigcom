import cn from "classnames";
import styles from "./Details.module.sass";

import { services } from "@/mocks/services";

type DetailsProps = {
    id: string;
};

const Details = ({ id }: DetailsProps) => {
    const service = services.find((service) => service.id === id);

    if (!service || !service.details) {
        return <div>No details available for this service</div>;
    }

    return (
        <div className={cn("section-mb120", styles.section)}>
            <div className={"container"}>
                <div className={styles.head}>
                    <div className={cn("h5", styles.title)}>
                    {service.detailsHead}
                    </div>
                    <div className={styles.text}>
                    {service.detailsDesc}
                    </div>
                </div>
                <div className={styles.list}>
                    {service.details.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={cn("label", styles.number)}>
                                {index < 9 ? `0${index + 1}` : index + 1}
                            </div>
                            <div className={cn("h6", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details;