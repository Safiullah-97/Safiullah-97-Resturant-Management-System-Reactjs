import React from 'react'
import { Form,Select,Input,Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


export default function Suppliertable(props) {
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
        <div className='main2'>
                    <div className='rows'>
                        <Form.Item className='frm1'
                        label={props.show}
                        name="Show"
                        hasFeedback
                        rules={[
                            {
                                required: false,   
                                message: 'Choose your option!',
                            
                            },]}>
                                <div className='siz'>
                                <Select className='datatable1' defaultValue="10"  > 
                                <Option   value="10">10</Option>
                                <Option   value="25">25</Option>
                                <Option   value="50">50</Option>
                                <Option  value="100">100</Option>
                                </Select>
                                </div>
                                </Form.Item>

                                <label className='lbl1'>entries</label>

                                <div className='srch1'>
                                    <Form.Item label={props.Search}>
                                    <Search placeholder="Search" />  
                                    </Form.Item>    
                                </div>
                    </div>

                    <div>
                    <Table columns={props.columns} dataSource={props.data} />
                    </div>

              
  
    </div>
    )
}
