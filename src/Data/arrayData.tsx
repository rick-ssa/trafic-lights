import React from "react"
import BasicTraficcLightApp from "../components/BasicSemaphore"
import SquareTraficcLightApp from "../components/SquareSemaphore"
import HeartTraficcLightApp from "../components/HeartSemaphore"

export interface ITrafficLightDataObject {
    githubName: string
    trafficLightName: string
    trafficLight: React.ReactElement
}

const TrafficLightDataObject: ITrafficLightDataObject[] = [
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
