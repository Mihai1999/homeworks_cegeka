import React from 'react';
import { Button } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import {Message, Icon} from 'semantic-ui-react';


class AlbumForm  extends React.Component {

  state = {
    error: false,
    modalOpen:false,
    album:{
      name:'',
      description:'',
      tags:[],
      photosIds:[],
    }
  }

  handleInputChange = (name, value) => {
    const {album} = this.state
    const updatedAlbum = {
      ...album,
      [name]: value

    }

    this.setState({
      album: updatedAlbum
    })

  }

  isValid = () => {

    const {album} = this.state
    if(album == undefined) return false;
    if(album.name == '') return false;
    if(album.description == '') return false;

    return true;
  }

  onSubmit = (event) => {

    if(!this.isValid()){
      this.setState({ error: true})
      return;
    }
    this.setState({error: false})

    const {editAlbum, createAlbum, index} = this.props;
    const {album} = this.state;

    if(this.isNewForm()){
      createAlbum(album);
    }
    else {
      editAlbum(index, album);
    }


    this.closeForm()


  }

  showForm = () => {
    const {album} = this.props;
    this.setState({
      modalOpen: true,
      album,
    });
  } 

  
  closeForm = () => this.setState({
    modalOpen: false
  });
  isNewForm = () => this.props.formType == 'New';


  render(){
    const {modalOpen, album, error} = this.state;
    const {photos} = this.props;

    const options =  Object.keys(photos)
        .map( key =>
        {
          let photo = photos[key]
          return {
            text: photo.title,
            value: key,
            image:{avatar: true, src: photo.url}
          }
        });

    return(
      
      <Modal
        trigger={
          <Button icon onClick={this.showForm}>
            <Icon name={this.isNewForm() ?  'plus':'edit'}/>

          </Button>
        }
        closeIcon
        open={modalOpen}
        onClose={this.closeForm}
      >
      <Modal.Header>
        {this.isNewForm() ? 'Create Album' : `Edit: ${album.name}` }
      </Modal.Header>
      <Modal.Content>
        <Form error={error}>
          <Message
            error
            content='The form is incomplete'
          />
          <Form.Input
            name="name"
            label="Album Name"
            placeholder="Album"
            defaultValue={this.isNewForm() ? null : album.name}
            required
            onChange = {(e) => this.handleInputChange(e.target.name, e.target.value)}

          />
          <Form.TextArea
            name="description"
            label="Description"
            placeholder="Write something about album"
            defaultValue={this.isNewForm() ? null : album.description}
            onChange = {(e) => this.handleInputChange(e.target.name, e.target.value)}
          />
          <Form.Input
            name="tags"
            label="Tags"
            placehoder="Enter tags separated by ,"
            defaultValue={this.isNewForm() ? null : Object.values(album.tags).join(',')}
            icon="tags"
            iconPosition="left"
            onChange = {(e) => this.handleInputChange(e.target.name, e.target.value.split(','))}
          />
          <Form.Dropdown
            name="photosIds"
            label="Photos"
            placholder="Select album photos"
            defaultValue={this.isNewForm() ? '' : album.photosIds}
            fluid
            multiple
            selection
            options={options}
            onChange = {(e, data) => this.handleInputChange(data.name, data.value)}
          />

        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={(e) => this.onSubmit(e)}>{this.isNewForm() ? 'Add': 'Edit'}</Button>
        </Modal.Actions>

      </Modal>

   
    );
  }

}

export default AlbumForm;