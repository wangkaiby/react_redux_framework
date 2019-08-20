import React,{useState, useEffect} from 'react'
import {  Table, Divider, Tag, Button, Modal } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as oldActionCreator from '../actions'
import WrappedRegistrationForm from './form'
// import HocInKoa  from './HocInKoa'
// import Hocdemo from '../components/Hocdemo'


// const Koa = (props) => {
//     const getKoaData = () => {
//       props.getKoa()
//     }
//     const FnHoc = HocInKoa(Hocdemo)
//     return (
//         <div>
//             <FnHoc>红圈内是HOC的demo和KOA没有关系请忽视</FnHoc>
//             <p>{props.name}</p>
//             <Button type='primary' onClick={getKoaData}>
//                 GET_DATA_FROM_KOA
//             </Button>
//         </div>
//     )
// }

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="/#">{text}</a>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Tag',
      key: 'tag',
      dataIndex: 'tag',
      render: tag => (
        <span>
          {(tag||[]).map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="/#">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="/#">Delete</a>
        </span>
      ),
    },
  ];
  
const Koa = (props) => {
    const receive = props.list
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      // props.list()
      receive()
    }, [receive]);    
    const getDate = (data)  =>{
        props.getKoa(data)
        setVisible(false)
    } 
    const addNewData = () => {
        setVisible (true)
    }
    const newData =[...props.data]
    newData.map((item, index)=>
        item.key= index.toString()
     )
    const handleCancel = () => {
      setVisible(false)
    } 
 return (
     <div>
         <Modal
          title="Title"
          visible={visible}
          footer={null}	
          onCancel={handleCancel}
        >
          <div>          
            <WrappedRegistrationForm getDate={getDate}/>
          </div>
        </Modal>
         <Button type='primary' onClick={addNewData}>添加新的数据</Button>
         <Table columns={columns} dataSource={newData} />
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
