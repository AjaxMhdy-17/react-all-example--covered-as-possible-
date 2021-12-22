import React , {useContext} from 'react'
import { CtxOfDev } from '../../../CtxAndReducer/CtxAndReducer'

const Profile = () => {

    const ctx = useContext(CtxOfDev)

    const styl = {
        display : 'flex' , 
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        margin : "20px 0"

    }

    return (
        <div style={styl}>
            <h3>user name : {ctx.userName}</h3>
            <h4>user email : {ctx.userEmail}</h4>
        </div>
    )
}

export default Profile
