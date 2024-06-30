import { GithubContactProp } from "../Layout/Github/GithubContact"

const useGetGithubUsers = () => {
    const fetchUser = async (user: string) => {
        const response = await fetch(`https://api.github.com/users/${user}`)
        if (response.ok) {
            const result = await response.json()
            return {
                githubName: result.login as string,
                name: result.name as string,
                linkImage: result.avatar_url as string,
                linkBio: result.html_url as string,
            }
        }
    }

    return async (
        users: string[]
    ): Promise<(GithubContactProp | undefined)[]> => {
        if (users.length === 0) {
            return []
        }
        const result = await Promise.all(users.map((user) => fetchUser(user)))
        return result.filter((user) => Boolean(user))
    }
}

export default useGetGithubUsers
