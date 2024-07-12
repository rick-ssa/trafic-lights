import TrafficLightDataObject from "../../../Data/arrayData"
import { useLayoutContentHeight } from "../../../hooks/useLayoutContentHeight"
import { Styles } from "../../../interfaces/TStyles"
import useGetGithubUsers from "../../../service/useGetGithubUsers"
import { GithubItemList } from "../../List/ItemList/GithubItemList"
import { List } from "../../List/List"

export const GithubList = () => {
    const layoutContentHeight = useLayoutContentHeight({
        contentWeight: 7,
    })

    const userNames = TrafficLightDataObject.map((data) => data.githubName)
        .sort()
        .reduce((prev: string[], userName, index, arr) => {
            if (index === 0 || arr[index - 1] !== userName) {
                prev.push(userName)
                return prev
            }
            return prev
        }, [])
    const githubUsers = useGetGithubUsers(userNames)

    if (!githubUsers) {
        return null
    }

    const listHeight = layoutContentHeight * 0.7

    const styles: Styles = {
        section: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            overflow: "auto",
        },
    }
    return (
        <section style={styles.section}>
            <List
                title={"Contributors"}
                items={githubUsers}
                resourceName="githubUser"
                itemComponent={GithubItemList}
                id={"githubName"}
                height={listHeight}
            />
        </section>
    )
}
