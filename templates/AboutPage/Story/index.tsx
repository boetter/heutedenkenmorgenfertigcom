import cn from "classnames";
import styles from "./Story.module.sass";

type StoryProps = {};

const Story = ({}: StoryProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>HVORFOR PÅ TYSK?</div>
            <div className={cn("h6", styles.content)}>
            Navnet kommer fra den tyske kunstner Martin Kippenberger, som for tredive år udstillede teksten på et skilt i i Berlin. Da jeg opdagede teksten for femten år siden, tog jeg budskabet til mig som den mest oplagte forklaring på det, jeg er beddst til: at realisere idéer til konkrete projekter hurtigere end de fleste.
            </div>
        </div>
    </div>
);

export default Story;
