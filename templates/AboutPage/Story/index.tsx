import cn from "classnames";
import styles from "./Story.module.sass";

type StoryProps = {};

const Story = ({}: StoryProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>HVORFOR PÅ TYSK?</div>
            <div className={cn("h6", styles.content)}>
                Navnet kommer fra den tyske kunstner Martin Kippenberger, som for tredive år siden udstillede et skilt i Berlin med teksten på. Jeg opdagede den for femten år siden og tog det til mig som den mest åbenlyse forklaring på hvad jeg er bedst til: at realisere idéer til konkrete projekter hurtigere end de fleste.
            </div>
        </div>
    </div>
);

export default Story;
