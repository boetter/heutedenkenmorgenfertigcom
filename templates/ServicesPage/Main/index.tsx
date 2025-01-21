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
                        Det skal være nemt at få værdi ud af AI
                    </div>
                    <div className={styles.info}>
                    AI kan virke komplekst, og der er nok af eksempler på både hype og mislykkede projekter. Men det behøver ikke at tage flere år at komme i gang. Med den rette tilgang og træning kan I hurtigt se konkrete resultater – uanset hvor langt I er i processen allerede.
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
