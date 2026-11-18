import style from "./LandingPage.module.css";
import Button from "../../components/Button/Button.tsx";
import NavItem from "../../components/NavItem/NavItem.tsx";
const LandingPage = () => {
    return (<>
        <Button
            label={"How i find answer"}
            icon={"south"} />

        <Button
            label={"Selected work"}
            icon={"south"}
            variant="secondary"/>
        <NavItem label={"elo"} icon={"south"} />
        <h1 className={style.label}>Landing Page</h1></>)}

export default LandingPage;