import SquareLight from "../SquareLight"
import "./styles.css"

export type LightsColors = "red" | "green" | "yellow"
interface SquareTrafficLightProp {
    size: number
    lightsOn: LightsColors[]
}
const SquareTrafficLight = ({ size, lightsOn }: SquareTrafficLightProp) => {
    //* turn the red light on if red is in th ligthsOn
    const redOn = lightsOn.includes("red")

    //* turn the yellow light on if yellow is in th ligthsOn
    const yellowOn = lightsOn.includes("yellow")

    //* turn the green light on if green is in th ligthsOn
    const greenOn = lightsOn.includes("green")

    //* define the semaphore dimensions
    const width = size * 1.4
    const height = width * 3

    return (
        <div
            className="square-trafficlight-container"
            style={{
                width: width + "px",
                height: height + "px",
            }}
        >
            <SquareLight color="#f00" on={redOn} size={size} />
            <SquareLight color="#ff0" on={yellowOn} size={size} />
            <SquareLight color="#0f0" on={greenOn} size={size} />
        </div>
    )
}

export default SquareTrafficLight
