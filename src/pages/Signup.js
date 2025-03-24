import { React, useState } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== confPassword) {
            return alert("Password do not match")
        }

        console.log("updated values on submit", email, phone, password, confPassword);

    }


    return (
        <>
            <Container>
                <Row className='justify-content-md-center' >
                    <Col md={6} className='mt-5'>
                        <h2  >Signup</h2>
                        <Form onSubmit={handleSubmit} >
                            {/* email */}
                            <Form.Group className="mb-3" controlId="emailControl">
                                <Form.Label>Email address :</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            {/* phone */}
                            <Form.Group className="mb-3" controlId="phoneControl">
                                <Form.Label>Phone Number :</Form.Label>
                                <Form.Control type="number" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>

                            {/* password */}
                            <Form.Group className="mb-3" controlId="passwordControl">
                                <Form.Label>Password :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            {/* confirm password */}
                            <Form.Group className="mb-3" controlId="confirmpasswordControl">
                                <Form.Label>Re enter password :</Form.Label>
                                <Form.Control type="text" placeholder="Re enter password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            </Form.Group>

                            <Button variant='primary' type='submit' className='mt-3' >Signup</Button>
                        </Form>
                    </Col>

                </Row>

            </Container>
        </>

    )
}

export default Signup
