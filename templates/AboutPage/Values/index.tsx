import cn from "classnames";
import styles from "./Values.module.sass";

const list = [
    {
        title: "Jeg omsætter visioner til konkret værdi",
        content:
            "Mange organisationer lammes af fortidens tekniske gæld og frygt for sikkerhedsbrud – eller af urealistiske forestillinger om fremtiden. Min tilgang er jordnær: Jeg fokuserer på de teknologier, vi allerede har adgang til i dag, men sjældent udnytter fuldt ud. Det gælder særligt for AI, hvor de fleste organisationer har et meget stort uudnyttet potentiale.",
    },
    {
        title: "Jeg arbejder praktisk og hands-on",
        content:
            "Jeg er autodidakt iværksætter og har aldrig læst på universitetet. Jeg har til gengæld brugt de sidste 20 år på at udforske, hvordan fremtidens teknologier forandrer vores arbejde. Det har gjort ved at bygge et hav af prototyper, virksomheder og konsulentprojekter.",
    },
    {
        title: "Forfatter til fem, næsten seks, bøger",
        content: (
            <>
                Jeg udgav for 15 år siden <a href="http://nq.dk" target="_blank" rel="noopener noreferrer">NQ</a>, 
                en af de første bøger om sociale mediers effekt på vores arbejde. Et par år senere udgav jeg <a href="https://unboss.com" target="_blank" rel="noopener noreferrer">UNBOSS</a>, 
                med Lars Kolind, en global bestseller der er læst af mere end 50.000 læsere. Senere fulgte <a href="http://udefrabog.dk" target="_blank" rel="noopener noreferrer">Udefra</a> om potentialet i crowdsourcing og senere <a href="https://fuckitshipit.dk" target="_blank" rel="noopener noreferrer">"Fuck it, ship it"</a> om tilgang til nye digitale teknologier 
                og "NO-CODE". Jeg skriver på en ny bog om hvordan vores fagligheder forandres af Generativ AI, 
                den forventes udgivet i første halvår 2025.
            </>
        ),
    },
    {
        title: "Jeg elsker at formidle AI’s potentiale",
        content:
            "For mange er AI et komplekst felt med store faldgruber og risici. Jeg får energi af at vise, hvordan danske virksomheder kan gøre AI til en reel værdiskaber i hverdagen. Jeg brænder for at tydeliggøre det enorme uudnyttede potentiale, som nye teknologier rummer. Det gør jeg gennem foredrag og kurser – og jeg har efterhånden holdt en del stykker.",
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>OM JACOB BØTTER</div>
            <div className={cn("h7", styles.subtitle)}>
            Jeg hedder Jacob Bøtter, og jeg har brugt de sidste 20 år på at hjælpe danske virksomheder med at udnytte nye digitale teknologier. Gennem min virksomhed, Heute denken, morgen fertig, gør jeg en dyd ud af en praktisk, no-bullshit tilgang, hvor vi sammen skaber reel værdi på kort tid.
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
