import { useRef } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Form from "../Form";
import Socials from "@/components/Socials";

const socials = [
    {
        icon: "facebook",
        url: "https://www.facebook.com/jacobboetter",
    },
    {
        icon: "twitter",
        url: "https://x.com/boetter",
    },
    {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/boetter/",
    },
];

type MainProps = {};

const Main = ({}: MainProps) => {
    const scrollToRef = useRef<any>(null);

    return (
        <div className={cn("section-main section-brown", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.wrap}>
                        <div className={cn("h2", styles.title)}>
                            Skal vi arbejde sammen?
                        </div>
                        <div className={styles.content}>
                            <p>
                                Har du brug for at komme i kontakt med Jacob Bøtter?
                            </p>
                            <p>
                                Så er du landet rette sted.
                            </p>
                            <p>
                            Udfyld felterne nedenfor og jeg vender tilbage indenfor 24 timer.
                            </p>
                        </div>
                    </div>
                    <ButtonCircle
                        className={styles.button}
                        icon="arrow-down-right"
                        image="/images/get-in-touch.svg"
                        onClick={() =>
                            scrollToRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    />
                </div>
                <div className={styles.row}>
                    <div className={styles.anchor} ref={scrollToRef}></div>
                    <Form />
                    <div className={styles.sidebar}>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.category}>RING ELLER SKRIV TIL MIG</div>
                                <div className={styles.text}>
                                    <a
                                        className={styles.phone}
                                        href="tel:+4531683014"
                                        rel="noopener noreferrer"
                                    >
                                        +45 31683014
                                    </a>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.category}>SEND ET POSTKORT</div>
                                <div className={styles.text}>
                                    <p>Poul Reumerts Vej 33</p>
                                    <p>2500 Valby</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Socials items={socials} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
