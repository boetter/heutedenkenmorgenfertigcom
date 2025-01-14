import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

const images = [
    "/images/services/service-photo-1.jpg",
    "/images/services/service-photo-2.jpg",
    "/images/services/service-photo-3.jpg",
    "/images/services/service-photo-4.jpg",
    "/images/services/service-photo-5.jpg",
    "/images/services/service-photo-6.jpg",
    "/images/services/service-photo-7.jpg",
    "/images/services/service-photo-8.jpg",
];

type MainProps = {};

const Main = ({}: MainProps) => {
    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                        Det skal være nemt at få værdi ud af AI.
                    </div>
                    <div className={styles.info}>
                        Det er ofte alt for besværligt at komme i gang med AI. Jeg har sammensat mine ydelser på en sådan måde at du relativt gnidnigsfrit kan få værdi ud af samarbejdet her og nu – og ikke først om flere år.
                    </div>
                </div>
            </div>
            <div className={cn("section-mb160", styles.gallery)}>
                <div className={styles.images}>
                    {images.map((image, index) => (
                        <div className={cn("image", styles.image)} key={index}>
                            <Image
                                src={image}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                                alt=""
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Main;
