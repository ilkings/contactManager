import React, {Component, Fragment} from 'react';
import Contract from './Contract';
import { Consumer }  from '../../context';

class Contacts extends Component {

    // deleteContact = id => {
    //
    //     const { contacts } = this.state;
    //     const newContact = contacts.filter(contact => contact.id !== id)
    //
    //     this.setState(
    //         {contacts:newContact}
    //     )
    // }

    render() {
        return (
            <Consumer>
                {value =>{
                    const { contacts } = value;
                    console.log(contacts);
                    return(
                        <Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span>
                                <span>List</span>
                            </h1>
                            {contacts.map(contract=>(
                                <Contract
                                    key = {contract.id}
                                    contract = {contract}
                                />
                            ))}
                        </Fragment>
                    )
                }}
            </Consumer>
        )
        // const {contacts} = this.state;
        //
        // return (
        //     <Fragment>
        //         {contacts.map(contract=>(
        //             <Contract
        //                 key = {contract.id}
        //                 contract = {contract}
        //                 deleteClickHandler = {this.deleteContact.bind(this,contract.id)}
        //             />
        //         ))}
        //     </Fragment>
        // );
    }
}

export default Contacts;