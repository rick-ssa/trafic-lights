import { useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"
import PanelBasic from "../../BasicSemaphore/PanelBasic/PanelBasic"
import LightCounter from "../LightCounter"
import { Styles } from "../../../interfaces/TStyles"

interface ModernTrafficLightProp {
    size: number
}

const ModernTrafficLight = ({ size }: ModernTrafficLightProp) => {
    //* constants colors
    const color_green = "#0f0"
    const color_red = "#f00"
    const color_yellow = "#ff0"

    //* timers
    const timer_red = 6000
    const timer_green = 20000

    //* array to save the on state of each big lights
    const [colorsOn, setColorsOn] = useState<boolean[]>([false, false, true])

    //* state to light of lightcounter
    const [color, setColor] = useState<string>(color_green)

    //* components styles
    const sytles: Styles = {
        container: {
            backgroundColor: "#333",
            display: "flex",
            borderRadius: "10px",
        },
        lightCounterContainer: {
            padding: "5px",
            display: "flex",
            flex: 1,
        },
    }

    //* calc to define the lightCounter light size
    const miniLightSize = Math.floor(size / 3)

    //* calc to define the lightCounter light length
    const miniLightLength = Math.floor((size * 3.33) / miniLightSize)

    //* function to onTimeUp to change the big light to red or green
    const changeColor = () => {
        if (color === color_green) {
            setColor(color_red)
            setColorsOn([true, false, false])
        } else {
            setColor(color_green)
            setColorsOn([false, false, true])
        }
    }

    return (
        <div style={sytles.container}>
            <PanelBasic size={size}>
                <>
                    <BasicLight
                        color={color_red}
                        on={colorsOn[0]}
                        size={size}
                    />
                    <BasicLight
                        color={color_yellow}
                        on={colorsOn[1]}
                        size={size}
                    />
                    <BasicLight
                        color={color_green}
                        on={colorsOn[2]}
                        size={size}
                    />
                </>
            </PanelBasic>
            <div style={sytles.lightCounterContainer}>
                <LightCounter
                    color={color}
                    lightSize={miniLightSize}
                    lightsLength={miniLightLength}
                    onTimeUp={changeColor}
                    triggersOnLight={[
                        {
                            //* function called at three to last to turn big light yellow
                            callback: () => {
                                color === color_green &&
                                    setColorsOn([false, true, false])
                            },
                            light: "twoBeforeLast",
                        },
                    ]}
                    timer={color === color_green ? timer_green : timer_red}
                />
            </div>
        </div>
    )
}

export default ModernTrafficLight
