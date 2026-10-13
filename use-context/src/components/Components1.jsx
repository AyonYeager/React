import React , {useContext} from 'react'
import { counterContext } from '../context/context'

const Components1 = ()=>{
    const  counter = useContext(counterContext)
    return(
        <>
    <div>
        {counter}
    </div>
    </>
    )
}

export default Components1