import React from "react"
import { PostContainer } from "./PostElements";
import { LikeOutlined, DislikeOutlined, CommentOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Button, Form } from 'antd';

const { Meta } = Card;
const { TextArea } = Input;

const Post = () => {

    function onFinish () {
        console.log("test")
    }

    return (
        <PostContainer>
            <Card
                style={{ width: 400, height: "fit-content", marginTop: 15, marginBottom: 15 }}
                actions={[
                    <LikeOutlined key="like" />,
                    <DislikeOutlined key="dislike" />,
                    <CommentOutlined key="comment" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={"https://fr.web.img4.acsta.net/r_654_368/newsv7/19/10/03/15/43/2838505.jpg"} style={{ cursor: "pointer" }} />}
                    title={"Ayuuub"}
                    description={"Ceci est un post"}
                />
                <Form onFinish={onFinish}>
                    <Card
                        style={{ width: "100%", marginTop: 15, }}
                    >
                        <Meta
                            avatar={<Avatar src={"https://fr.web.img4.acsta.net/r_654_368/newsv7/19/10/03/15/43/2838505.jpg"} style={{ cursor: "pointer" }} />}
                            title={"Ayuuub"}
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
                    style={{ width: "100%", height: "fit-content", marginTop: 15 }}
                >
                    <Meta
                        avatar={<Avatar src={"https://fr.web.img4.acsta.net/r_654_368/newsv7/19/10/03/15/43/2838505.jpg"} style={{ cursor: "pointer" }} />}
                        title={"Khais"}
                        description={"Ceci est un commentaire"}
                    />
                </Card>
            </Card>
        </PostContainer>
    )
}

export default Post;