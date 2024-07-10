import { FaGithub } from "react-icons/fa"
import { IGithubUser } from "../../../interfaces/IGithubUser"
import { Styles } from "../../../interfaces/TStyles"

export const GithubItemList = ({ githubUser }: { githubUser: IGithubUser }) => {
    const styles: Styles = {
        link: {
            display: "flex",
            flex: 1,
            alignItems: "center",
            backgroundColor: "beige",
            borderRadius: "4px",
            textDecoration: "none",
            margin: "2px 0",
        },
        img: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            margin: "5px",
        },
        info: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
        },
        title: {
            display: "flex",
            flex: 1,
            alignItems: "center",
            margin: 0,
            color: "black",
        },
        githubIcon: {
            padding: "2px 2px 2px 0",
        },
        name: {
            color: "black",
            fontSize: "0.8rem",
        },
    }
    return (
        <a style={styles.link} href={githubUser.linkBio} target="_blank">
            <img style={styles.img} src={githubUser.linkImage} alt={"user"} />
            <div style={styles.info}>
                <h5 style={styles.title}>
                    <FaGithub style={styles.githubIcon} />{" "}
                    {githubUser.githubName}
                </h5>
                <span style={styles.name}>{githubUser.name}</span>
            </div>
        </a>
    )
}
