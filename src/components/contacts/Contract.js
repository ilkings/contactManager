import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Consumer }  from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contract extends Component {

    constructor(){
        super();
        this.state = {
            showContactInfo:true,
            className:'fas fa-sort-down'
        };
    }

    onShowClick =(id,e)=>{
        if(this.state.showContactInfo)
            this.setState({showContactInfo:false,className:'fas fa-sort-up'})
        else
            this.setState({showContactInfo:true,className:'fas fa-sort-down'})
    }

    onDeleteClick = async (id,dispatch) => {
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(res=>dispatch({type:'DELETE_CONTACT',payload:id}));
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type:'DELETE_CONTACT',payload:id});
        }catch (e) {
            dispatch({type:'DELETE_CONTACT',payload:id});
        }

    }



    // ƒ dispatch(action) {
    //     return _this.setState(function (state) {
    //         return reducer(state, action);
    //     });
    // }

    render() {

        const {id,name,email,phone} = this.props.contract;
        console.log(this.props.contract);
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4><label onClick={this.onShowClick.bind(this,id)} style={{cursor:'pointer'}}>Name:{name}</label>
                                <i onClick = {this.onShowClick.bind(this,id)} className={this.state.className} style={{margin:'15px',cursor:'pointer'}}></i>
                                <i onClick= {this.onDeleteClick.bind(this,id,dispatch)} className="fas fa-times" style={{cursor:'pointer',float:'right',color:'red'}}></i>
                                <Link to={`/contact/edit/${id}`}><i className="fas fa-pencil-alt fr" style={{cursor:'pointer',color:'black',marginRight:'1rem'}}></i> </Link>
                            </h4>
                            {!showContactInfo ? <ul className="list-group">
                                <li className="list-group-item">Email:{email}</li>
                                <li className="list-group-item">Phone:{phone}</li>
                            </ul> : null}

                        </div>
                    )
                }}
            </Consumer>

        );
    }
}

Contract.propTypes = {
    contract:PropTypes.object.isRequired
    // dispatch:PropTypes.func.isRequired
}



export default Contract;


