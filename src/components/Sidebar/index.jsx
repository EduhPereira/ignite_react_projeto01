import style from "./style.module.css"

export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={style.profile}>
                <strong>Eduardo Pereira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">Editar Perfil</a>
            </footer>
        </aside>
    )
}