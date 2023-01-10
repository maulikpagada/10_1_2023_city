import React from 'react';
import { Form, FormGroup, Container, Label, Input, Button } from 'reactstrap'

function Login(props) {
    return (
        <div>
            <Container>
                <div className='logincontainer'>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>

                        <Input
                            id="exampleEmail"
                            name="Email"
                            placeholder="Email"
                            type="Email"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>

                        <Input
                            id="examplePassword"
                            name="Password"
                            placeholder="Password"
                            type="Password"
                        />
                    </FormGroup>

                    <FormGroup className='Forget'>
                        <Label for="ForgetPassword">
                            ForgetPassword
                        </Label>

                        <Input
                            id="ForgetPassword"
                            name="ForgetPassword"
                            placeholder="ForgetPassword"
                            type="ForgetPassword"
                        />

                        <Button color="danger">
                            ForgetPassword
                        </Button>

                        <Button color='success'>
                            Submit
                        </Button>
                    </FormGroup>
                </div>
            </Container>
        </div>
    );
}

export default Login;