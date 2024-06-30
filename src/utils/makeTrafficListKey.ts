import { ITrafficLightDataObject } from "../Data/arrayData"

const makeTrafficListKey = (TrafficObject: ITrafficLightDataObject) => {
    return (
        TrafficObject.githubName +
        "-" +
        TrafficObject.trafficLightName.replace(/\s/g, "")
    )
}

export default makeTrafficListKey
