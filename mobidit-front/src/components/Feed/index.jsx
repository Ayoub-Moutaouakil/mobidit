import React, { useState, useContext, useEffect } from "react";
import { FeedAdd, FeedContainer, FeedContent, FeedHeader, FeedMenu, FeedTitle } from "./FeedElements";
import { LikeOutlined, DislikeOutlined, CommentOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Button, Form } from 'antd';
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { createPost, getAllPosts } from "../../services/PostService";
import { getUserName, getUserPhoto } from "../../services/UserService";

const { Meta } = Card;
const { TextArea } = Input;

const Feed = () => {
    const { isAuth, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [posts, setPosts] = useState([])
    const [test, setTest] = useState([1, 2, 3, 4, 5])

    useEffect(() => {
        if (isAuth === false) {
            navigate("/login");
        }
    }, [isAuth])

    useEffect(() => {
        getAllPosts(user.username).then((response) => {
            setPosts(response.data)
            console.log(posts)
        })
    }, [])

    function onFinish(value) {
        console.log(value)
        var params = {
            "text": value.postText,
            "user_id": user.id,
            "likes": 0,
            "dislike": 0
        }
        createPost(params).then((response) => {
            console.log(response)
        })
    }

    return (
        <FeedContainer>
            <FeedHeader>
                <FeedTitle>Mobidit</FeedTitle>
            </FeedHeader>
            <FeedContent>
                <Form onFinish={onFinish}>
                    <Card
                        style={{ width: 400, marginBottom: 15, }}
                    >
                        <Meta
                            avatar={<Avatar src={user.img_url} />}
                            title={user.username}
                        />
                        <Form.Item
                            name="postText"
                            rules={[{ required: true, message: '' }]}
                        >
                            <TextArea
                                showCount
                                maxLength={150}
                                style={{ height: 100, resize: 'none', marginTop: 15 }}
                                placeholder="Une envie de dire quelque chose ?"
                            />
                        </Form.Item>
                        <Button type="primary" shape="circle" icon={<PlusOutlined />} size={'large'} style={{ justifySelf: "center" }} htmlType="submit" />
                    </Card>
                </Form>

                {posts && posts.map((post) => {
                    var username = getUserName(post.user_id)
                    var avatar = getUserPhoto(post.user_id)
                    console.log(username)

                    return <Card
                        key={post.id}
                        style={{ width: 400, marginBottom: 15 }}
                        actions={[
                            <LikeOutlined key="like" />,
                            <DislikeOutlined key="dislike" />,
                            <CommentOutlined key="comment" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={avatar} />}
                            title={username}
                            description={post.text}
                        />
                    </Card>
                })}

            </FeedContent>
        </FeedContainer>
    )
}

export default Feed;