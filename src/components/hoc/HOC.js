import React from 'react';

const exampleHOC = (WrappedComponent) =>{
    class HOC extends React.Component{
        render(){
            return(
                <WrappedComponent {...this.props} number={33}></WrappedComponent>
            )
        }
    }
    return HOC;
}

export default exampleHOC;
