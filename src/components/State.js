import React, { useEffect } from 'react';

function State(props) {
    // This works when state changed
    useEffect(() => {
        if(props.shareValue) {
            // Do something here...
        }
    })

    return (
        <div>
            This is state component...
        </div>
    )
}

export default State;