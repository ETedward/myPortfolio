import React from 'react';
import Hero from '../components/Hero';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Content from '../components/content';
import Axios from 'axios';

// change to a component because needs state
class ContactPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            sent: null,
        }
    }
    // now we make the functions for handleSubmit and handleChange used below

    handleChange = (event) => 
    {
        //console.log(event);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState ({
        [name]:value 
        })
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(event.target);
        this.setState({
            disabled: true,
        })

        // this.state is what we are passing in
        Axios.post('http://localhost:3030/api/mail', this.state)
        .then(res => {
            if (res.data.success)
            {
                this.setState({
                    disabled: false,
                    sent: true
                })
            }
            else 
            {
                this.setState({
                    disabled: false,
                    sent: false
                })
            }
        })
        .catch(err => {
            this.setState({
                disabled: false,
                emailSent: false
            })
        })
    }

    render() 
    {
        return (
            <div>
                <Hero title ={this.props.title}/>
                <Content> 
                    <Form onSubmit = {this.handleSubmit}>
                        <Form.Group>
                            <Form.Label> Full Name </Form.Label>
                            <Form.Control id = "full-name" name = "name" type = "text" value = {this.state.name} onChange = {this.handleChange}/>
                        </Form.Group> 

                        <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control id = "email" name = "email" type = "email" value = {this.state.email} onChange = {this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label> Message </Form.Label>
                        <Form.Control id = "message" name = "message" as = "textarea" type = "message" value = {this.state.message} rows = "3" onChange = {this.handleChange}/>
                        </Form.Group>

                        <Button className = "d-inline-block" variant = "primary" type = "submit" disabled = {this.state.disabled}> 
                            Send 
                        </Button>

                        {this.state.sent === true && <p className="e-inline success-msg">Email Sent</p>}
                        {this.state.sent === false && <p className="e-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        )
    }
}

export default ContactPage