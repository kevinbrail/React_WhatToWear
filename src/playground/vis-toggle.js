

class VisibilityToggle extends React.Component {    
    constructor(props) {
        super(props);
        this.handleVisibilyToggle = this.handleVisibilyToggle.bind(this);   
        this.state = {
            message: '',
            buttonText: 'Show Details',
            visible: false
                }
    }
        render() {
            return (
                <div>
                  <h1>Visibility Toggle</h1>
                  <button onClick={this.handleVisibilyToggle}>{this.state.buttonText}</button>
                   <br />{this.state.message}
                </div>
            );
        }
        handleVisibilyToggle() {
            this.setState(() => {
                if (!this.state.visible) {
                return {
                    message: 'Now you see the details',
                    buttonText: 'Hide Details',
                    visible: true
                };
            } else {
                return {
                    message: '',
                    buttonText: 'Show Details',
                    visible: false
                };
            }
            })
        };
    }
    ReactDOM.render (<VisibilityToggle />, document.getElementById('app'));

// const showDetails = () => {
//     {message = 'This is the message'};
//     {buttonText = 'Hide Details'};
//     {clicked = ''};
//     appRender();
// };
// const hideDetails = () => {
//     {message = ''};
//     {buttonText = 'Show Details'};
//     {clicked = 'on'};
//     appRender();
// };

// let buttonText = 'Show Details';
// let message = '';
// let clicked = 'on';

// const appRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             {clicked ? <button onClick={showDetails}>{buttonText}</button> : <button onClick={hideDetails}>{buttonText}</button>}
//              <p>{message}</p>
//         </div>
//     );
//     ReactDOM.render(template,appRoot); 
// }
// const appRoot = document.getElementById('app');
// appRender();