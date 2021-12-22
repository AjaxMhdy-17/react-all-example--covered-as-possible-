import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Firebase from "../Firebase";
export const posts = [
  {
    id: 1,
    name: "post-1",
    post : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat vel veniam rerum cupiditate natus, sed debitis minus. Impedit, nesciunt molestias!'
  },
  {
    id: 2,
    name: "post-2",
    post : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat vel veniam rerum cupiditate natus, sed debitis minus. Impedit, nesciunt molestias!'
  },
  {
    id: 3,
    name: "post-3",
    post : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat vel veniam rerum cupiditate natus, sed debitis minus. Impedit, nesciunt molestias!'
  },
];

function Posts() {

  const navigate = useNavigate()

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
        if(user){
            console.log(user);
        }
        else{
          navigate('/signup')
        }
    })

},[])

  return (
    <div>
      posts
      {posts.map((single, index) => (
        <div key={index}>
          <Link to={`post/${single.id}`}>{single.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
