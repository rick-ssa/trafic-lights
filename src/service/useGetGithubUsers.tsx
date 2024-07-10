import { useEffect, useState } from "react"
import { IGithubUser } from "../interfaces/IGithubUser"

const useGetGithubUsers = (githubLogins: string[]) => {
    const [githubUsers, setGithubUsers] = useState<IGithubUser[] | undefined>(
        undefined
    )

    useEffect(() => {
        if (githubLogins) {
            Promise.all(
                githubLogins.map((githubLogin) =>
                    fetch(`https://api.github.com/users/${githubLogin}`)
                )
            ).then((response) => {
                Promise.all(response.map((item) => item.json())).then(
                    (result) => {
                        const users: IGithubUser[] = result.map((res) => ({
                            githubName: res.login as string,
                            name: res.name as string,
                            linkImage: res.avatar_url as string,
                            linkBio: res.html_url as string,
                        }))
                        setGithubUsers(users)
                    }
                )
            })
        }
    }, [...githubLogins])

    return githubUsers
}

export default useGetGithubUsers
