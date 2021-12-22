import React  from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import {posts} from './Posts'

const PostDetail = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const single = posts[id-1] ;

    console.log(id);

    const goBack = () => {
        navigate(-1,{
            replace : true 
        })
    }

    return (
        <div>
            <h3>Post no : {single.id}</h3>
            <h1>{single.name}</h1>
            <p>{single.post}</p>
            <button
                onClick={goBack}
            >
                go back
            </button>
        </div>
    )
}

export default PostDetail
