console.log('App.js is running');

//JSK JavaScript XML

const app = {
    title: 'WHAT TO WEAR',
    subtitle: 'You should wear this color today:',
    options: ['Red','Purple']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    formRender();
};

const removeAll = (e) => {
    app.options = [];
    formRender();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

const formRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your ' + app.options.length + ' options:' : 'No Options'}</p>
            <ol>
            {
                app.options.map((option) =>{
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What color is best to wear?</button>
            <button onClick={removeAll}>Remove All</button>
            </p>
        </div>
    
    );
    ReactDOM.render(template,appRoot); 
}

formRender();
