import { useEffect, useState } from "react";
import Link from "next/link";
import TextTransition, { presets } from "react-text-transition";
import cn from "classnames";
import styles from "./Footer.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Socials from "@/components/Socials";

const navigation = [
    {
        title: "Om virksomheden",
        url: "/om-virksomheden",
    },
    {
        title: "Ydelser",
        url: "/ydelser",
    },
    {
        title: "Projekter",
        url: "/projekter",
    },
    {
        title: "Eksperimenter",
        url: "/eksperimenter",
    },
    {
        title: "Kontakt",
        url: "/kontakt",
    },
];

const socials = [
    {
        icon: "facebook",
        url: "https://www.facebook.com/jacobboetter/",
    },
    {
        icon: "twitter",
        url: "https://twitter.com/boetter",
    },
    {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/boetter/",
    },
];

const TEXTS = ["stort", "fedt", "nyt", "vildt", "smukt", "sjovt", "unikt", "flot", "klogt", "smart"];

type FooterProps = {
    empty?: boolean;
};

const Footer = ({ empty }: FooterProps) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <footer className={cn(styles.footer, { [styles.footerEmpty]: empty })}>
            <div className={cn("container", styles.container)}>
                {!empty && (
                    <>
                        <div className={styles.row}>
                            <div className={cn("h2", styles.title)}>
                                <span>Skriv og lad</span>
                                <span>os skabe noget</span>
                                <span>
                                    <span className={styles.word}>
                                        <TextTransition
                                            springConfig={presets.slow}
                                            inline
                                        >
                                            {TEXTS[index % TEXTS.length]}&nbsp;
                                        </TextTransition>
                                    </span>
                                    sammen
                                </span>
                            </div>
                            <ButtonCircle
                                className={styles.button}
                                icon="arrow-up-right"
                                image="/images/get-in-touch.svg"
                                href="/contact"
                            />
                        </div>
                    </>
                )}
                <div className={styles.separator}></div>
                {!empty && (
                    <div className={styles.line}>
                        <nav className={styles.navigation}>
                            {navigation.map((link, index) => (
                                <Link
                                    className={styles.link}
                                    href={link.url}
                                    key={index}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                        <Socials items={socials} />
                    </div>
                )}
                <div className={styles.foot}>
                    <div className={styles.copyright}>
                        Heute denken, morgen fertig
                    </div>
                    <a
                        className={styles.policy}
                        href="http://jacob.boetter.dk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jacob Bøtter
                    </a> Skriv til mig på&nbsp;
                    <a
                        className={styles.author}
                        href="mailto:jacob@boetter.dk"
                    >
                        jacob@boetter.dk
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
