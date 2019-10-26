import React from "react";
import {Layout,Row, Col, Form, Input,InputNumber,DatePicker, Button} from 'antd'
import {useDispatch} from 'react-redux'

const {Content} = Layout

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
      
const User = (props) => {
    const dispatch = useDispatch();
    const {getFieldDecorator} = props.form;
    const handleSubmit = (e) => {
        const {form} = props
        e.preventDefault();
        let firstname = form.getFieldValue('firstname')
        let lastname = form.getFieldValue('lastname')
        let birthday = form.getFieldValue('birthday').format('YYYY-MM-DD')
        let age = form.getFieldValue('age')
        let hobby= form.getFieldValue('hobby')
        dispatch({
            type: 'ADD_USER',
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            age: age,
            hobby: hobby
        })
    }
    return (
      <Content>
      <Row>
        <Col span={18} offset={2}>
        <h2 className="formHeader">Please fill the form to add user</h2>
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item label="First Name">
                {getFieldDecorator('firstname', {
                    initialValue: "",
                    rules: [
                        {
                            type: "string",
                            required: true,
                            message: "Please input first name"
                        }
                    ]
                })(
                    <Input placeholder="First name" />
                )}
            </Form.Item>
            <Form.Item label="Last Name">
                {getFieldDecorator('lastname', {
                    initialValue: "",
                    rules: [
                        {
                            type: "string",
                            required: true,
                            message: "Please input last name"
                        }
                    ]
                })(
                    <Input placeholder="Last name" />
                )}
            </Form.Item>
            <Form.Item label="Birthday">{
                getFieldDecorator('birthday',{
                    rules:[{
                        type: 'object',
                        required: true,
                        message: "Please select your birth date"
                    }]
                })(<DatePicker/>
            )}
            </Form.Item>        
            <Form.Item label="Age">{
                getFieldDecorator('age',{
                    initialValue: 18,
                    rules:[{
                        type: 'number'
                    }]
                })(<InputNumber min={1} max={200} />
            )}
            </Form.Item>
            <Form.Item label="Hobby">
                {getFieldDecorator('hobby', {
                    initialValue: "",
                    rules: [
                        {
                            required: true,
                            message: "Please input your favourite hobby"
                        }
                    ]
                })(
                    <Input placeholder="Hobby" />
                )}
            </Form.Item>
            <Form.Item
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
              }}
            >
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form> 
      </Col>
      </Row>
      </Content>       
    )
}

const AddUser = Form.create({name: 'user'})(User);
export default AddUser
