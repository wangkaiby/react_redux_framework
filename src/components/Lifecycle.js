import React, { Component } from 'react'

export default class Lifecycle extends Component {
    state = {
        init: 30
    }
    static getDerivedStateFromProps(props, state){
        console.log(' ')
        return null
    }
    render() {
        return ( 
            <div>
                11111222
            </div>
        )
    }
}