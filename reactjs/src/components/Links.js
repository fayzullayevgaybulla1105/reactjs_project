import React from 'react';

const Link = (props) => {

    const state = {
        count: 0
    }
    const {title, url } = props.data;
    return (
        <p>
            <a href={url}>{title}</a>
        </p>
    );
}


export default Link;