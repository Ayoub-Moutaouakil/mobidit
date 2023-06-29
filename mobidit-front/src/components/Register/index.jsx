import React, { useState, useContext, useEffect } from "react";
import { RegisterContainer, RegisterTitle, RegisterWrapper } from "./RegisterElements";
import { Button, Form, Input, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
    const { isAuth, login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth === true){
            navigate("/")
        }
    }, [isAuth])

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    function handleSubmit() {
        console.log("test")
    }

    return (
        <RegisterContainer>
            <RegisterWrapper>
                <RegisterTitle>Inscription</RegisterTitle>
                <Form
                    name="register"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Pseudo"
                        name="username"
                        rules={[{ required: true, message: 'Veuillez entrer votre pseudo !' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: "Ce n'est pas une email valide !",
                            },
                            {
                                required: true,
                                message: 'Veuillez entrez votre email !',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mot de passe"
                        name="password"
                        rules={[{ required: true, message: 'Veuillez entrer votre mot de passe !' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    
                    <Form.Item
                        name="upload"
                        label="Photo de profil"
                        valuePropName="fileList"
                    >
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            S'inscrire
                        </Button>
                    </Form.Item>
                </Form>
            </RegisterWrapper>
        </RegisterContainer>
    )
}

export default Register;