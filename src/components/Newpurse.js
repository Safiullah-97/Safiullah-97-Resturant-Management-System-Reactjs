import './css/newpurse.css';
import React from 'react'
import { Form, Input, Button, Select,DatePicker } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;


function Newpurse() {
    return (
        <Form style={{marginTop: '80px', marginLeft: '40px'}} name="basic"
        labelCol={{
          span: 8,

          
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
       
        autoComplete="off"
      >
        <Form.Item
          label="Choose Supplier"
          name="Choose Supplier"
  
          rules={[
            {
  
              message: 'Please fill out this field',
            },
          ]}
       >
        <Input placeholder="" className= 'input1'/>
       </Form.Item> 

       <Form.Item name="Select Date time of Supply " label="Select Date time of Supply" 
      rules={[
        {message: 'Please fill out this field'}]}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" className= 'input1'/>
      </Form.Item>

      



      <Form.Item
        name="Choose Item"
        label="Choose Item"
      //rules
      >
        <Select placeholder=""  style={{width: '45%'}}>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
        <Button className="bt1" >Add New Item</Button>

      </Form.Item>

      <Form.Item
        label="Enter Quantity"
        name="Enter Quantity"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
           
                message: 'Please fill out this field',
             
          
          },
        ]}
      >
        <Input placeholder=""  className= 'input1'/>
      </Form.Item>
      <Form.Item
        label="Enter Unit Price"
        name="Enter Unit Price"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
           
                message: 'Please fill out this field',
             
          
          },
        ]}
      >
        <Input placeholder="" className= 'input1' />
      </Form.Item>

      <Form.Item
        label="Bill Amount"
        name="Bill Amount"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
           
                message: 'Please fill out this field',
             
          
          },
        ]}
        
     >
       
       <Input placeholder=""  className= 'input1'/>
       <Button className="bt2" >Calculate Bill</Button>
         
      </Form.Item>

<Form.Item
        label="Payment"
        name="Payment"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
           
                message: 'Please fill out this field',
             
          
          },
        ]}
      >
        <Input placeholder=""  className= 'input1'/>
      </Form.Item>
          
        

      <Form.Item
        name="CHOOSE Payment Status"
        label="Choose Payment Status"
      //rules
      >
        <Select placeholder=""  style={{width: '45%'}}>
          <Option value="1">Paid</Option>
          <Option value="2">Unpaid </Option>
          <Option value="3">balance</Option>
          <Option value="4">Due</Option>
        </Select>

        </Form.Item>
        
        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary"  className="bt3" htmlType="submit"  >
          Add Supply
        </Button>
      </Form.Item>

       </Form>
    )
}

export default Newpurse
