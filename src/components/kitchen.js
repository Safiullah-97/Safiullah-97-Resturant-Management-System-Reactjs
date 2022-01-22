import React from 'react'
import { Card, Row, Col} from 'antd';




export default function Kitchen() {
    return (
       
      
<div className="site-card-wrapper" style={{marginLeft: '500px', marginTop:'80px'}}>
    <Row gutter={16}>
      
      <Col span={8}>
        <Card title="Live Kitchen:" bordered={false}>
        
        </Card>
      </Col>
      <Col span={8} style={{marginLeft: '50px'}}>
        <Card title="Total Live Orders:" bordered={false}>
        
        </Card>
      </Col>
    </Row>
  </div>
   
    ) 
}
