import axios from 'axios';
import { React, useState } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confPassword) {
            alert("Password do not match")
            return
        }

        console.log("updated values on submit", email, phone, password, confPassword);
        try {
            const resp = await axios.post("http://localhost:2000/employee",
                {
                    first_name: firstName,
                    last_name: lastName,
                    email_id: email,
                    phone: phone,
                    password: password
                }
            )
            console.log(resp.data, "data");
            alert(resp.data.message)
        } catch (error) {
            console.log(error.response.data, "error");
            alert(error.response.data.message)


        }


    }


    return (
        <>
            <Container>
                <Row className='justify-content-md-center' >
                    <Col md={6} className='mt-5'>
                        <h2  >Signup</h2>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="emailControl">
                                <Form.Label>First Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="emailControl">
                                <Form.Label>Last Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </Form.Group>

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
