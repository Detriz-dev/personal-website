import style from "./LandingPage.module.css";
import Button from "../../components/Button/Button.tsx";

const LandingPage = () => {
    return (<>
        <Button
            label={"How i find answer"}
            icon={"south"} />

        <Button
            label={"Selected work"}
            icon={"south"}
            variant="secondary"/>
        <h1 className={style.label}>Landing Page</h1></>)}

export default LandingPage;