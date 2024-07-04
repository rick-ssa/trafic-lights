import { useEffect, useState } from "react"
import "./styles.css"
import { FaGithub } from "react-icons/fa"
import useGetGithubUsers from "../../../service/useGetGithubUsers"

export interface GithubContactProp {
    name: string
    githubName: string
    linkImage: string
    linkBio: string
}
const GithubContact = ({ githubName }: { githubName: string }) => {
    const [contact, setContact] = useState<GithubContactProp>()
    const getGithubUsers = useGetGithubUsers()

    useEffect(() => {
        if (githubName) {
            getGithubUsers([githubName]).then((response) => {
                if (response && response.length > 0) {
                    setContact(response[0])
                }
            })
        }
    }, [githubName])

    if (!contact) {
        return <div className="github-contact-container"></div>
    }

    const { linkImage, linkBio, name } = contact

    return (
        <div className="github-contact-container">
            <div className="github-contact-avatar">
                <img src={linkImage} alt="github avatar" />
            </div>
            <div className="github-contact-personal">
                <span>{name}</span>
                <a href={linkBio} target="_blank" rel="noreferrer">
                    <FaGithub className="github-ico" /> {githubName}
                </a>
            </div>
        </div>
    )
}

export default GithubContact
