import React from 'react';
import { Form, Button, Segment, Grid, Header, Image, Message } from 'semantic-ui-react';


class Register extends React.Component{

  state = {
    error: false,
    userList: {},
    user: {
      username:'',
      password:'',
    },
  }

  isLoginForm = () => this.props.formType == "login";


  componentWillMount(){
    //const localUsers = localStorage.getItem('users');
    const localUsers = this.props.users;
    console.log("localUsers: ", localUsers);
    var users = localUsers;
    console.log(users);
    this.setState({
      userList: users
    })

  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem("users", JSON.stringify(nextState.userList));
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
    const users = {...this.userList};
    const user = {...this.user};

    if(!user && !users) return false;
    if(user in users) return true;

    return false;
    
  }

  submitRegister(){
    console.log("submit: ",{...this.userList});
    console.log("user storage ", localStorage.getItem("users"));
    const users =  JSON.parse(localStorage.getItem("users")) ;

    const timestamp = Date.now();
    
    users[`${timestamp}`] = {...this.state.user};
    this.setState({
      users
    })
    console.log("submit: ",users);
    

    

  }

  submitForm(){
    console.log("submit2: ",{...this.userList});
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

    const {users} = this.props;
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
