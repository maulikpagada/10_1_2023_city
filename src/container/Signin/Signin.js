import React from 'react';
import { Form, Button, FormGroup, Label, Input, Container } from 'reactstrap'

function Login(props) {
    return (
        <div>
            <Container>
                <div className='signincontainer'>
                    <Form>
                        <FormGroup>
                            <Label for="exampleFullname">
                                Fullname
                            </Label>
                            <Input
                                id="exampleFullname"
                                name="Fullname"
                                placeholder="First Name"
                                type="Fullname"
                            />
                        </FormGroup>
 
                        <FormGroup>
                            <Label for="examplePhone Number">
                                Phone Number
                            </Label>

                            <Input
                                id="examplePhone Number"
                                name="Phone Number"
                                placeholder="Phone Number"
                                type="Phone Number"
                            />
                        </FormGroup>

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

                        <FormGroup>
                            <Label for="exampleRipet Password">
                                Ripet Password
                            </Label>

                            <Input
                                id="exampleRipet Password"
                                name="Ripet Password"
                                placeholder="Ripet Password"
                                type="Ripet Password"
                            />
                        </FormGroup>

                        <FormGroup>
                            <legend>
                                Select Gender
                            </legend>

                            <FormGroup check>
                                <Input
                                    name="radio2"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Male
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio2"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Female
                                </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleDate">
                                Date
                            </Label>
                            <Input
                                id="exampleDate"
                                name="date"
                                placeholder="date placeholder"
                                type="date"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCity">
                                City
                            </Label>
                            <Input
                                id="exampleCity"
                                name="city"
                                placeholder="city"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleState">
                                State
                            </Label>
                            <Input
                                id="exampleState"
                                name="state"
                                placeholder='state'
                            />
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                id="exampleCheck"
                                name="check"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="exampleCheck"
                            >
                                Check me out
                            </Label>
                        </FormGroup>
                        <Button>
                            Sign in
                        </Button>
                    </Form>
                </div>
            </Container>


        </div>
    );
}

export default Login;