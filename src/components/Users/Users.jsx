import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../Assets/Images/6baa98cc1c3f4d76e989701746e322dd.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p);
                }} className={props.currentPage === p && s.selectedPage}> {p} </span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div className={s.userPhoto}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.isFollowed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "3f014ae2-0b25-43af-8288-6afc33da1556"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });

                        }}>unfollow </button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "3f014ae2-0b25-43af-8288-6afc33da1556"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });


                        }}> follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;