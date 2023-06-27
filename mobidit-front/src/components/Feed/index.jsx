import React, { useState } from "react";
import { FeedAdd, FeedContainer, FeedContent, FeedHeader, FeedMenu, FeedTitle } from "./FeedElements";
import { LikeOutlined, DislikeOutlined, CommentOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Button, Form } from 'antd';

const { Meta } = Card;
const { TextArea } = Input;

const Feed = () => {

    const [postText, setPostText] = useState("")

    function handlePostText(e) {
        setPostText(e.target.value)
    }

    function handleSubmit(e) {
        console.log(postText)
    }

    return (
        <FeedContainer>
            <FeedHeader>
                <FeedTitle>Mobidit</FeedTitle>
            </FeedHeader>
            <FeedContent>
                <Form onFinish={handleSubmit}>
                    <Card
                        style={{ width: 400, marginBottom: 15, }}
                    >
                        <Meta
                            avatar={<Avatar src="https://www.japanfm.fr/wp-content/uploads/2022/12/Yamato-scaled.jpg" />}
                            title="Ayuuub"
                        />
                        <Form.Item
                            name="postText"
                            rules={[{ required: true, message: '' }]}
                        >
                            <TextArea
                                showCount
                                maxLength={150}
                                style={{ height: 100, resize: 'none', marginTop: 15 }}
                                placeholder="disable resize"
                                onChange={handlePostText}
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