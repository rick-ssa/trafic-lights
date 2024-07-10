import { useState } from "react"
import "./styles.css"
import { FaGithub } from "react-icons/fa"
import useGetGithubUsers from "../../../service/useGetGithubUsers"
import { IGithubUser } from "../../../interfaces/IGithubUser"

const GithubContact = ({ githubName }: { githubName: string }) => {
    const [contact, setContact] = useState<IGithubUser>()
    const githubUsers = useGetGithubUsers([githubName])

    if (githubUsers && githubUsers[0].githubName !== contact?.githubName) {
        setContact(githubUsers[0])
    }

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
                    <FaGithub className="github-ico" /> {contact.githubName}
                </a>
            </div>
        </div>
    )
}

export default GithubContact
