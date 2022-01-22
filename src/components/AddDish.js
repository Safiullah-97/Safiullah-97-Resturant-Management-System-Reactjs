import React, {useState} from 'react';
import { Modal,Button } from 'antd'
import './css/AddDish.css'
function Adddish(){
          
      const [isModalVisible, setIsModalVisible] = useState(false);

      const showModal = () => {
        setIsModalVisible(true);
      };

                
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };    



return(
    <div
     className= "center">
        <div className="Dish_name">
        <label className="Name_leb">
            Enter Dish Name
        </label>
        <input
         placeholder="Eg: Pizza" 
        className="Input_fields3">
        </input>
        </div>
<br/> <br/>
        <div
         className="Dish_des">
    <label 
    className="Name_leb">
        Enter Dish Description
    </label>
<input className="Input_fields" placeholder="Eg"></input>
        </div>
<br/><br/>

        <div
         className="Unit_price">
    <label 
    className="Name_leb">
        Enter Unit Price

    </label>
<input className="Input_fields1" type="number" placeholder="Eg"></input>
        </div>

<br/> <br/>
        <div
         className="Unit_price">
    <label 
    className="Name_leb">
        Choose Dish Category

    </label>
    <select
          className="Input_fields2"
           
            >                  
                  <option 
                   value="1"> 
                   Choose Your Option
                   </option>

                </select>         
                  <Button
                   className="Sumbtn1"
                    type="primary" 
                    onClick={showModal} >
        Add Category
      </Button>

      <Modal className="Modal" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}
   
   title={<label className="adddish_label">
          <b>ADD DISH Category</b>
          </label>}>
    
        <label 
        className="label_tag1">
            Add Dish Category
            </label>
        <br/>

            <input
             className="Input_fields5">
             </input>
        <br/><br/>


    <Button type="primary" className="modal_btn1"> Add Category

 </Button>

      </Modal>
    </div>
    <br/>

    <Button
     className="add_Dish">
         Add Dish
         </Button>
<br/>

    </div>
)    
}

export default Adddish