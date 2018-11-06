import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = (props) => {
    const {branding} = props;

    return(
      <nav className="nav navbar-dark navbar-expand-sm bg-danger sm-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand fl">
                {branding}
            </a>
            <ul className="navbar-nav mr-auto fr">
                <li className="nav-item">
                    <Link to="/" className="nav-link fl" ><i className="fa fa-home"> Home</i></Link>
                    <Link to="/contact/add" className="nav-link fl" ><i className="fa fa-plus">Add</i></Link>
                    <Link to="/about" className="nav-link fl"><i className="fa fa-down">About</i></Link>
                </li>
            </ul>
        </div>
      </nav>
    );
}

Header.defaultProps = {
    branding:'Contact Manager'
};


Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;



