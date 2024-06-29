import { useEffect, useRef, useState } from "react"
import BasicTrafficLight, {
    LightsColors,
} from "./TrafficLight/BasicTrafficLight"

const BasicTraficcLightApp = () => {
    const [lightOn, setLightOn] = useState<LightsColors>("green")
    const timer = useRef<NodeJS.Timeout>()

    //* set one second
    const second = 1000
    const yellowToRed = 1 * second
    const redToGreen = 3 * second
    const greenToYellow = 6 * second

    useEffect(() => {
        clearTimeout(timer.current)
        let nextLight: { light: LightsColors; time: number }

        switch (lightOn) {
            case "red":
                nextLight = { light: "green", time: redToGreen }
                break
            case "green":
                nextLight = { light: "yellow", time: greenToYellow }
                break
            default:
                nextLight = { light: "red", time: yellowToRed }
        }

        timer.current = setTimeout(
            () => setLightOn(nextLight.light),
            nextLight.time
        )
        return () => clearTimeout(timer.current)
    }, [lightOn])
    return <BasicTrafficLight size={50} lightsOn={[lightOn]} />
}

export default BasicTraficcLightApp
