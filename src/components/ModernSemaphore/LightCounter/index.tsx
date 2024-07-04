import React, { useEffect, useRef, useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"

interface LightCounterProps {
    lightSize: number
    lightsLength: number
    onTimeUp: () => void
    onTimeStart: () => void
    timer: number
    color: string
}

type Styles = { [key: string]: React.CSSProperties }

const LightCounter = ({
    lightSize,
    lightsLength,
    onTimeStart,
    onTimeUp,
    timer,
    color,
}: LightCounterProps) => {
    const [lightsOn, setLightsOn] = useState<boolean[]>()
    const timerId = useRef<NodeJS.Timeout>()
    const lightTimer = timer / lightsLength

    useEffect(() => {
        if (color) {
            console.log("effect")
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
            alignItems: "center",
            justifyContent: "space-around",
            width: lightSize * 1.2,
            height: lightSize * lightsLength * 1.2,
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
