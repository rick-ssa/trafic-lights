import PanelBasic from "../../BasicSemaphore/PanelBasic/PanelBasic"
import HeartLight from "../HeartLight"

export type LightsColors = "red" | "green" | "yellow"
interface HeartTrafficLightProp {
    size: number
    lightsOn: LightsColors[]
}
const HeartTrafficLight = ({ size, lightsOn }: HeartTrafficLightProp) => {
    //* turn the red light on if red is in th ligthsOn
    const redOn = lightsOn.includes("red")

    //* turn the yellow light on if yellow is in th ligthsOn
    const yellowOn = lightsOn.includes("yellow")

    //* turn the green light on if green is in th ligthsOn
    const greenOn = lightsOn.includes("green")

    //* make the heart light fit on panel
    const heartSize = size * 0.6
    return (
        <PanelBasic size={size}>
            <>
                <HeartLight color="#f00" on={redOn} size={heartSize} />
                <HeartLight color="#ff0" on={yellowOn} size={heartSize} />
                <HeartLight color="#0f0" on={greenOn} size={heartSize} />
            </>
        </PanelBasic>
    )
}

export default HeartTrafficLight
