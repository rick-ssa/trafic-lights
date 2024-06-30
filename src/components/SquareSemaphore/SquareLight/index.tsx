import "./styles.css"

interface SquareLightProps {
    size: number
    on: boolean
    color: string
}

const SquareLight = ({ size, on, color }: SquareLightProps) => {
    // make the shine bigger than the Squarelight object
    const SquarelightShineSize = size * 1.1

    // center the shine with the Squarelight object
    const SquarelightShinePosition = (-1 * SquarelightShineSize + size) / 2

    return (
        <div
            className="squarelight-container"
            style={{
                width: size + "px",
                height: size + "px",
            }}
        >
            {/* make the Squarelight look like it is shine*/}
            <span
                className="squarelight squarelight-shine"
                style={{
                    width: SquarelightShineSize + "px",
                    height: SquarelightShineSize + "px",
                    left: SquarelightShinePosition + "px",
                    top: SquarelightShinePosition + "px",
                    backgroundColor: color,
                    visibility: on ? "visible" : "hidden",
                }}
            />

            {/* show the Squarelight */}
            <span
                className="squarelight"
                style={{
                    width: size + "px",
                    height: size + "px",
                    backgroundColor: color,
                }}
            />

            {/* covers the Squarelight when on = false */}
            <span
                className="squarelight squarelight-off"
                style={{
                    width: size + "px",
                    height: size + "px",
                    visibility: !on ? "visible" : "hidden",
                }}
            />
        </div>
    )
}

export default SquareLight
