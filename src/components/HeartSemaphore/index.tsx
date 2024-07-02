import { useEffect, useRef, useState } from "react"
import HeartTrafficLight, {
    LightsColors,
} from "./TrafficLight/HeartTrafficLight"

const HeartTraficcLightApp = () => {
    const [lightOn, setLightOn] = useState<LightsColors>("green")
    const timer = useRef<NodeJS.Timeout>()

    //* set one second
    const second = 1000

    //* set time to change lights
    const yellowToRed = 2 * second
    const redToGreen = 3 * second
    const greenToYellow = 6 * second

    useEffect(() => {
        //* clear setTimeout if so
        clearTimeout(timer.current)

        let nextLight: { light: LightsColors; time: number }

        //* save the next light and time to show up
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

        //* schedule the next light change
        timer.current = setTimeout(
            () => setLightOn(nextLight.light),
            nextLight.time
        )

        //* clear on unmount component
        return () => clearTimeout(timer.current)
    }, [lightOn])
    return <HeartTrafficLight size={80} lightsOn={[lightOn]} />
}

export default HeartTraficcLightApp
