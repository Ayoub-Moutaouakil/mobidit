import React from "react";
import { LoginContainer, LoginTitle, LoginWrapper } from "./LoginElements";
import { Button, Form, Input } from 'antd';

const Login = () => {

    function handleSubmit () {
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
                        label="Pseudo"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mot de passe"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login;