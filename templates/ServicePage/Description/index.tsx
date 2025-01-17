import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

import { services } from "@/mocks/services";

type DescriptionProps = {
    id: string;
};

const Description = ({ id }: DescriptionProps) => {
    const service = services.find((service) => service.id === id);

    if (!service || !service.description) {
        return <div>No description available for this service</div>;
    }

    const { title, content, buttonText, buttonLink } = service.description;

    return (
        <div className={cn("section-mb160", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={cn("h5", styles.title)}>{title}</div>
                <div className={styles.wrap}>
                    <div className={styles.content}>{content}</div>
                    <Link className={cn("button", styles.button)} href={buttonLink}>
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Description;