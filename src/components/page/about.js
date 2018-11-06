import React from 'react';
import classNames from 'classnames';

const AboutContact = (props) => {
    return (
        <div>
            {/*<h1 className={classNames('display-4')}>About Contact Manager{props.match.params.id}</h1>*/}
            <h1 className={classNames('display-4')}>About Contact Manager</h1>
            <p className="lead">Test</p>
            <p className="text-secondary">Version1.0.0</p>
        </div>
    );
};

export default AboutContact;