import "./App.css"
import { TwittweFollowCard } from "./TwitterFollowCard"

export function App(){
    return (
        <section className="App">
            <TwittweFollowCard
            isFollowing 
            userName="JoseRicardoRuiz27" name="Jose Ruiz"/>

            <TwittweFollowCard
            isFollowing={false}
            userName="RAm" name="jruiz"/>

            <TwittweFollowCard
            isFollowing
            userName="JoseRicardoRuiz27" name="Jose Ruiz"/>

            <TwittweFollowCard
            isFollowing 
            userName="JoseRicardoRuiz27" name="Jose Ruiz"/>

        </section>
    )
}