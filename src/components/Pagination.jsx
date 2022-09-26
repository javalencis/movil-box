import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import '../styles/Pagination.scss'

export const Pagination = ({offset,setOffset,usersAux}) => {

    const { pagination} = useContext(AppContext)

    const pages= Math.ceil(usersAux.length/pagination)
    const handleBeforePage = () => {
        setOffset((offset)=> (offset>1)?(offset-1):0)
    }
    const handleAfterPage = () => {
        if (offset + 1 < pages){
            setOffset(offset + 1)
        }
        
    }

    return (
        <div className="Pagination">
            
            <button onClick={handleBeforePage}>{'<'}</button>
            <div className="pages">
                <p> <span> {offset + 1}</span> de {pages}</p>
            </div>
            <button onClick={handleAfterPage}> {'>'} </button>
        </div>
    )
}
