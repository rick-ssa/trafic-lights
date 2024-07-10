import TrafficLightDataObject from "../../../Data/arrayData"
import { Styles } from "../../../interfaces/TStyles"
import useGetGithubUsers from "../../../service/useGetGithubUsers"
import { GithubItemList } from "../../List/ItemList/GithubItemList"
import { List } from "../../List/List"

export const GithubList = () => {
    const githubUsers = useGetGithubUsers(
        TrafficLightDataObject.map((data) => data.githubName)
    )

    if (!githubUsers) {
        return null
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
            />
        </section>
    )
}
