import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component
{
    state = { resources: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data });
    }

    // ugly - only call componentDidUpdate IF
    // the props inserted INTO the component change
    // i.e. if RESOURCE changes from POSTS to TODOS
    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }

        return;
    }

    render() {
        return <div>{this.state.resources.length}</div>;
    }
}

export default ResourceList;