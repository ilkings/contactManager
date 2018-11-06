import React, {Component} from 'react';
import { Consumer } from '../../context';
import { TextInputGroup } from '../layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';


class EditContact extends Component {

    state = {
        id:'',
        name:'',
        email:'',
        phone:'',
        errors:{}
    }

    onChange = e => {this.setState({[e.target.name]:e.target.value})}

    async componentDidMount() {

        const { id } = this.props.match.params;

        // axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(res=>this.setState({
        //         name:res.data.name,
        //         email:res.data.email,
        //         phone:res.data.phone,
        //     }));

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone,
        })
    }


    onSubmit = async (dispatch,e) => {
        e.preventDefault();

        const {name,email,phone} = this.state;

        // check text field is null
        if(name === '')
        {
            this.setState({errors:{name:'Name is required'}})
            return;
        }

        if(email === '')
        {
            this.setState({errors:{email:'Email is required'}})
            return;
        }

        if(phone === '')
        {
            this.setState({errors:{phone:'Phone is required'}})
            return;
        }

        const { id } = this.props.match.params;

        const upContactdata = {
            name,
            email,
            phone
        }

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContactdata);

        dispatch({type:'UPDATE_CONTACT',payload:res.data});

        this.props.history.push('/');

    }



    render() {

        const {name,email,phone,errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    // console.log(dispatch);
                    return(
                        <div className="card mb-3">
                            <div className="card-header">
                               Edit contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                    <TextInputGroup
                                        label = "Name"
                                        name = "name"
                                        placeholder="Enter the Name ..."
                                        value = {name}
                                        onChange={this.onChange}
                                        error = {errors.name}
                                    />
                                    <TextInputGroup
                                        label = "Email"
                                        name = "email"
                                        placeholder="Enter the Email ..."
                                        value = {email}
                                        onChange={this.onChange}
                                        error = {errors.email}
                                    />
                                    <TextInputGroup
                                        label = "Phone"
                                        name = "phone"
                                        placeholder="Enter the Phone ..."
                                        value = {phone}
                                        onChange={this.onChange}
                                        error = {errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Edit Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default EditContact;