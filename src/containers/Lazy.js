import React, {Suspense} from 'react'
const OtherComponent = React.lazy(() => import('../components/Lazy'));

export default () => {
    return(
        <div>       
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent/>
            </Suspense>
        </div>
    )
}
