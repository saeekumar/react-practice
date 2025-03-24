import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(mobile, password, "after submit")
    }

    return (
        <>
            <Container className=' mt-5'  >
                <Row className='justify-content-md-center' >
                    <Col md={6}  >
                        <h2>Login</h2>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group>
                                <Form.Label>Mobile Number :</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter your mobile number'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password :</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button type='submit' className='mt-3' >Login</Button>
                        </Form>
                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default Login
