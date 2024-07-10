interface ListProps<T> {
    title: string
    items: Array<T>
    resourceName: string
    itemComponent: any
    id: keyof T
}

export const List = <T,>({
    title,
    items,
    resourceName,
    itemComponent: ItemComponent,
    id,
}: ListProps<T>) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
                {title}
            </h3>
            <ul style={{ flex: 1, margin: 0, padding: 0 }}>
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
