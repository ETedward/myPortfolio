import React from 'react';
import Hero from '../components/Hero';
import Form from 'react-bootstrap/Form';

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
    render() 
    {
        return (
            <div>
                <Hero title ={this.props.title} />
                <Content> 
                    <Form>
                        <Form.Group>
                            <Form.Label> Full Name </Form.Label>
                        </Form.Group> 
                    </Form>
                </Content>
            </div>
        )
    }
}

export default ContactPage