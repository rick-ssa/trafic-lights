import React, { useEffect, useRef, useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"

type LightNumber =
    | number
    | "oneBeforeLast"
    | "twoBeforeLast"
    | "threeBeforeLast"

interface TrigerOnLight {
    light: LightNumber
    callback: () => void
}

interface LightCounterProps {
    lightSize: number
    lightsLength: number
    onTimeUp: () => void
    triggersOnLight?: TrigerOnLight[]
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
                        triggerOnLight(index + 1)
                        return true
                    }
                })

                setLightsOn(newLightsOn)
                getLightOff(newLightsOn)
            }, lightTimer)
        }

        if (lightsOnArg && lightsOnArg.length > 0 && lightsOnLength === 0) {
            onTimeUp()
        }
    }

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
