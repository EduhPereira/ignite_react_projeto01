import style from "./style.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={style.profile}>
                <img 
                    src="https://github.com/EduhPereira.png" 
                />
                <strong>Eduardo Pereira</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}