import { FormEvent, useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Field from "@/components/Field";

type FormProps = {};

const Form = ({}: FormProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [status, setStatus] = useState<"pending" | "ok" | "error" | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Tilføj typen FormEvent<HTMLFormElement>
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setStatus("pending");
            setError(null);

            const myForm = event.target as HTMLFormElement;
            const formData = new FormData(myForm);
            
            const res = await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (res.status === 200) {
                setStatus("ok");
            } else {
                setStatus("error");
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus("error");
            setError(String(e));
        }
    };

    return (
        <form
            className={styles.form}
            name="contact"
            onSubmit={handleFormSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <Field
                className={styles.field}
                number="01"
                name="navn"
                label="Hvad er dit navn?"
                placeholder="F.eks. Jacob Bøtter"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="02"
                name="email"
                label="Hvad er din email-adresse?"
                placeholder="F.eks. jacob@boetter.dk"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="03"
                name="telefon"
                label="Hvad er dit telefonnummer?"
                placeholder="F.eks. +45 31 68 30 14"
                type="tel"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="04"
                name="virksomhed"
                label="Hvad hedder din virksomhed/organisation?"
                placeholder="F.eks. Heute denken, morgen fertig"
                value={company}
                onChange={(e: any) => setCompany(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="05"
                name="besked"
                label="Hvad kan jeg hjælpe dig med?"
                placeholder="F.eks. brug for rådgivning til nyt AI projekt"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                required
            />
            <button className={cn("button-light", styles.button)} type="submit">
                SEND BESKED
            </button>

            {status === "ok" && (
                <div className="alert alert-success">
                    Submitted!
                </div>
            )}
            {status === "error" && (
                <div className="alert alert-error">
                    {error}
                </div>
            )}
        </form>
    );
};

export default Form;