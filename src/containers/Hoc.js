import React from 'react';
import Hocdemo from '../components/Hocdemo'

// const MyContainer = (WrapedComponent) => 
//     class extends Component {  
//         render(){
//             const newprop = {test: 'this is HOC data'}
//             return <WrapedComponent {...this.props} {...newprop} />
//         }
//     }
// export default MyContainer(Hocdemo)

//WrappedComponent初始渲染时候会调用ref回调，传入组件实例，在proc方法中，就可以调用组件方法
function refsHOC(WrappedComponent) {
    return class RefsHOC extends React.Component {
      proc(wrappedComponentInstance) {
        // wrappedComponentInstance.textInput.current.focus()
        console.log(wrappedComponentInstance)          
      }
  
      render() {
        const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
        return <WrappedComponent {...props}/>
      }
    }
}
export const RefsH1 = refsHOC(Hocdemo)
export const Extends = Hocdemo

