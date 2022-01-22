import React from 'react';
import Suppliertable from './suppliertable';
import { Form, Button,Input,Alert} from 'antd';
import './css/supplierstyle.css'


export default function Supplierform() {

      
  const columns = [
    {
      title: 'No',
      dataIndex: 'No',
      key: 'No',
      // width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      // width: 150,
    },
    {
      title:"CNIC",
      dataIndex: 'CNIC',
      key: 'CNIC',
      // width: 150,
    },
    {
      title: 'Mobile',
      dataIndex: 'Mobile',
      key: 'Mobile',
      // width: 150,
    },
    {
      title: 'Telephone',
      dataIndex: 'Telephone',
      key: 'Telephone',
      // width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      // width: 150,
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      // width: 150,
    },
    {
        title: 'View',
        dataIndex: 'View',
        key: 'View',
        // width: 150,
      },
  ];
  
  const data = [
    {
      key: '1',
      
  
    },
    {
      key: '2',
  
    },
    {
      key: '3',
  
    },
    
  ];


    const [form] = Form.useForm();
    const { TextArea } = Input;
  
    return (
      <div className= 'container' >
      <div style={{marginTop: '30px', marginLeft: '400px'}}>
   
      <Form 
        form={form}
        layout="vertical"  
      > 
      
      <div  className='row1'>
          <div className='inp1'>
              <Form.Item label='Name'>
                  <Input placeholder='Supplier/Company Name' className='inp'/>
              </Form.Item>
               </div>

               <div className='inp2'>
              <Form.Item label='CNIC'>
                  <Input placeholder='XXXXX-XXXXXXXX-X' className='inp'/>

              </Form.Item>
               </div>
      </div>

      <div  className='row2'>
          <div className='inp3'>
              <Form.Item label='Mobile'>
                  <Input placeholder='XXXX-XXXXXXX' className='inp'/>
              </Form.Item>
               </div>

               <div className='inp4'>
              <Form.Item label='Telephone' >
                  <Input placeholder='XXXX-XXXXXXX' className='inp'/>

              </Form.Item>
               </div>
      </div>

      <div className='row3'> 
      <div className='inp5'>
      <Form.Item label='Address'>
       <TextArea rows={4} placeholder='Detailed Address of the Supplier/Company' className='inp'/>
              </Form.Item>
              </div>
      </div>

      <div className='row4'> 
      <div>
      <Form.Item >
      <Button className='but5' type="primary" style={{backgroundColor:'#007bff', borderColor:'#007bff', color:'#fff',borderRadius:"5px"}}>Add Supplier</Button>
              </Form.Item>
              </div>
      </div>
      </Form>


      <div className='row7' style={{overflow: 'scroll'}}>
        <div  >
            
          <Suppliertable  className='tbl'  show='Show' entries='entries'  Search='Search' data={data} columns={columns} />
      </div>
      </div>

      </div>
</div>
    )

}
