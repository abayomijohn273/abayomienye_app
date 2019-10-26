import React from 'react'
import {Layout, Table, Row, Col} from "antd";
import {useSelector} from 'react-redux'
const{Content} = Layout
const {Column, ColumnGroup} = Table;
const UserList = () => {
    const users = useSelector(state => state)
    return (
        <Content>
            <Row>
            <Col offset={2} span={20}>
            <Table dataSource={users}>
                <ColumnGroup title={<h2>Added Users</h2>}>
                    <Column title="First Name" dataIndex="firstname" key="firstname"/>
                    <Column title="Last Name" dataIndex="lastname" key="lastname"/>
                    <Column title="Birthday" dataIndex="birthday" key="birthday"/>
                    <Column title="Age" dataIndex="age" key="age"/>
                    <Column title="Hobby" dataIndex="hobby" key="hobby"/>
                </ColumnGroup>
            </Table>
            </Col>
            </Row>
        </Content>
    )
}

export default UserList;
