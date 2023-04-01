import style from "./style.module.css"

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/EduhPereira.png" />
                    <div className={style.authorInfo}>
                        <strong>Eduardo Pereira</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title="31 de março de 2023" dateTime="2023-03-31 23:33:30">
                    Publicado há 1h
                </time>
            </header>

            <div className={style.content}>
                <p>Paragraph 01</p>
                <p>Paragraph 02</p>
                <p>Paragraph 03</p>
            </div>
        </article>
    )
}
