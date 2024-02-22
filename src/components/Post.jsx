import { Link } from "react-router-dom";
import "./Post.css";
import { useEffect, useState } from "react";
import baseurl from "../Api";
import axios from "axios";

const Post = ({img}) => {
  var[users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get(baseurl + "/write/writeview")
    .then(response =>{
      console.log("sjbdja")
        console.log(response.data)
        setUsers(response.data)
    })
    .catch(err=>console.log(err))
},[])




  return (
    <div className="post">
      {users.map((value, index) => (
              <div key={index}>
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/Posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/Posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/Post/abc" className="link">
           Beach
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc" >
      {/* A beach is a narrow, gently sloping strip of land that lies along
        A beach is a narrow, gently sloping strip of land that lies along the edge 
        of an ocean, lake, or river. Materials such as sand, pebbles, rocks, and 
        seashell fragments cover beaches. Most beach materials are the products
         of weathering and erosion.
         the edge of an ocean, lake, or river. Materials such as sand, 
         pebbles, rocks, and seashell fragments cover beaches. Most beach materials 
         are the products of weathering and erosion. */}
      </p>
    </div>
      ))}
    </div>
  );
}

export default Post