import { ReactNode } from "react"
import { Styles } from "../interfaces/TStyles"

export const Layout = ({ children }: { children: ReactNode[] }) => {
    const [header, leftContent, rightContent, footer] = children

    const styles: Styles = {
        container: {
            display: "grid",
            height: "calc(100vh - 8px)",
            margin: "0 auto",
            flex: 1,
            padding: "4px",
            maxWidth: "1600px",
            gap: "4px",
            gridTemplateColumns: "repeat(6,1fr)",
            gridTemplateRows: "1fr 7fr 1fr",
            gridTemplateAreas:
                '"header  header  header  header  header header"' +
                '"content content content content aside  aside"' +
                '"footer  footer  footer  footer  footer footer"',
        },
        leftContent: {
            display: "flex",
            gridArea: "content",
        },
        rightContent: {
            display: "flex",
            gridArea: "aside",
        },
        header: {
            display: "flex",
            gridArea: "header",
        },
        footer: {
            display: "flex",
            gridArea: "footer",
        },
    }

    return (
        <main style={styles.container}>
            <header style={styles.header}>{header}</header>

            <div style={styles.leftContent}>{leftContent}</div>
            <div style={styles.rightContent}>{rightContent}</div>

            <footer style={styles.footer}>{footer}</footer>
        </main>
    )
}
