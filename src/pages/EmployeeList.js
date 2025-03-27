import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const EmployeeList = () => {
    const [employeeList, setEmployeesList] = useState('')

    useEffect(() => {
        console.log("called effect");

    })


    return (
        <>
            <Container >
                <Row className='justify-content-center mt-5' >
                    <Col md={8}>

                        <h2>Employees List</h2>
                        <Table striped bordered hover size="sm" className='mt-3'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EmployeeList
