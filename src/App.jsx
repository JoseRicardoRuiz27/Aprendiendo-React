import { TwittweFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: `JoseRicardoRuiz27`,
        name: `Jose Ricardo Ruiz`,
        isFollowing: true
    },
    {
        userName: `midudev`,
        name: `Miguel Angel Duran`,
        isFollowing: false
    },
    {
        userName: `TMChein`,
        name: `Tomas`,
        isFollowing: false
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(users => {
                    const { userName, name, isFollowing } = users
                    return (
                    <TwittweFollowCard
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwittweFollowCard>)
                })
            }
        </section>
    )
}