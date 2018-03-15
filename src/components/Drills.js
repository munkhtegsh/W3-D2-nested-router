import React from 'react';

export default (props) => {
    console.log(props)
    return (
        <div>
            This is drills page {props.match.params.id}
        </div>
    )
}