import React from "react";
import { LoginContainer, LoginTitle, LoginWrapper } from "./LoginElements";
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login = () => {

    function handleSubmit() {
        console.log("test")
    }

    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginTitle>Mobidit</LoginTitle>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Veuillez entrez votre pseudo !' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Veuillez entrez votre mot de passe !' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Mot de Passe"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Se connecter
                        </Button>
                        <br/>
                        <br/>
                        <a href="">Devenir membre !</a>
                    </Form.Item>
                </Form>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login;