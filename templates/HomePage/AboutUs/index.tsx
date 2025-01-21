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
                “Jacob hjælper organisationer med at få værdi ud af AI – hurtigt og konkret.”
                </div>
                <ul className={styles.list}>
                    <li>
                    Jeg har brugt de sidste 20 år på at udforske, hvordan fremtidens teknologier forandrer vores arbejde, hvilket har resulteret i seks bøger og over 500 foredrag.
                    </li>
                    <li>
                    Gennem min virksomhed, Heute denken, morgen fertig, hjælper jeg større virksomheder og organisationer med at implementere AI og andre digitale teknologier – uden at drukne i buzzwords. Min tilgang er enkel: Tæt samarbejde, konkrete prototyper og no-bullshit rådgivning.
                    </li>
                </ul>
                <Link className={cn("button", styles.button)} href="/om-virksomheden">
                    LÆS MERE OM JACOB
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
