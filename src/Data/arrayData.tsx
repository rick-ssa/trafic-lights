import React from "react"
import BasicTraficcLightApp from "../components/BasicSemaphore"
import SquareTraficcLightApp from "../components/SquareSemaphore"
import HeartTraficcLightApp from "../components/HeartSemaphore"
import ModernTrafficLightApp from "../components/ModernSemaphore"
import CircularSemaphoreApp from "../components/CircularSemaphore/app"

export interface ITrafficLightDataObject {
    githubName: string
    trafficLightName: string
    trafficLight: React.ReactElement
}

const TrafficLightDataObject: ITrafficLightDataObject[] = [
    {
        githubName: "rick-ssa",
        trafficLightName: "Circular Traffic Light",
        trafficLight: <CircularSemaphoreApp />,
    },
    {
        githubName: "rick-ssa",
        trafficLightName: "Moder Traffic Light",
        trafficLight: <ModernTrafficLightApp />,
    },
    {
        githubName: "rick-ssa",
        trafficLightName: "Heart Traffic Light",
        trafficLight: <HeartTraficcLightApp />,
    },
    {
        githubName: "rick-ssa",
        trafficLightName: "Basic Traffic Light",
        trafficLight: <BasicTraficcLightApp />,
    },
    {
        githubName: "rick-ssa",
        trafficLightName: "Square Traffic Light",
        trafficLight: <SquareTraficcLightApp />,
    },
]

export default TrafficLightDataObject
