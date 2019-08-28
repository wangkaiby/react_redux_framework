// import React, {Suspense} from 'react'
// const OtherComponent = React.lazy(() => import('../components/Lazy'));

// export default () => {
//     return(
//         <div>       
//             <Suspense fallback={<div>Loading...</div>}>
//                 <OtherComponent/>
//             </Suspense>
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class Lazy extends Component {
    render() {
        return (
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input
                            defaultValue="Bob"
                            type="text"
                            ref={this.input} />
                        </label>
                        <input type="submit" value="Submit" />{this.props.name}
                    </form>
        )
    }
}
Lazy.defaultProps = {
    name: 'Mary'
  };

