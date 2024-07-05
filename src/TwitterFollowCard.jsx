import "./TwitterFollowCard.css"
import { useState } from "react"

export function TwittweFollowCard({userName = `unknown`, children, initialIsFollowing}) {
    const  [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const ternearea = isFollowing ? `siguiendo` : `seguir`
    const buttonClassName = isFollowing ?
       `tw-followCard-button is-following`
     : `tw-followCard-button`
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-img"
                    src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {ternearea}
                </button>
            </aside>
        </article>
    )
}
