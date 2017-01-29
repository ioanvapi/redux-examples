import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';

import {createPost} from '../actions';

// const categoriesRequired = value => value ? undefined : 'Enter a category';
const fieldRequired = message => value => value ? undefined : message;


const renderInput = ({input, label, type, meta: {touched, error, invalid}}) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            <div className="help-block">
                {touched && (error && <span className="error">{error}</span>)}
            </div>
        </div>
    </div>
);

const renderTextarea = ({input, label, type, meta: {touched, error, invalid}}) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <label className="control-label">{label}</label>
        <div>
            <textarea {...input} placeholder={label} type={type} className="form-control"/>
            <div className="help-block">
                {touched && (error && <span className="error">{error}</span>)}
            </div>
        </div>
    </div>
);


class PostNew extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h3>Create A New Post</h3>
                <Field name="title"
                       component={renderInput}
                       type="text"
                       label="Title"
                       validate={[fieldRequired('Enter a title')]}
                />
                <Field name="categories"
                       component={renderInput}
                       type="text"
                       label="Categories"
                       validate={[fieldRequired('Enter a category')]}
                />
                <Field name="content"
                       component={renderTextarea}
                       type="textarea"
                       label="Content"
                       validate={[fieldRequired('Enter a post content')]}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {};
    console.log('values', values);
    if (!values.title) {
        errors.title = 'Enter a title';
    }

    return errors;
};

export default reduxForm({
    form: 'PostsNewForm',
    onSubmit: createPost,
    validate
})(PostNew);

