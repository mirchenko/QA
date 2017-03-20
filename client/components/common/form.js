import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from './';
import Validate from '../../utils/validate';
import * as actions from '../../actions';

class FormClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: {},
      author: '',
      title: '',
      text: '',
      id: this.props.idQuestion || null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { isValid, error } = Validate(this.state);
    this.setState({ error });
    if(isValid) {
      this.setState({ isLoading: true });
      this.props.submitAction(this.state)
        .then(res => {
          this.setState({ author: '', title: '', text: '', isLoading: false });
          const data = res.data;
          const id = this.state.id;
          if(id) {
            this.props.afterSubmitAction({ ...data, idQuestion: id });
          } else {
            this.props.afterSubmitAction(data);
          }

        })
        .catch(err => this.props.networkError());
    }

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { author, title, text, error, isLoading } = this.state;
    const { authorError, titleError, textError } = error;

    return(
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className={`form-group ${authorError ? 'has-error' : ''}`}>
          <input placeholder="Author..." name="author" value={author} onChange={this.handleChange} type="text"/>
          {authorError && <span>{authorError}</span>}
        </div>
        <div className={`form-group ${titleError ? 'has-error' : ''}`}>
          <input placeholder="Title..." name="title" value={title} onChange={this.handleChange} type="text"/>
          {titleError && <span>{titleError}</span>}
        </div>
        <div className={`form-group ${textError ? 'has-error' : ''}`}>
          <textarea placeholder="Text..." name="text" value={text} onChange={this.handleChange} type="text"/>
          {textError && <span>{textError}</span>}
        </div>
        <div className="form-group">
          <button action="submit">{isLoading ? <Spinner style={{height: '20px', width: '20px'}} /> : <span>Submit</span>}</button>
        </div>
      </form>
    );
  }
}

const Form = connect(null, actions)(FormClass);

export { Form };
