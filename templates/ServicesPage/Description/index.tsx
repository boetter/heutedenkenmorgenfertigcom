import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-separator section-mb160", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.col}>
                <div className={cn("h5", styles.title)}>
                    Du skal investere i mennesker, hvis du vil have værdi ud af AI.
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                    <p>
                        Mange organisationer tror at AI handler om teknologi, men det er egentlig det mindste af det. Størstedelen af værdien kommer først når vi får alle med. Det kræver en dedikeret indsats for at træne og udvikle dine kolleger.
                    </p>
                    <p>
                        Heute denken, morgen fertig arbejder med at udvikle læringsforløb for grupper af medarbejdere, fordi det er her potentialet for værdiskabelse er størst. Sekundært arbejdes der også med rådgivning, prototyper og foredrag.
                    </p>
                </div>
                <Link className="button" href="/kontakt">
                    KONTAKT JACOB
                </Link>
            </div>
        </div>
    </div>
);

export default Description;
