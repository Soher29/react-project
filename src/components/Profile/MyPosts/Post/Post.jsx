import React from 'react'
import s from './Post.module.css';

const Post = (props) => {

 return (

        <div className={s.item}>
            <img src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg'/>
            <div>
                {props.message}
                <span>like</span> {props.likesCount}
            </div>
        </div>

    
    );
}

export default Post;
