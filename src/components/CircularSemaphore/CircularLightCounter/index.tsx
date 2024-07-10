import { useEffect, useRef, useState } from "react"
import BasicLight from "../../BasicSemaphore/BasicLight"
import { Styles } from "../../../interfaces/TStyles"

interface CircularLightCounterProps {
    size: number
    color: string
    lightsOn: boolean[]
}

export const CircularLightCounter = ({
    size,
    color,
    lightsOn,
}: CircularLightCounterProps) => {
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
        const x = Math.round(
            Math.sin((Math.PI / (lightsOn.length / 2)) * index) * radius +
                offset
        )
        const y = Math.round(
            Math.cos((Math.PI / (lightsOn.length / 2)) * index) * -radius +
                offset
        )
        return { left: x, top: y }
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
