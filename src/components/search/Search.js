import React from 'react';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          list: [
            "Go to the store",
            "Wash the dishes",
            "Learn some code"
          ],
          searchValue:''
        };
        this.searchHandle = this.searchHandle.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    searchHandle(){
        
    }
    onChangeHandle(e){
        this.setState({
            searchValue : e.target.value
        })
    }
    render(){
        return(
            <div>
               <div>
                <input type="text" name="search" value={this.state.searchValue} placeholder="Search..." onChange={this.onChangeHandle}></input>
                <button onClick={this.searchHandle}>Search</button>
               </div>
               <ul>
                {this.state.list.map(item => (<li key={item} >{item}</li>))}
               </ul>
            </div>
        );
    }
}

export default Search;