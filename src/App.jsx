import "./App.css"
import { TwittweFollowCard } from "./TwitterFollowCard"

export function App(){
    return (
        <section className="App">
            <TwittweFollowCard 
            userName="JoseRicardoRuiz27" initialIsFollowing={true}>
                JoRuiz
            </TwittweFollowCard>

            <TwittweFollowCard>
              Ramiro Luca  
            </TwittweFollowCard>

            <TwittweFollowCard
            userName="JoseRicardoRuiz27" >
                JoRuiz
            </TwittweFollowCard>

            <TwittweFollowCard
            userName="JoseRicardoRuiz27" >
                JoRuiz
            </TwittweFollowCard>

        </section>
    )
}