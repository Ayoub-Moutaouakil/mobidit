import React, { useEffect, useState, useContext } from 'react'
import { ProfilContainer, ProfilContent, ProfilHeader, ProfilTitle } from './ProfilElements'
import { Avatar } from 'antd';
import { AuthContext } from '../../contexts/AuthContext';
import { useLocation, useNavigate } from "react-router-dom";

const Profil = () => {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const {state} = useLocation();
    const { img, username } = state
    const [posts, setPosts] = useState([1,2,3,4,5])

    useEffect(() => {
        if (isAuth === false) {
            navigate("/login");
        }
    }, [isAuth])
    
    return(
        <ProfilContainer>
            <ProfilHeader>
                <Avatar size={100} src={img}/>
                <ProfilTitle>{username}</ProfilTitle>
            </ProfilHeader>
            <ProfilContent>
                {posts && posts.map((post) => {
                    return <h1>{post}</h1>
                })}
            </ProfilContent>
        </ProfilContainer>
    )
}

export default Profil