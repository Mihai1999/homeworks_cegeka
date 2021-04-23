import React from 'react';
import { Form } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import * as actions from '../Actions//photoActions';
import {connect} from 'react-redux';


class PhotoForm extends React.Component {

  state = {
    error:false,
    modalOpen:false,
    photo:{
      title:'',
      description:'',
      url:'',
    }
  }

  handleInputChange = (name, value) => {
    console.log([name], value)
    const {photo} = this.state
    const updatedPhoto = {
      ...photo,
      [name]: value

    }
    this.setState({
      photo: updatedPhoto
    })

  }

  isNewForm = () => {
    if(this.props.formType == 'add') return true;
  }

  isValid = () => {
    const {photo} = this.state;

    if(photo == undefined) return false;
    if(photo.url == '') return false;
    if(photo.title == '') return false;
    if(photo.description == '') return false;

    return true;

  }

  onSubmit = (event) =>{
    if(!this.isValid()){
      this.setState({error:true});
      return;
    }
    this.setState({error:false});

    const {updatePhoto, createPhoto, index} = this.props;
    const {photo} = this.state;

    if(this.isNewForm()){
      //createPhoto(photo);
      createPhoto(photo);
    }
    else{
      console.log(index, photo);
      //editPhoto(index, photo);
      updatePhoto(index, photo);
    }
    

    this.closeForm();

  }

  showForm = () => {
    console.log(this.props);
    const key = this.props.index;
    const photo = this.props.photos[key];
    this.setState({
      modalOpen:true,
      photo,
    });
  
  }

  closeForm = () => {
    this.setState({modalOpen:false});
  }

  render(){
    const{modalOpen, photo, error} = this.state;

    return(
      <Modal
        
        style={{marginTop: "0px"}}
        trigger={
          <Button icon onClick={this.showForm}>
            <Icon name={this.isNewForm() ? 'plus' : 'edit'}/>
          </Button>
        }
        closeIcon
        open={modalOpen}
        onClose={this.closeForm}
      >
        <Modal.Header>
          {this.isNewForm() ? 'Add New Photo' : `Edit Photo ${photo.title}` }
        </Modal.Header>
        <Modal.Content>
          <Form error={error}>
            <Message
              error
              content='Complete all the form cells'/>

              <Form.Input
                name="title"
                label="Title"
                placeholder=""
                defaultValue={this.isNewForm() ? null : photo.title}
                required
                onChange = {(e) => this.handleInputChange(e.target.name, e.target.value)}
              />

              <Form.TextArea
                name="description"
                label="Description"
                placeholder=""
                defaultValue={this.isNewForm() ? null : photo.description}
                required
                onChange = {(e) => this.handleInputChange(e.target.name, e.target.value)}
              />

              <Form.Input
                name="url"
                label="URL"
                placeholder=""
                defaultValue={this.isNewForm() ? null : photo.url}
                required
                onChange = {(e) => this.handleInputChange(e.target.name, e.target.value)}
              />


          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={(e) => this.onSubmit(e)}>{this.isNewForm() ? 'Add': 'Save changes'}</Button>
        </Modal.Actions>

      </Modal>
    )

  }



}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePhoto: key => dispatch(actions.PhotoDeleted(key)),
    updatePhoto: (key, photo) => dispatch(actions.PhotoUpdated(key, photo)),
    createPhoto: photo => dispatch(actions.PhotoAdded(photo)),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);

