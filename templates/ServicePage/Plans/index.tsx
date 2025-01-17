import cn from "classnames";
import styles from "./Plans.module.sass";

import { services } from "@/mocks/services";

type PlansProps = {
    id: string;
};

const Plans = ({ id }: PlansProps) => {
    const service = services.find((service) => service.id === id);

    if (!service || !service.plans) {
        return <div>No plans available for this service</div>;
    }

    const { title, list } = service.plans;

    return (
        <div className={cn("section-mb120", styles.section)}>
            <div className={"container"}>
                <div className={cn("h5", styles.title)}>{title}</div>
                <div className={styles.list}>
                    {list.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={cn("label", styles.number)}>
                                {index < 9 ? `0${index + 1}` : index + 1}
                            </div>
                            <div className={cn("h7", styles.subtitle)}>
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

export default Plans;