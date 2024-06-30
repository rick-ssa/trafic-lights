import "./styles.css"
import { ITrafficLightDataObject } from "../../Data/arrayData"
import makeTrafficListKey from "../../utils/makeTrafficListKey"

interface TrafficLightListProps {
    list: ITrafficLightDataObject[]
    onChange: (arg: ITrafficLightDataObject) => void
}

const TrafficLightList = ({ list, onChange }: TrafficLightListProps) => {
    const handleChange = (title: string) => {
        const trafficObject = list.find((item) => {
            return makeTrafficListKey(item) === title
        })

        if (trafficObject) {
            onChange(trafficObject)
        }
    }

    return (
        <select
            className="trafficlight-list"
            onChange={(e) => handleChange(e.target.value)}
        >
            {list.map((item) => {
                const value = makeTrafficListKey(item)
                return (
                    <option key={value} value={value}>
                        {item.trafficLightName}
                    </option>
                )
            })}
        </select>
    )
}

export default TrafficLightList
