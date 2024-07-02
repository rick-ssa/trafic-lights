import BasicLight from "../BasicLight"
import PanelBasic from "../PanelBasic/PanelBasic"

export type LightsColors = "red" | "green" | "yellow"
interface BasicTrafficLightProp {
    size: number
    lightsOn: LightsColors[]
}
const BasicTrafficLight = ({ size, lightsOn }: BasicTrafficLightProp) => {
    //* turn the red light on if red is in th ligthsOn
    const redOn = lightsOn.includes("red")

    //* turn the yellow light on if yellow is in th ligthsOn
    const yellowOn = lightsOn.includes("yellow")

    //* turn the green light on if green is in th ligthsOn
    const greenOn = lightsOn.includes("green")

    return (
        <PanelBasic size={size}>
            <>
                <BasicLight color="#f00" on={redOn} size={size} />
                <BasicLight color="#ff0" on={yellowOn} size={size} />
                <BasicLight color="#0f0" on={greenOn} size={size} />
            </>
        </PanelBasic>
    )
}

export default BasicTrafficLight
