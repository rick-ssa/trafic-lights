import getLightColorOff from "../../../utils/getLightColorOff"
import HeartShape from "../HeartShape"
import "./styles.css"

interface HeartLightProps {
    size: number
    on: boolean
    color: string
}

const HeartLight = ({ size, on, color }: HeartLightProps) => {
    // make the shine bigger than the Heartlight object
    const HeartlightShineSize = size * 1.1

    // center the shine with the Heartlight object
    const HeartlightShinePosition = (-1 * HeartlightShineSize + size) / 2

    return (
        <div
            className="heartlight-container"
            style={{
                width: size + "px",
                height: size + "px",
            }}
        >
            {/* make the Heartlight look like it is shine*/}
            <HeartShape
                style={{
                    size: HeartlightShineSize,
                    left: HeartlightShinePosition + "px",
                    top: HeartlightShinePosition + "px",
                    backgroundColor: color,
                    visibility: on ? "visible" : "hidden",
                    filter: "blur(8px)",
                }}
            />

            {/* show the Heartlight */}
            <HeartShape
                style={{
                    size,
                    backgroundColor: on ? color : getLightColorOff(color),
                }}
            />
        </div>
    )
}

export default HeartLight
