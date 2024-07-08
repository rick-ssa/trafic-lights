import CircularSemaphore from "./CircularComponents"

interface CircularTrafficLightProps {
    panelSize: number
    counterColor: string
    lightsOn: boolean[]
    trafficLightColor: string
}

export const CircularTrafficLight = ({
    panelSize,
    counterColor,
    lightsOn,
    trafficLightColor,
}: CircularTrafficLightProps) => {
    const counterLightSize = Math.round(panelSize * 0.93)
    const basicLightSize = Math.round(panelSize * 0.46)

    return (
        <CircularSemaphore.Panel size={panelSize}>
            <CircularSemaphore.CounterLight
                size={counterLightSize}
                color={counterColor}
                lightsOn={lightsOn}
            />
            <CircularSemaphore.Light
                size={basicLightSize}
                color={trafficLightColor}
                on={true}
            />
        </CircularSemaphore.Panel>
    )
}
