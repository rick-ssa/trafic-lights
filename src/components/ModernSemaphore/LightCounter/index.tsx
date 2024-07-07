import React, { useEffect, useRef, useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"

export type LightNumber =
    | number
    | "oneBeforeLast"
    | "twoBeforeLast"
    | "threeBeforeLast"

export interface TriggerOnLight {
    light: LightNumber
    callback: () => void
}

interface LightCounterProps {
    lightSize: number
    lightsLength: number
    onTimeUp: () => void
    triggersOnLight?: TriggerOnLight[]
    timer: number
    color: string
}

export type Styles = { [key: string]: React.CSSProperties }

const LightCounter = ({
    lightSize,
    lightsLength,
    onTimeUp,
    timer,
    color,
    triggersOnLight,
}: LightCounterProps) => {
    const [lightsOn, setLightsOn] = useState<boolean[]>()
    const timerId = useRef<NodeJS.Timeout>()
    const lightTimer = timer / lightsLength

    //* restart the component whenever color changes
    useEffect(() => {
        if (color) {
            let lights = []
            for (let i = 0; i < lightsLength; i++) {
                lights.push(true)
            }
            setLightsOn(lights)
            getLightOff(lights)
        }

        return () => clearTimeout(timerId.current)
    }, [color])

    //* component styles
    const styles: Styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
            width: lightSize * 1.2,
        },
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

    //* trigger the function when a specified light turn off if it was set
    const triggerOnLight = (light: number) => {
        if (triggersOnLight && triggerOnLight.length > 0) {
            const callback = triggersOnLight.find(
                (trigger) => getNumberFromPosition(trigger.light) === light
            )?.callback
            if (callback) {
                callback()
            }
        }
    }

    //* change the constants string in the light number
    const getNumberFromPosition = (light: LightNumber) => {
        switch (light) {
            case "oneBeforeLast":
                return lightsLength > 1 ? lightsLength - 1 : 0
            case "twoBeforeLast":
                return lightsLength > 2 ? lightsLength - 2 : 0
            case "threeBeforeLast":
                return lightsLength > 3 ? lightsLength - 3 : 0
            default:
                return light
        }
    }

    return (
        <span style={styles.container}>
            {lightsOn ? (
                lightsOn.map((on, index) => (
                    <BasicLight
                        key={index + "light"}
                        size={lightSize}
                        color={color}
                        on={on}
                    />
                ))
            ) : (
                <></>
            )}
        </span>
    )
}

export default LightCounter
