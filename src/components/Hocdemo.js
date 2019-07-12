import React from 'react'
import './hocdemo.css'
// export default (props) => {
//     return (
//         <div className='hocinject'> {props.test}<p>{props.children}</p></div>
//     )
// }



// export default class Hocref extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             a:1
//         }
//         this.textInput = React.createRef();
//         this.childFn = this.childFn.bind(this)
//     }
//     componentDidMount() {
//         this.childFn()
//     }
//     childFn() {
//         this.textInput.current.focus()
//     }
//     render() {
//         return (
           
//             <div className='hocinject'> 
//                 {this.state.a}
//                 <input ref={this.textInput} />
//                 <p>{this.props.children}</p>
//             </div>
//         )
//     }
// }

export default class Hocref extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a:1
        }
        this.textInput = React.createRef();
        this.childFn = this.childFn.bind(this)
    }
    componentDidMount() {
        this.childFn()
    }
    childFn() {
    }
    render() {
        return (
           
            <div className='hocinject'> 
                {this.state.a}
                <input ref={this.textInput} />
                <p>{this.props.children}</p>
            </div>
        )
    }
}
