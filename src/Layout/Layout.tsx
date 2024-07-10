import { ReactNode } from "react"
import { Styles } from "../interfaces/TStyles"

interface LayoutProps {
    children: ReactNode[]
    headerWeight?: number
    contentWeight?: number
    leftContentWeight?: number
    rightContentWeight?: number
    footerWeight?: number
}

export const Layout = ({
    children,
    headerWeight = 1,
    contentWeight = 7,
    leftContentWeight = 1,
    rightContentWeight = 1,
    footerWeight = 1,
}: LayoutProps) => {
    const [header, leftContent, rightContent, footer] = children

    const styles: Styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "stretch",
            alignItems: "stretch",
        },
        content: {
            display: "flex",
            flexDirection: "row",
            flex: contentWeight,
        },
        leftContent: {
            display: "flex",
            flex: leftContentWeight,
        },
        rightContent: {
            display: "flex",
            flex: rightContentWeight,
        },
        header: {
            display: "flex",
            flex: headerWeight,
        },
        footer: {
            display: "flex",
            flex: footerWeight,
        },
    }

    return (
        <main style={styles.container}>
            <header style={styles.header}>{header}</header>
            <div style={styles.content}>
                <div style={styles.leftContent}>{leftContent}</div>
                <div style={styles.rightContent}>{rightContent}</div>
            </div>
            <footer style={styles.footer}>{footer}</footer>
        </main>
    )
}
