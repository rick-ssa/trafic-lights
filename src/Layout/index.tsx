import TrafficLightList from "./TrafficLightList"
import "./styles.css"
import trafficDataList, { ITrafficLightDataObject } from "../Data/arrayData"
import { Suspense, useState } from "react"
import GithubContact from "./Github/GithubContact"
import BasicLight from "../components/BasicSemaphore/BasicLight"

const Layout = () => {
    const [trafficLightObject, setTrafficLightObject] =
        useState<ITrafficLightDataObject>(trafficDataList[0])

    const handleListChange = (trafficDataObject: ITrafficLightDataObject) => {
        setTrafficLightObject(trafficDataObject)
    }

    return (
        <main className="layout-main">
            <section className="section-title">
                <h1>
                    <BasicLight color="#0f0" on={true} size={20} />
                    &nbsp; Traffic Light Challenge &nbsp;
                    <BasicLight color="#ff0" on={true} size={20} />
                </h1>
                <p>
                    Make your own traffic light! See the rules on{" "}
                    <a
                        href="https://github.com/rick-ssa/trafic-lights"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github
                    </a>
                </p>
            </section>
            <div className="section-content">
                <section className="section-semaphore-app">
                    <TrafficLightList
                        list={trafficDataList}
                        onChange={handleListChange}
                    />
                    <div className="traffic-light-app">
                        {trafficLightObject.trafficLight}
                    </div>
                    <div className="traffic-light-author">
                        <Suspense fallback={<div>loading...</div>}>
                            <GithubContact
                                githubName={trafficLightObject.githubName}
                            />
                        </Suspense>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Layout
