import React from 'react';

const Header = (props) => (
    <div className="header">
    <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <p className="header__subtitle">{props.subtitle}{props.choice}</p>
        </div>
    </div>
)


Header.defaultProps = {
    title: 'What Outfit Should You Wear?',
    subtitle: 'Let a computer dress you.'
}

export default Header;