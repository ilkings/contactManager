import React, {Component} from 'react';
import PropType from 'prop-types';

class AddContact_ref extends Component {

    constructor(props)
    {
        super(props);
    }

    onChange = e => {this.setState({[e.target.name]:e.target.value})}

    onSubmit = e => {
        e.preventDefault();

        const contact = {
            name:this.name.value,
            email:this.email.value,
            phone:this.phone.value,
        }

        console.log(contact);
    }

    static defaultProps = {
        name:'hanil',
        email:'1@email.com',
        phone:'777-777-7777'
    }

    render() {

        const {name,email,phone} = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name..."
                                className="form-control form-control-lg"
                                defaultValue={name}
                                ref={(c) => this.name = c}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email..."
                                className="form-control form-control-lg"
                                defaultValue={email}
                                ref = {(c) => this.email = c}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter Phone..."
                                className="form-control form-control-lg"
                                defaultValue={phone}
                                ref = {(c) => this.phone = c}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}



export default AddContact_ref;