import cn from "classnames";
import styles from "./Values.module.sass";

const list = [
    {
        title: "Konkret og virkeligt.",
        content:
            'Alt for meget teknologiarbejde er præget af buzzwords, lange processer og tomme løfter. I projekter med mig ved roret realiserer vi virkelige og konkrete muligheder, fremfor blot at tale om fugle på taget, der måske en dag lander i hånden.',
    },
    {
        title: "Teknologi kan skabes af alle.",
        content:
            "I alt for mange år har vores digitale skæbner været afgjort af de ganske få med teknologiske skaberevner. Med fremkomsten af AI og no-code teknologier kan alle være med og jeg tror på den demokratiserende effekt af dette.",
    },
    {
        title: "Alt kan udfordres.",
        content:
            "Det nemmeste i hele verden er at gøre ingenting. Ofte får bekymringer om datasikkerhed og compliance os til at droppe gode idéer. Vi skal blive bedre til at udfore os selv!",
    },
    {
        title: "Fokus på mennesker.",
        content:
            "Det kan godt være du har verdens smarteste teknologi, men hvis ingen bruger den, så er det jo ligegyldigt. De største investeringer skal ske i mennesker, vores adfærd og evner.",
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>JEG TROR PÅ</div>
            <div className={cn("h7", styles.subtitle)}>
            Det skal kort sagt være nemt og sjovt at arbejde sammen med mig. Jeg har beskrevet de fire vigtigste grundtræk i et godt samarbejde, som jeg ser det, nedenfor.
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h5", styles.title)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Values;
