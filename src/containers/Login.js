import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import './Login.css'
import { login, authority } from '../services/todos';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          mobile: '17044445555',
          password: '68cf63c62bc68d71fc41c028375e2f6e',
          client_id: "5a195042728a93d1205d9c319fe5a66d",
          client_secret: "07bb83329b6d29473725d94079f19082"
        }
        login(data).then(res => {
          if (res.data.status === 1) {
            const user = res.data.result
            window.localStorage.setItem(
              "userInfo",
              JSON.stringify({
                name: user.name,
                mobile: user.mobile,
                id: user.id,
                access_token: user.access_token
              })
            )
            authority().then(res => {
              if (res.data.status === 1) {
                window.localStorage.setItem('authInfo', JSON.stringify(res.data.result))
                message.info('登陆成功！')
                this.props.history.push('/todos')
              } else {
                message.error(res.data.message || '获取权限失败')
              }
            })
          } else {
            message.error(res.data.message)
          }
        })
      } else {
        console.log("error submit!!")
        return false
      }

    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/home">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/home">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm