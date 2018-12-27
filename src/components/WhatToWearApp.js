import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


export default class WhatToWearApp extends React.Component {
    state = {
        options: [],
        choice: undefined,
        subtitle: undefined,
        selectedOption: undefined
    }

    handleDeleteOptions =() => {
        this.setState(() => ({options: [], choice: '' }))
    }

    handleColorPick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ 
            subtitle : 'You should wear the ', 
            choice: (option), 
            selectedOption: (option) 
        }))
        //alert(option);
    }

    handleAddOption = (option) => {
        if (!option){
            return 'Enter Valid Outfit Option';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This Outfit Option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => option !==optionToRemove
            )
        }))
    }

    handleClearOption = () => {
        this.setState(() => ({selectedOption: undefined})
        )
    };

    componentDidMount(){
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options){this.setState(() => ({options: options}))}
            //console.log(options)
        }catch(e){
            console.log('Error with Data')
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
           // console.log('Saving Option');
        }
    }
  
    render() {
        return (
            <div>
                <Header
                subtitle = {this.state.subtitle}
                choice = {this.state.choice}/>
                <div className="container">
                <div className="widget">
                <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                handleAddOption ={this.handleAddOption} />
                </div>
                <Action 
                hasOptions={this.state.options.length > 0} 
                handleColorPick = {this.handleColorPick}
                /> 
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearOption={this.handleClearOption}/>
            </div>
        );
    }
}

