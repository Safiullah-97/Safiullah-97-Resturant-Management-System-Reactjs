import React from 'react';
import { Card, Row, Col,Image } from 'antd';
import './css/Dashboard.css'
import { Link} from 'react-router-dom';

const Dashboard = () => {
  return (
   <div className = "position1">
       <Row gutter={20}>
      <Col span={9}>
        <Link to= '#'>
        <Card hoverable className="card1" bordered={true}>
        <Image
      width={60}
      src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA="
    />
        <label className = 'label-item'> Total Order</label>
        </Card>
        </Link>
      </Col>
      <Col span={9}>
      <Link to= '#'>
        <Card hoverable  className="card1" bordered={true}>
        <Image
      width={60}
      src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA="
    />
        <label className = 'label-item'> Orders Today</label>
        </Card>
        </Link>
      </Col>
    </Row>

    <Row gutter={20}>
    <Col span={9}>
    <Link to= '#'>
        <Card hoverable className = "card1" style={{marginTop: '20px'}}>
        <Image
      width={60}
      src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA="
    />
        <label className = "labels-item"> Pending Orders To Kitchen</label>
        </Card>
        </Link>
      </Col>
    </Row>
   </div>
  )
}
export default Dashboard;