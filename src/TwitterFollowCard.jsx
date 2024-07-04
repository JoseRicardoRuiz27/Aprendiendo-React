import "./TwitterFollowCard.css"

export function TwittweFollowCard({userName = `unknown`, children, isFollowing}) {
    const ternearea = isFollowing ? `siguiendo` : `seguir`
    const buttonClassName = isFollowing ?
       `tw-followCard-button is-following`
     : `tw-followCard-button`
    
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
                <button className={buttonClassName}>
                    {ternearea}
                </button>
            </aside>
        </article>
    )
}
