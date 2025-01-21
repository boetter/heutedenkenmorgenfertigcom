import cn from "classnames";
import styles from "./Story.module.sass";

type StoryProps = {};

const Story = ({}: StoryProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            
            <div className={cn("label", styles.label)}>HEUTE DENKEN, MORGEN FERTIG</div>
            <div className={cn("h6", styles.content)}>
            Heute denken, morgen fertig er en konsulentvirksomhed grundlagt af Jacob Bøtter. Jeg træner organisationer i at udnytte AI og andre digitale teknologier gennem workshops, læringsforløb og konkrete prototyper. Målet er at skabe reel værdi – hurtigt og no-bullshit.
            </div>
        </div>
        <div className={"container"}>
            
            <div className={cn("label", styles.label)}>HVORFOR PÅ TYSK?</div>
            <div className={cn("h6", styles.content)}>
            Navnet kommer fra den tyske kunstner Martin Kippenberger, som for 30 år udstillede teksten på et skilt i i Berlin. Da jeg opdagede det 15 år senere, tog jeg budskabet til mig som den mest oplagte forklaring på det, jeg er bedst til: at omsætte digitale visioner til konkret værdiskabelse hurtigere end de fleste.
            </div>
        </div>
    </div>
    
);

export default Story;
