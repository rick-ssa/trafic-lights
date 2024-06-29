import BasicLight from "../BasicLight"
import "./styles.css"

export type LightsColors = "red" | "green" | "yellow"
interface BasicTrafficLightProp {
    size: number
    lightsOn: LightsColors[]
}
const BasicTrafficLight = ({ size, lightsOn }: BasicTrafficLightProp) => {
    const redOn = lightsOn.includes("red")
    const yellowOn = lightsOn.includes("yellow")
    const greenOn = lightsOn.includes("green")

    const width = size * 1.4
    const height = width * 3
    return (
        <div
            className="basic-trafficlight-container"
            style={{
                width: width + "px",
                height: height + "px",
            }}
        >
            <BasicLight color="#f00" on={redOn} size={size} />
            <BasicLight color="#ff0" on={yellowOn} size={size} />
            <BasicLight color="#0f0" on={greenOn} size={size} />
        </div>
    )
}

export default BasicTrafficLight
