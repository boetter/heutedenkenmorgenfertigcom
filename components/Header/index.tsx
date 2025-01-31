import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Socials from "../Socials";

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

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);

    const router = useRouter();
    console.log(router);

    const toggleMenu = () => {
        setVisible(!visible);
        if (visible) {
            enablePageScroll();
        } else {
            disablePageScroll();
        }
    };

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -1);
    });

    return (
        <header
            className={cn(styles.header, {
                [styles.visible]: headerStyle,
                [styles.active]: visible,
            })}
        >
            <div className={cn("container", styles.container)}>
                <Logo className={styles.logo} dark={headerStyle || visible} />
                <div
                    className={cn(styles.wrap, {
                        [styles.visible]: visible,
                    })}
                >
                    <nav className={styles.navigation}>
                        {navigation.map((link, index) => (
                            <Link
                                className={cn(styles.link, {
                                    [styles.active]:
                                        router.pathname === link.url ||
                                        router.pathname.includes(link.url),
                                })}
                                href={link.url}
                                key={index}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <Socials
                        className={styles.socials}
                        classSocial={styles.social}
                        items={socials}
                        dark
                        small
                    />
                </div>
                <button
                    aria-label="Menu"
                    className={cn(styles.burger, {
                        [styles.active]: visible,
                    })}
                    onClick={toggleMenu}
                >
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
