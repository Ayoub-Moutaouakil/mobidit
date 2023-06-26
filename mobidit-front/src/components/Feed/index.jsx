import React from "react";
import { FeedContainer, FeedContent, FeedHeader, FeedMenu, FeedTitle } from "./FeedElements";
import { LikeOutlined, DislikeOutlined, CommentOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const Feed = () => {
    return (
        <FeedContainer>
            <FeedHeader>
                <FeedTitle>Mobidit</FeedTitle>
            </FeedHeader>
            <FeedContent>
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