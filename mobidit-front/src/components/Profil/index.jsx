import React, { useState } from 'react'
import { ProfilContainer, ProfilContent, ProfilHeader, ProfilTitle } from './ProfilElements'
import { Avatar } from 'antd';

const Profil = () => {

    const [posts, setPosts] = useState([1,2,3,4,5])

    var user = {
        username: "Ayuuub",
        img_url: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/06/yamato2.jpeg"
    }
    
    return(
        <ProfilContainer>
            <ProfilHeader>
                <Avatar size={100} src={user.img_url}/>
                <ProfilTitle>{user.username}</ProfilTitle>
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