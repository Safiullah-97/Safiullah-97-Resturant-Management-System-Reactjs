import React from 'react'
import { Form, Input, Button, Select, Upload,message, } from 'antd';
import 'antd/dist/antd.css';
import './css/Additem.css'

const { Option } = Select;


const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const info = () => {
  message.info('This is a normal message');
};
function AddItem() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <Form name="basic"
    className="center1"
      labelCol={{
        span: 8,
        
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Enter Item Name"
        name="Enter Item Name"

        rules={[
          {

            message: 'Please fill out this field',
          },
        ]}
      >
        <Input placeholder="E.g Bread" className="gridStyle" />
      </Form.Item>
      <Form.Item
        label="Enter Item Name"
        name="Enter Item Name"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
           
                message: 'Please fill out this field',
             
          
          },
        ]}
      >
        <Input placeholder="E.g 5" className="gridStyle" />
      </Form.Item>

      <Form.Item
        label="Enter Item Description"
        name="Enter Item Description"
        rules={[
          {

            message: 'Please input your Item Description',
          },
        ]}
      >
        <Input placeholder="E.g " className="gridStyle"/>
      </Form.Item>


      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {

            message: 'Please fill out this field',
          },
        ]}


      >
        <div style={{display:"flex"}}>
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button type="default"   className="btnUpload" >Click to upload</Button>
          

        </Upload>
        <label className="NOfile"> No file choosen</label>
        </div>
      </Form.Item>
      

      <Form.Item
        name="CHOOSE ITEM CATEGORY"
        label="Choose Item Category"
      //rules
      >
        <Select placeholder="Choose your option" style={{width: '55%'}}>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>

      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={info}>
          Add Item
        </Button>
      </Form.Item>
    </Form>
    
  );
  
};

export default AddItem