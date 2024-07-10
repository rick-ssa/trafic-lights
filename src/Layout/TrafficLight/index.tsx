import { useState } from "react"
import trafficDataList, { ITrafficLightDataObject } from "../../Data/arrayData"
import TrafficLightList from "../TrafficLightList"
import { Styles } from "../../interfaces/TStyles"

interface TrafficLightProps {
    onChange: (trafficLightDataObject: ITrafficLightDataObject) => void
}
export const TrafficLight = ({ onChange }: TrafficLightProps) => {
    const [trafficLightObject, setTrafficLightObject] =
        useState<ITrafficLightDataObject>(trafficDataList[0])

    const handleListChange = (trafficDataObject: ITrafficLightDataObject) => {
        setTrafficLightObject(trafficDataObject)
        onChange(trafficDataObject)
    }

    const styles: Styles = {
        section: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            margin: "4px",
            borderRadius: "5px",
        },
        trafficLight: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    }

    return (
        <div style={styles.section}>
            <TrafficLightList
                list={trafficDataList}
                onChange={handleListChange}
            />
            <div style={styles.trafficLight}>
                {trafficLightObject.trafficLight}
            </div>
        </div>
    )
}
