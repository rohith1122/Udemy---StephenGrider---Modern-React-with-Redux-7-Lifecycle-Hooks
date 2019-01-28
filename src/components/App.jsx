import React from 'react';
import ResourceList from './ResourceList';

const App = () => {
    // Destructure the useState array
    // [ currentValue, setCurrentValue ] = useState(initialValue);
    const [resource, setResource] = React.useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>
                    Posts
                </button>
                <button onClick={() => setResource('todos')}>
                    Todos
                </button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    );
}

export default App;