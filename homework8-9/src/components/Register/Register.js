import React from 'react';
import { Form, Button, Segment, Grid, Header, Image, Message } from 'semantic-ui-react';


class Register extends React.Component{

  state = {
    error: false,
    users: {},
    user: {
      username:'',
      password:'',
    },
  }

  isLoginForm = () => this.props.formType == "login";


  componentWillMount(){
    const localUsers = localStorage.getItem('users');
    console.log("localUsers: ", localUsers);
    var users = {}
    if(localUsers){
      users = JSON.parse(localUsers);
      
    }

    this.setState({
      users: users
    })

    console.log("storage users ", users);
    console.log(this.isLoginForm());
  }

  handleInputChange(property, value) {
    const user = {...this.state.user}
    const userRegister = {
      ...user,
      [property]: value
    }

    this.setState({
      user: userRegister
    })

  } 

  submitLogin(){
    const users = {...this.users};
    const user = {...this.user};

    if(!user && !users) return false;
    if(user in users) return true;

    return false;
    
  }

  submitRegister(){
    const users = {...this.users};
    console.log(typeof users)
    const timestamp = Date.now();
    users[`${timestamp}`] = {...this.state.user};
    this.setState({
      users
    })
    
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);

  }

  submitForm(){
    if(this.isLoginForm()){
      this.submitForm();
    }

    this.submitRegister();
  }

  redirectTo(){
    if(this.isLoginForm()){
      return(
        <a href="http://localhost:3000/register">Don't have an account?</a>
      );
    }

    return (
      <a href="http://localhost:3000/login">Already have an account?</a>
    )
  }
  
  render(){
    return (
      <Grid textAlign='center' style={{ height:'50vh'}}  verticalAlign='middle' > 
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
           {this.isLoginForm()? 'Login':'Register'}
          </Header>
          <Segment >
            <Form >
              <Form.Input 
                name="username"
                label="Username"
                required
                onChange={(e) => this.handleInputChange(e.target.name, e.target.value)}
              />
              <Form.Input
                name="password"
                label="Password"
                type="password"
                required
                onChange={(e) => this.handleInputChange(e.target.name, e.target.value)}
              />
              <Button type="Submit" onClick={(e) => this.submitForm()}>Submit</Button>
            </Form>
            <div>
              {this.redirectTo()}
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
    )
    
  }
}
export default Register;
