import React from 'react';

const App = () => {
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
            {resource}
        </div>
    );
}

export default App;