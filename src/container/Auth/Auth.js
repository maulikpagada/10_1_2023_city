import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, FormGroup, Label, Input, Container } from 'reactstrap';

function Auth(props) {

    const [type, setType] = useState('Signup');
    const [reset, setReset] = useState(false);

    return (
        <div>
            <Container>
                <div className='signincontainer'>
                    <Form>
                        {
                            reset ? <h2>Reset Password</h2>
                                :
                                type === 'Signup' ? <h2>Signup</h2> : <h2>Login</h2>
                        }



                        {
                            reset === true ?
                                null :
                                type === 'Signup' ?
                                    <FormGroup>
                                        <Label for="exampleFullname">
                                            Fullname
                                        </Label>
                                        <Input
                                            id="exampleFullname"
                                            name="Fullname"
                                            placeholder="Full Name"
                                            type="Fullname"
                                        />
                                    </FormGroup>
                                    :
                                    null

                        }


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

                        {
                            reset === true ?
                                null :
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
                        }


                        {
                            type === 'Signup' ?
                                <button>
                                    Signup
                                </button>
                                :
                                <button>
                                    Login
                                </button>
                        }

                    </Form>


                    <div className='msg'>
                        {

                            type === 'Signup' ?
                                <a onClick={() => { setType('Login'); setReset(false) }}><p>already have account? Login</p></a>
                                :
                                <>
                                    <a onClick={() => { setType('Signup'); setReset(false) }}><p>create an account? Signup</p></a>
                                    <a onClick={() => { setReset(true) }}><p>Forget Password</p></a>
                                </>    
                        }



                    </div>
                </div>

            </Container>
        </div>
    );
}

export default Auth;