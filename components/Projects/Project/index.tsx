import cn from "classnames";
import styles from "./Project.module.sass";
import Image from "@/components/Image";

type ProjectProps = {
    item: any;
    light?: boolean;
};

const Project = ({ item, light }: ProjectProps) => (
    <div className={styles.project}>
        <div className={cn(styles.inner, { [styles.innerLight]: light })}>
            <div className={styles.preview}>
                <Image
                    src={item.image}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    alt=""
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={cn("h6", styles.title)}>{item.client}</div>
            <div className={styles.description}>{item.title}</div>
            <div className={styles.categories}>
                {item.categories.map((category: any, index: number) => (
                    <div className={styles.category} key={index}>
                        {category}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Project;