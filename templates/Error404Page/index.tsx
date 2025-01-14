import Layout from "@/components/Layout";
import Mistake from "@/components/Mistake";

const Error404Page = () => {
    return (
        <Layout emptyFooter>
            <Mistake
                number={404}
                title="Ups! Det ser ud til, at siden er blevet væk – måske er den på eventyr? Prøv at gå tilbage og kig dig omkring her. Måske finder vi den sammen! 😊"
            />
        </Layout>
    );
};

export default Error404Page;
