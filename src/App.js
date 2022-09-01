import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import AddTask from './components/AddTask';

const { Header, Content, Footer} = Layout;

function App() {
  const [tasklist, setTaskList] = useState();
  return (
    <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Three-Do</Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
        <Menu.Item key="3">Sign Up</Menu.Item>
      </Menu>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <div className="site-layout-content">
        <h1>Three-do</h1>
        <TodoList tasklist={tasklist} setTaskList={setTaskList} />
        <AddTask setTaskList={setTaskList} />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Three-Do ©2022 Created by Mason 
    </Footer>
  </Layout>
  );
}

export default App;
