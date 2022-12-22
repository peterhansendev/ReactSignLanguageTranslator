import Translation from "../Components/Translation/Translation";
import withAuth from "../hoc/withAuth";
import Nav from "./Nav/Nav"; 

const TranslationView = () => {
    return (
        <>
            <Nav />
            <Translation />
        </>
    )
}
export default withAuth(TranslationView)