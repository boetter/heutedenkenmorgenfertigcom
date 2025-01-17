import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

import { services } from "@/mocks/services";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const service = services.find((service) => service.id === id);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <>
            <div
                className={cn(
                    "section-main section-brown section-mb120",
                    styles.section
                )}
            >
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                        {service.title}
                    </div>
                    <div className={cn(styles.content, styles.contentMobile)}>
                        {service.kortforklaring}
                    </div>
                    <div className={styles.row}>
                        <div className={cn("image", styles.image)}>
                            <Image
                                src={service.image}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt={service.title}
                            />
                        </div>
                        <div className={styles.wrap}>
                            <div
                                className={cn(
                                    styles.content,
                                    styles.contentDesktop
                                )}
                            >
                                {service.kortforklaring}
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h7", styles.info)}>
                                    {service.info}
                                </div>
                                <Link
                                    className={cn("button", styles.button)}
                                    href={service.buttonLink}
                                >
                                    {service.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;