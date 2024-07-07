import BasicLight from "../components/BasicSemaphore/BasicLight"
import { Styles } from "../components/ModernSemaphore/LightCounter"

export const Top = () => {
    const styles: Styles = {
        section: {
            textAlign: "center",
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            margin: "4px",
            borderRadius: "5px",
        },
        title: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2.2rem",
            margin: 0,
            padding: "16px",
        },
        link: {
            color: "blueviolet",
            textDecoration: "none",
            fontWeight: 700,
        },
    }
    return (
        <section style={styles.section}>
            <h1 style={styles.title}>
                <BasicLight color="#0f0" on={true} size={20} />
                &nbsp; Traffic Light Challenge &nbsp;
                <BasicLight color="#ff0" on={true} size={20} />
            </h1>
            <p>
                Make your own traffic light! See the rules on{" "}
                <a
                    style={styles.link}
                    href="https://github.com/rick-ssa/trafic-lights?tab=readme-ov-file#vertical_traffic_light-traffic-light---challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    github
                </a>
            </p>
        </section>
    )
}
