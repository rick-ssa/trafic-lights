//* change the width and height attribute for size on the heart style property
type CSSProperty = Omit<React.CSSProperties, "width" | "height"> & {
    size: number
}
interface HeartShapeProps {
    style?: CSSProperty
}

const HeartShape = ({ style = { size: 20 } }: HeartShapeProps) => {
    //* calc the position to the circular part of the heart
    const circlePostion = (style?.size ?? 0) / 2 + "px"

    //* set the width and the height to all components
    const styleWidthHeigth: React.CSSProperties = {
        ...style,
        width: style.size,
        height: style.size,
    }

    //* use the set to the width and height
    //* make sure postion is absolute if no one was set
    //* rotate at 45 degrees
    //* style for the triangular part of the shape
    const styleSquare: React.CSSProperties = {
        ...styleWidthHeigth,
        position: style?.position ?? "absolute",
        rotate: "45deg",
    }

    //* use the set to the width and height
    //* make sure that the borderRadius, position, left and top attributes don't ever change
    //* style for the circular part of the heart
    const styleCircle: React.CSSProperties = {
        ...styleWidthHeigth,
        borderRadius: "50%",
        position: "absolute",
        left: undefined,
        top: undefined,
    }

    return (
        <div style={styleSquare}>
            <div style={{ ...styleCircle, right: circlePostion }}></div>
            <div style={{ ...styleCircle, bottom: circlePostion }}></div>
        </div>
    )
}

export default HeartShape
