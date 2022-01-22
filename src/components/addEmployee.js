import React,{useState} from 'react';
import './css/addemployee.css'
import { Modal, Button, Card } from 'antd';
import Icon,{SortDescendingOutlined,SortAscendingOutlined,SendOutlined  } from '@ant-design/icons';



function AddEmployee(){
  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };    
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };
    return (
    <div class="container1">
        <form>
        <div class="row">
    <div class="col-25">
      <label class="label1">Enter Name</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter CNIC</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" id="lname" name="lastname" placeholder="Your CNIC.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Address</label>
    </div>
    <div class="col-55">
      <textarea id="address" class="input" name="subject" placeholder="Your Address.." rows="3"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Mobile Number</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" name="p_number" placeholder="Your Mobile Number.."></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Telephone Number</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" name="t_number" placeholder="Your Telephone Number.."></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Created Date</label>
    </div>
    <div class="col-55">
      <input type="datetime-local" name="created_date" placeholder="Your Telephone Number.." style={{width:"100%", marginTop: '10px'}}></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Salary</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" name="salary" placeholder="Your Salary.."></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Your Gender</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" name="gender" placeholder="Your Gender.."></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Join Date</label>
    </div>
    <div class="col-55">
      <input type="date" name="join_date" placeholder="Your Join Date.." style={{width:"100%", marginTop: '10px'}}></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Birth Date</label>
    </div>
    <div class="col-55">
      <input type="date" name="birth_date" placeholder="Your Join Date.." style={{width:"100%", marginTop: '10px'}}></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Enter Branch ID</label>
    </div>
    <div class="col-55">
      <input type="text" class="input" name="branch_id" placeholder="Your Branch ID.."></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label class="label1">Choose Employee Category</label>
    </div>
    <div class="col-55" >
                <select id="emp_c" class="Input_fields12" name="emp_category">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <Button className="button" type="primary" onClick={showModal} >
        Add Category
      </Button>

      <Modal className="Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
   
   title={<label className="adddish_label">
          <b>Add Employee Category</b></label>}>
          <br/>
                <label className="label_tag">Enter Employee Category</label>
                <br/><br/>
                <input type="text" className="inputfield1" > 
             </input>

             <br/><br/><br/><br/>

<Button type="primary" className="modal_btn" > Add Category
 </Button>


      </Modal>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
    <input id="image" type="file" name="image"  accept="image/*"/>

    </div>
  </div>

  <div class="row">
    <div class="col-25">
    </div>
    <div class="col-55">
    <input type="submit" value="Submit" />
    </div>
  </div>



  </form>
</div>
    );
}


export default AddEmployee;
