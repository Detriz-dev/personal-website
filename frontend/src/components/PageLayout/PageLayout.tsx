import style from "./PageLayout.module.css";
import type { PageLayoutProps } from "./PageLayout.types.ts";
import { useTheme } from "../../theme/ThemeContext.tsx";

const PageLayout = ({ className, children, ...rest }: PageLayoutProps) => {
    const { theme } = useTheme();
    const classes = [style.page, style[theme], className].filter(Boolean).join(" ");

    return <div className={classes} {...rest}>{children}</div>;
};

export default PageLayout;
