import React, { useState, useContext, useEffect } from "react";
import { FeedAdd, FeedContainer, FeedContent, FeedHeader, FeedMenu, FeedTitle } from "./FeedElements";
import { LikeOutlined, DislikeOutlined, CommentOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Button, Form } from 'antd';
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/PostService";

const { Meta } = Card;
const { TextArea } = Input;

const Feed = () => {
    const { isAuth, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (isAuth === false){
            navigate("/login");
        }
    }, [isAuth])

    function onFinish(value) {
        console.log(value)
        var params = {
            "text": value.postText,
            "user_id": user.id,
            "parent_id": '',
            "date": new Date(),
            "attachements": '',
            "likes": '',
            "dislike": ''
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

                <Card
                    style={{ width: 400, marginBottom: 15 }}
                    actions={[
                        <LikeOutlined key="like" />,
                        <DislikeOutlined key="dislike" />,
                        <CommentOutlined key="comment" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://www.japanfm.fr/wp-content/uploads/2022/12/Yamato-scaled.jpg" />}
                        title="Ayuuub"
                        description="Wsh c'est un truc de fou comment je suis trop cho en FRONT"
                    />
                </Card>

                <Card
                    style={{ width: 400, marginBottom: 15 }}
                    actions={[
                        <LikeOutlined key="like" />,
                        <DislikeOutlined key="dislike" />,
                        <CommentOutlined key="comment" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://media.sellfy.com/images/16AULvJ2/eAM1/Anthro_Eastern_Dragon_Base_Example.jpg" />}
                        title="Khais"
                        description="Ca cree une base de donnée en vif la ?"
                    />
                </Card>

                <Card
                    style={{ width: 400, marginBottom: 15 }}
                    actions={[
                        <LikeOutlined key="like" />,
                        <DislikeOutlined key="dislike" />,
                        <CommentOutlined key="comment" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://fr.web.img4.acsta.net/r_654_368/newsv7/19/10/03/15/43/2838505.jpg" />}
                        title="Ahmed"
                        description="Donnez moi du taff wsh je m'ennuie la"
                    />
                </Card>
            </FeedContent>
        </FeedContainer>
    )
}

export default Feed;