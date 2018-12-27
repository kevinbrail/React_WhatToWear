class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleColorPick = this.handleColorPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);        
        this.state = {
            options: [],
            choice: undefined,
            subtitle: undefined
        };
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options){this.setState(() => ({options: options}))}
            console.log(options)
        }catch(e){
            console.log('Error with Data')
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('Saving Option');
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({options: [], choice: '', subtitle: '' }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => option !==optionToRemove
            )
        }))

    }
  
    handleColorPick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ subtitle : 'You should this color today:', choice: (option)}))
        //alert(option);
    }
    handleAddOption(option){
        if (!option){
            return 'Enter Valid Color Option';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This Option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        return (
            <div>
                <Header/>
                <AddOption
                handleAddOption ={this.handleAddOption} />
                <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <Action 
                hasOptions={this.state.options.length > 0} 
                handleColorPick = {this.handleColorPick}
                subtitle = {this.state.subtitle}
                choice = {this.state.choice}
                /> 
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
};

Header.defaultProps = {
    title: 'What Color to Wear?'
}

const Action = (props) => {
        return (
            <div><p></p>
                <button 
                onClick={props.handleColorPick}
                disabled = {!props.hasOptions}>
                Choose My Color!
                </button>
                <p>{props.subtitle}{props.choice}</p>
            </div>
        );
};

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0 && <p>Please add today's color choices.</p>}
            {
                props.options.map((option) => 
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />)
            }
            <p></p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button
           onClick={(e) =>{
               props.handleDeleteOption(props.optionText)
           }}
           >Remove</button>
        </div>
    );
};

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error: error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Color</button>
                <p>{this.state.error}</p>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))