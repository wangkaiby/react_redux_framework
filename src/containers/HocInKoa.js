import React, {Component} from 'react';

const HocInKoa = (WrapedComponent) => 
    class extends Component {     
        render(){
            const newprop = {test: 'this is HOC data'}
            return <WrapedComponent {...this.props} {...newprop} />
        }
    }
export default HocInKoa