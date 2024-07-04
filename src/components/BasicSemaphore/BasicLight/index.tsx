import getLightColorOff from "../../../utils/getLightColorOff"
import "./styles.css"

interface BasicLightProps {
    size: number
    on: boolean
    color: string
}

const BasicLight = ({ size, on, color }: BasicLightProps) => {
    // make the shine bigger than the Basiclight object
    const BasiclightShineSize = size * 1.1

    // center the shine with the Basiclight object
    const BasiclightShinePosition = (-1 * BasiclightShineSize + size) / 2

    return (
        <div
            className="basiclight-container"
            style={{
                width: size + "px",
                height: size + "px",
            }}
        >
            {/* make the Basiclight look like it is shine*/}
            <span
                className="basiclight basiclight-shine"
                style={{
                    width: BasiclightShineSize + "px",
                    height: BasiclightShineSize + "px",
                    left: BasiclightShinePosition + "px",
                    top: BasiclightShinePosition + "px",
                    backgroundColor: color,
                    visibility: on ? "visible" : "hidden",
                }}
            />

            {/* show the Basiclight */}
            <span
                className="basiclight"
                style={{
                    width: size + "px",
                    height: size + "px",
                    backgroundColor: on ? color : getLightColorOff(color),
                }}
            />
        </div>
    )
}

export default BasicLight
