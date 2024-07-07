import { useEffect, useRef, useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"
import { Styles, TriggerOnLight } from "../../ModernSemaphore/LightCounter"

type TriggerOnLightCircular = Omit<TriggerOnLight, "Light"> & { light: number }

interface CircularLightCounterProps {
    size: number
    triggersOnLight?: TriggerOnLightCircular[]
    onTimeUp: () => void
    timer: number
    color: string
}
export function CircularLightCounter({
    size,
    triggersOnLight,
    onTimeUp,
    timer,
    color,
}: CircularLightCounterProps) {
    const [lightsOn, setLightsOn] = useState<boolean[]>(
        new Array(12).fill(true)
    )

    const timerId = useRef<NodeJS.Timeout>()

    //* restart the component whenever color changes
    useEffect(() => {
        if (color) {
            let lights = []
            for (let i = 0; i < 12; i++) {
                lights.push(true)
            }
            setLightsOn(lights)
            getLightOff(lights)
        }

        return () => clearTimeout(timerId.current)
    }, [color])

    const lightTimer = timer / 12
    const styles: Styles = {
        container: {
            position: "absolute",
            display: "flex",
            flex: 1,
            borderRadius: "50%",
            width: size,
            height: size,
        },
        basicLightContainer: {
            position: "absolute",
        },
    }

    const miniLightSize = Math.round(size * 0.09)
    const radius = Math.round((size / 2) * 0.9)
    const offset = size / 2 - miniLightSize / 2
    const getLightCounterPosition = (
        index: number,
        radius: number,
        offset: number = 0
    ) => {
        const x = Math.round(Math.sin((Math.PI / 6) * index) * radius + offset)
        const y = Math.round(Math.cos((Math.PI / 6) * index) * -radius + offset)
        return { left: x, top: y }
    }

    //* trigger the function when a specified light turn off if it was set
    const triggerOnLight = (light: number) => {
        if (triggersOnLight && triggerOnLight.length > 0) {
            const callback = triggersOnLight.find(
                (trigger) => trigger.light === light
            )?.callback
            if (callback) {
                callback()
            }
        }
    }

    //* it runs the timer to turn the next light off until they are all off
    const getLightOff = (lightsOnArg: boolean[] | undefined) => {
        const lightsOnLength = lightsOnArg?.reduce(
            (prev, light) => (light ? prev + 1 : prev),
            0
        )

        if (lightsOnArg && lightsOnLength) {
            clearTimeout(timerId.current)
            setTimeout(() => {
                const newLightsOn = [...lightsOnArg]
                lightsOnArg.some((light, index) => {
                    if (light) {
                        newLightsOn[index] = false
                        //* trigger function when specified light turn off if it was set
                        triggerOnLight(index + 1)
                        return true
                    }
                })

                setLightsOn(newLightsOn)
                getLightOff(newLightsOn)
            }, lightTimer)
        }

        if (lightsOnArg && lightsOnArg.length > 0 && lightsOnLength === 0) {
            //* trigger the onTimeUp function when all lights are off
            onTimeUp()
        }
    }
    return (
        <div style={styles.container}>
            {lightsOn.map((on, index) => (
                <div
                    key={`light${index}`}
                    style={{
                        ...styles.basicLightContainer,
                        ...getLightCounterPosition(index, radius, offset),
                    }}
                >
                    <BasicLight size={miniLightSize} color={color} on={on} />
                </div>
            ))}
        </div>
    )
}
