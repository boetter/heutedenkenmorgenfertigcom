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
            <div className={cn("label", styles.label)}>Heute denken, hva-for-noget?</div>
            <div className={styles.wrap}>
                <div className={cn("h5", styles.title)}>
                    Jacob hjælper organisationer med at få værdi ud af AI – hurtigt og konkret. 
                </div>
                <ul className={styles.list}>
                    <li>
                        Jacob Bøtter har brugt de sidste 20 år på at udforske hvordan fremtidens teknologier forandrer vores arbejde. Det er blevet til seks bøger og mere end 500 foredrag.
                    </li>
                    <li>
                        Heute denken, morgen fertig er navnet på hans enmandsvirksomhed. Her hjælper han større virksomheder og organisationer med at få værdi ud af AI og andre nye digitale teknologier. Tilgangen er simple samarbejdsflader, konkrete resultater, no-bullshit rådgivning og masser af prototyper.
                    </li>
                </ul>
                <Link className={cn("button", styles.button)} href="/about">
                    LÆS MERE OM JACOB
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
