import React, {Component} from 'react';
import axios from 'axios';

const MyContext = React.createContext();

const reducer = (state,action) => {
    // console.log(state.contacts[0].id);
    // console.log(action.payload.id);
     switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact=>contact.id !==action.payload)
            };
         case 'ADD_CONTACT':
             return {
                 ...state,
                 contacts:[action.payload,...state.contacts]
             };
         case 'UPDATE_CONTACT':
             return {
                 ...state,
                 contacts:state.contacts.map(contact => (contact.id === action.payload.id ?  (contact = action.payload) : contact))
             };
        default:
            return state;
    }


}

export class  Provider extends Component {

    async componentDidMount() {

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts:response.data});

        // axios.
        // get('https://jsonplaceholder.typicode.com/users')
        //     .then(res=>this.setState({contacts:res.data}));
    }

    state = {
        contacts:[],
        dispatch : action => this.setState(state =>
            reducer(state,action))

    };

    // componentDidUpdate() {
    //     console.log("componentDidUpdate");
    // }
    //
    // componentWillUpdate() {
    //     console.log("componentWillUpdate");
    // }


    // function dispatch(action)
     // {
     //     return this.setState(state)
     //     {
     //         return reducer(state,action);
     //     }
     // }


    render() {
        return (
            <MyContext.Provider value = {this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export const Consumer = MyContext.Consumer;



