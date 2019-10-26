import React from 'react'
import 'antd/dist/antd.css';
import './App.css'
import UserList from "./component/UserList";
import AddUser from "./component/AddUser"
import {Layout} from 'antd'

const App = () => {
    return (
        <div>
            <Layout className="layout">
                <AddUser/>
                <UserList/>
            </Layout>
            
        </div>
    )
}

export default App
