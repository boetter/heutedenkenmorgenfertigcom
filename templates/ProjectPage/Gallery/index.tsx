import cn from "classnames";
import styles from "./Gallery.module.sass";
import Image from "@/components/Image";
import { projects } from "@/mocks/projects";

type GalleryProps = {
    id: string;
};

const Gallery = ({ id }: GalleryProps) => {
    const project = projects.find((project) => project.id === id);

    if (!project || !project.gallery) {
        return <div>No gallery available for this project</div>;
    }

    return (
        <div className={cn("section-mb160", styles.section)}>
            <div className={"container"}>
                <div className={styles.gallery}>
                    {project.gallery.map((image, index) => (
                        <div className={cn("image", styles.image)} key={index}>
                            <Image
                                src={image}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;