import Link from "next/link";
import cn from "classnames";
import styles from "./AboutUs.module.sass";

type AboutUsProps = {
    scrollToRef: any;
};

const AboutUs = ({ scrollToRef }: AboutUsProps) => (
    <div className={cn("section-separator section-mb160", styles.section)}>
        <div className={styles.anchor} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={cn("label", styles.label)}>ABOUT US</div>
            <div className={styles.wrap}>
                <div className={cn("h5", styles.title)}>
                    We bring decades of expertise in building things faster.
                </div>
                <ul className={styles.list}>
                    <li>
                        Companies and organizations usually strive for 100%. Perfection in everything they do. The digital world is different though. We need to learn how to act on 20%.
                    </li>
                    <li>
                        Heute denken, morgen fertig has assembled a group of trouble-makers with experience in both starting stuff and building stuff. Usually we have worked in both start-ups and leading consultancies.
                    </li>
                </ul>
                <Link className={cn("button", styles.button)} href="/about">
                    LEARN MORE
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
