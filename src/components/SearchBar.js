import React from 'react';

class SearchBar extends React.Component {   
    //Controlled Input: Hook up state to input, so data in stored in component not DOM
    state = {term:''};

    //2 Data pulled through event listener, term updated
    //Event handler for onChange, sets state with term value from input
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    //Make sure browser doesn't try to submit without user submit, from event.preventDefault();
    onFormSubmit = (event) => {
        event.preventDefault();
        //Passing a callback from the parent to the child, then the child will call the callback
        this.props.onTermSubmit(this.state.term);
        
    };

    //1 Data Entered
    render (){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;