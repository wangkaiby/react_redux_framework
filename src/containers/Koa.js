import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as oldActionCreator from '../actions'

const Koa = (props) => {
    const getKoaData = () => {
      props.getKoa()
    }
    return (
        <div>
            <p>{props.name}</p>
            <Button type='primary' onClick={getKoaData}>
                GET_DATA_FROM_KOA
            </Button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...state.koa
    }
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(oldActionCreator, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Koa);
