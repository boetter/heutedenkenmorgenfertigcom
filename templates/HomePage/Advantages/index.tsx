import cn from "classnames";
import Link from "next/link";
import styles from "./Advantages.module.sass";

const list = [
    {
        title: "Års erfaring",
        value: "20+",
    },
    {
        title: "Afholdte foredrag",
        value: "500+",
    },
    {
        title: "Konsulentprojekter leveret",
        value: "100+",
    },
    {
        title: "Prototyper bygget",
        value: "1000+",
    },
];

type AdvantagesProps = {};

const Advantages = ({}: AdvantagesProps) => (
    <div
        className={cn("section-mb160 section-pd section-black", styles.section)}
    >
        <div className={"container"}>
            <div className={cn("label", styles.label)}>Hvorfor vælge Heute denken, morgen fertig?</div>
            <div className={cn("section-mb120", styles.row)}>
                <div className={styles.wrap}>
                    <div className={cn("h5", styles.title)}>
                        Tilknyt en ekspert fra øverste hylde til dit projekt</div>
                    <Link
                        className={cn("button-light", styles.button)}
                        href="/projekter"
                    >
                        LÆS OM TIDLIGERE PROJEKTER
                    </Link>
                </div>
                <div className={styles.content}>
                    <p>
                    Når du vælger Heute denken, morgen fertig får du én dedikeret ressource. Med mig får du mere end 20 års erfaring med at hjælpe organisationer med at få værdi ud af AI og andre nye teknologier.
                    </p>
                    <p>
                    Min tilgang er at gøre det komplekse simpelt. Det er rent faktisk muligt at afprøve AI uden en stor strategi. Du og dine kolleger kan få nye kompetencer, allerede inden I har valgt den helt rigtige AI-platform. Har I allerede en strategi og en platform, så kan jeg understøtte dette gennem intensiv træning og rådgivning.
                    </p>
                </div>
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h3", styles.counter)}>
                            {item.value}
                        </div>
                        <div className={styles.subtitle}>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Advantages;
