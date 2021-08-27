import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://i.redd.it/v0caqchbtn741.jpg'/>
            {props.message}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    );
}

export default Post;