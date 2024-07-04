import React from "react"
import "./styles.css"

interface PanelBasicProp {
    size: number
    children: React.ReactElement
}
const PanelBasic = ({ size, children }: PanelBasicProp) => {
    //* define the semaphore dimensions
    const width = size * 1.4
    const height = width * 3

    return (
        <div
            className="basic-trafficlight-container"
            style={{
                width: width + "px",
                height: height + "px",
            }}
        >
            {children}
        </div>
    )
}

export default PanelBasic
