import GithubContact from "../Layout/Github/GithubContact"
import { Layout } from "../Layout/Layout"
import { Top } from "../Layout/Top"
import { TrafficLight } from "../Layout/TrafficLight"
import TrafficLightDataObject, {
    ITrafficLightDataObject,
} from "../Data/arrayData"
import { useState } from "react"
import { GithubList } from "../Layout/Github/GithubList"

const Page = () => {
    const [TrafficLightObject, setTrafficLightObject] =
        useState<ITrafficLightDataObject>(TrafficLightDataObject[0])

    return (
        <Layout leftContentWeight={2}>
            <Top />
            <TrafficLight onChange={setTrafficLightObject} />
            <GithubList />
            <GithubContact githubName={TrafficLightObject.githubName} />
        </Layout>
    )
}

export default Page
