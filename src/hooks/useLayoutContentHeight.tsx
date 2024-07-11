import { useEffect, useState } from "react"
import { ILayoutWeight } from "../interfaces/ILayoutWeight"

type useLayoutContentHeightProps = Omit<
    ILayoutWeight,
    "leftContentWeight" | "rightContentWeight"
>

export const useLayoutContentHeight = ({
    headerWeight = 1,
    contentWeight = 7,
    footerWeight = 1,
}: useLayoutContentHeightProps) => {
    const [layoutContentHeight, setLayoutContentHeight] = useState<number>(0)
    const browserHeight = document.documentElement.clientHeight
    const totalWeight = headerWeight + contentWeight + footerWeight

    useEffect(() => {
        setLayoutContentHeight(browserHeight * (contentWeight / totalWeight))
    }, [browserHeight])

    return layoutContentHeight
}
