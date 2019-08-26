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


import React from 'react';
// import ReactDOM from 'react';
// import BalloonConfirm from '@icedesign/balloon-confirm';
// import Img from '@icedesign/img';
import Lifecycle from '../components/Lifecycle'
export default () => {
    return (
        <div>
            <Lifecycle/>
        </div>
    )
}