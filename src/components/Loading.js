import React from 'react'

export default function Loading() {
    const loaddom = () => {
        return <div style={{color: 'red', fontSize: '30px', width: '300px', height: '200px', border:'1px solid red'}}>loading...</div>
    }
    return loaddom()
}