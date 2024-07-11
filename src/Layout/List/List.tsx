interface ListProps<T> {
    title: string
    items: Array<T>
    resourceName: string
    itemComponent: any
    id: keyof T
    height?: number | string
}

export const List = <T,>({
    title,
    items,
    resourceName,
    itemComponent: ItemComponent,
    id,
    height = "inherit",
}: ListProps<T>) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
                {title}
            </h3>
            <ul
                style={{
                    margin: 0,
                    padding: 0,
                    height,
                    overflow: "auto",
                }}
            >
                {items.map((item) => {
                    return (
                        <li
                            style={{ listStyle: "none" }}
                            key={item[id] as string}
                        >
                            <ItemComponent {...{ [resourceName]: item }} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
