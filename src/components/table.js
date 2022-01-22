import React from 'react'
import './css/table-style.css'
import { Form,Select,Input,Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';



export default function Tables(props) {


    const { Search } = Input;
    const { Option } = Select;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
    return (
        <div className='main1'>
            <div className='cardheader'>
                <div className='rowd'>
                    <div>{props.head1}</div>
                    <div className='bil'>{props.head2}</div>
                    </div>
                    <div className='cardbody'>
                    <h5> {props.Order} </h5>
                    <div className='datatable'>

                        <div className='row'>
                            <Form.Item className='frm'
                            label={props.show}
                            name="Show"
                            hasFeedback
                            rules={[
                                {
                                    required: false,   
                                    message: 'Choose your option!',
                                
                                },]}>
                                    <Select >
                                    <Option value="10">10</Option>
                                    <Option value="25">25</Option>
                                    <Option value="50">50</Option>
                                    <Option value="100">100</Option>
                                    </Select>
                                    </Form.Item>
                                    <label className='lbl'>entries</label>

                                    <div className='srch'>
                                        <Form.Item label={props.Search}>
                                        <Search placeholder="Search" />
                                      
                                        </Form.Item>
                                    </div>
                        </div>

                        <div className='row'>
                        <Table columns={props.columns} dataSource={props.data} />
                        </div>
                        <div className='footerrow'></div>

                    </div>
                    </div>
            
            </div>
        </div>
    )
}
