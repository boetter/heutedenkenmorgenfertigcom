import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Preview from "@/components/Preview";

type MainProps = {};

const Main = ({}: MainProps) => {
    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                        Tak fordi du skrev til mig!
                    </div>
                    <div className={styles.wrap}>
                        <div className={cn("h7", styles.subtitle)}>
                            Jeg har nu modtaget din besked 👌
                        </div>
                        <div className={styles.content}>
                            Så snart jeg får tid vil jeg besvare den så godt jeg kan. Det kan være jeg har travlt for tiden og derfor kommer lidt bagud med at besvare emails, men som regel kan du forvente svar indenfor 24 timer.
                        </div>
                        <Link
                            className={cn("button-light", styles.button)}
                            href="/"
                        >
                            TILBAGE TIL FORSIDEN
                        </Link>
                    </div>
                </div>
            </div>
            <Preview
                className={styles.preview}
                classInner={styles.inner}
                image="/images/image-6.jpg"
                wide
            />
        </>
    );
};

export default Main;
