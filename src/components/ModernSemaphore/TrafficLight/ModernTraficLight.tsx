import { useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"
import PanelBasic from "../../BasicSemaphore/PanelBasic/PanelBasic"
import LightCounter, { Styles } from "../LightCounter"

interface ModernTrafficLightProp {
    size: number
}

const ModernTrafficLight = ({ size }: ModernTrafficLightProp) => {
    const color_green = "#0f0"
    const color_red = "#f00"
    const color_yellow = "#ff0"
    const [colorsOn, setColorsOn] = useState<boolean[]>([false, false, true])
    const [color, setColor] = useState<string>(color_green)
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

    const miniLightSize = Math.floor(size / 3)
    const miniLightLength = Math.floor((size * 3.33) / miniLightSize)

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
                            callback: () => {
                                color === color_green &&
                                    setColorsOn([false, true, false])
                            },
                            light: "threeBeforeLast",
                        },
                    ]}
                    timer={color === color_green ? 10000 : 6000}
                />
            </div>
        </div>
    )
}

export default ModernTrafficLight
