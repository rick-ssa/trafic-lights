import { ReactNode } from "react"
import { Styles } from "../../../interfaces/TStyles"

interface CircularPanelProps {
    children: ReactNode
    size: number
}

const CircularPanel = ({ children, size }: CircularPanelProps) => {
    const styles: Styles = {
        container: {
            position: "relative",
            display: "flex",
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "#333",
            justifyContent: "center",
            alignItems: "center",
        },
    }
    return <div style={styles.container}>{children}</div>
}

export default CircularPanel
