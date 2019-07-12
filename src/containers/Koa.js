import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as oldActionCreator from '../actions'
import HocInKoa  from './HocInKoa'
import Hocdemo from '../components/Hocdemo'


const Koa = (props) => {
    const getKoaData = () => {
      props.getKoa()
    }
    const FnHoc = HocInKoa(Hocdemo)
    return (
        <div>
            <FnHoc>红圈内是HOC的demo和KOA没有关系请忽视</FnHoc>
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
