console.log('Build it visible is running!')

let visibility = false;

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. Here are your details</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

render();
