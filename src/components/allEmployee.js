import React from 'react';
import { Button, Card } from 'antd';
import Icon,{SortDescendingOutlined,SortAscendingOutlined } from '@ant-design/icons';
import './css/allEmployee.css'
function Employees(){
return(
    <div className="position2" >
      <Card className='Featured_card1'>

<label className="Featured_lbl"> Featured </label>
<br/><br/>    <Card 

className="Featured_card"> 

    <label 
    className="emp_label">
        <b> Employee</b>
        </label>
    <br/><br/>
    <label 
    className="show_label"> 
    Show
    </label>
          <select
          className="select1"
           
            >                  
                  <option 
                   value="1"> 
                   10
                   </option>

                   <option 
                   value="2"> 
                   20
                   </option>
                   <option 
                   value="3"> 
                   30
                   </option>
                   <option 
                   value="4"> 
                   40
                   </option>
                </select>

          <label
          className="margin_left">
             entries
             </label>
          <label
           className="margin_left1" >
             Search:
             </label>
          <input
           style={{marginLeft:'20px',border:'2px solid #ccc'}} 
           type="search">

           </input>

          <Card className="Card_2">
  <div>

  

    <label  className="all_label"><b> ID </b></label>
  <a  className="a" href="#" ><SortDescendingOutlined/> </a>
  
  <a className="a" href='#' > <SortAscendingOutlined /></a>
 
<label  className="all_label"><b>Image</b></label>
<a className="a" href='#' ><SortDescendingOutlined/> </a>
  
  <a className="a" href='#' > <SortAscendingOutlined /></a>
 

 <label className="all_label"><b>Info</b></label>
 <a  className="a" href='#' ><SortDescendingOutlined/> </a>
  
  <a className="a" href='#' > <SortAscendingOutlined /></a>
 

 <label className="all_label"><b>Role</b></label>
 <a  className="a" href='#' ><SortDescendingOutlined/> </a>
  
  <a  className="a" href='#' > <SortAscendingOutlined /></a>
 

  <label  className="all_label"><b>Action</b></label>
 <a  className="a" href='#' ><SortDescendingOutlined/> </a>
  
  <a  className="a" href='#' > <SortAscendingOutlined /></a>
 

  </div>

  <Card className="hov" > 
  <label className="no_data" >No data available</label>
</Card><br/>
<div className="div1" style={{float: 'right'}}>
    <Button className="previous_btn"> Previous</Button>
    <Button className="next_btn"> Next</Button>
    </div>
    </Card>
          </Card> 
          </Card>
              

    {/* </Card> */}
{/*        
        <Card style={{width:'105ch',marginRight:'5ch'}}>
        <label style={{fontSize:'18px'}}> <b> Employee</b></label>
        <br/><br/> */}
          {/* </Card> */}
       </div>
)
    }


    export default Employees