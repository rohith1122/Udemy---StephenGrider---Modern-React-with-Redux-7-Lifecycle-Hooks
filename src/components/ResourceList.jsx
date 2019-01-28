import React from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
    // initialise the resources "state"
    // as empty array
    const [resources, setResources] = React.useState([]);

    // useEffect combines componentDidMount
    // and componentDidUpdate
    // CHANGE TRIGGER: change to "resource" prop
    React.useEffect(() => {
        // hook syntax forces us to
        // use this syntax when using
        // async functions
        // (or put the async function
        // call somewhere else)
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data)
        })(resource);
    }, [resource]);

    return <div>{resources.length}</div>;
}

export default ResourceList;