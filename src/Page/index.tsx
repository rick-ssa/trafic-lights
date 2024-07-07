import GithubContact from "../Layout/Github/GithubContact"
import { Layout } from "../Layout/Layout"
import { Top } from "../Layout/Top"
import { TrafficLight } from "../Layout/TrafficLight"
import TrafficLightDataObject, {
    ITrafficLightDataObject,
} from "../Data/arrayData"
import { useState } from "react"

const Page = () => {
    const [TrafficLightObject, setTrafficLightObject] =
        useState<ITrafficLightDataObject>(TrafficLightDataObject[0])

    return (
        <Layout rightContentWeight={0}>
            <Top />
            <TrafficLight onChange={setTrafficLightObject} />
            <>{/* reserved to github user list */}</>
            <GithubContact githubName={TrafficLightObject.githubName} />
        </Layout>
    )
}

export default Page
