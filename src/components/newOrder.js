import React,{useState} from 'react'
import 'antd/dist/antd.css';
import { Modal, Button, Card } from 'antd';
import './css/newOrder.css'
import Icon,{SortDescendingOutlined,SortAscendingOutlined,SendOutlined  } from '@ant-design/icons';

function Neworder(){
    const [orderForm, setorderForm]= useState({
           
        tablenum:'',
        Customer:'' ,
        Cook:'',
        PaymentStatus:'',
        Waiter:'',
        orderStatus:'',
        Ordertime:'',
        Completetime:''})
    
            const handleOk = () => {
              setIsModalVisible(false);  };
          
            const handleCancel = () => {
              setIsModalVisible(false);  };    

            const [isModalVisible, setIsModalVisible] = useState(false);

            const showModal = () => {
              setIsModalVisible(true); };

        function handleChange(event){
                const{name, value}=event.target;
            
                setorderForm(prevorderForm => {
                    return{
                        ...prevorderForm,
                        [name] :value  }     })}
        
    function handleClick(event){
        event.preventDefault();
    const postData={
                tablenum: orderForm.tablenum,
                Customer: orderForm.Customer,
                Cook: orderForm.Cook,
                PaymentStatus: orderForm.PaymentStatus,
                Waiter: orderForm.Waiter,
                orderStatus: orderForm.orderStatus,
                Ordertime: orderForm.Ordertime,
                Completetime: orderForm.Completetime
            }
            
            console.log({postData})}


function Vieworder(event){
    console.log({orderForm})
}

            // function dropDownChanged(event){
            //  tablenum:orderForm.tablenum;
            //  Customer: orderForm.Customer;
            //  Cook: orderForm.Cook;
            //  PaymentStatus: orderForm.PaymentStatus;
            //  Waiter: orderForm.Waiter;
            //  orderStatus: orderForm.orderStatus;
            // }

    return (
            <div
            className="position2">

                       <form className="response" >
            <div className="resp"  style={{display:'flex'}}> 
         <div>
                <label
                className="Name">Enter table no</label> 
                <br/>
                <input

                 className="inputfield"
                  onChange={handleChange} 
                  name="tablenum" 
                  value={orderForm.tablenum}
                   type="number"
                    placeholder="1"></input><br/>
           
                </div>
          
                <div className="resp"  style={{marginLeft:'3ch'}}>
                <label
                 className="Name">Customer</label> <br/>
                
                
                {/* <input className="inputfield"  onChange={handleChange} name="tablenum" value={orderForm.tablenum} type="drop" placeholder="1"> */}
                <select 
                className="inputfield" 
                name="Customer"
                onChange={handleChange}>
                  
        <option 
        style={{fontSize:'18px'}} 
        value={orderForm.Customer}> Choose Your Option</option>
    
    
      </select>
                 
                {/* </input> */}
           
                </div>
            <br/>

            <div className="resp"  style={{marginLeft:'3ch'}}>
         <label className="Name">Cook</label> <br/>
         <select
         name="Cook"
          className="inputfield" 
          value={orderForm.Cook}
           onChange={handleChange}>
        <option 
         value="1"> 
         Choose your Option 
         </option>
      </select>
         </div>
<br/>
  
    <div className="resp">
                <label 
                className="Name">
                    Payment Status</label> 
                    <br/> 
                 {/*               
                <input className="inputfield"  onChange={handleChange} name="tablenum" value={orderForm.tablenum} type="text" placeholder="1"></input> */}
                  <select
                  name="PaymentStatus"
                   value={orderForm.PaymentStatus}  
                   className="inputfield"
                   name="PaymentStatus"
                    onChange={handleChange}>

        <option value="1" >Choose your option</option>
        <option value="2">Non Paid</option>
        <option value="3">Paid</option>
      </select>
                </div>
</div> 
<br/> 
          <div style={{display:'flex'}}>
        
         <div className="resp" >
                <label className="Name"> Waiter</label> 
                <br/>
                <select 
                name="Waiter"
                className="inputfield" 
                value={orderForm.Waiter}
                 onChange={handleChange}>
                  
                  <option 
                  style={{fontSize:'18px'}} 
                   value="1"> Choose Your Option</option>
                </select>
                </div>

        
                <div className="resp" >

                <label className="Name">Order Status</label> 
                <br/>
                <select className="inputfield" 
                name="orderStatus"
                value={orderForm.orderStatus}
                 onChange={handleChange}>

        <option value="1">Cooking </option>
        <option value="2">Serverd</option>
        <option value="3">Pending </option>
        <option value="4">Cooked</option>
      </select>
          
                </div>
                <div className="resp" >
         
                <label  className="Name">Order Time</label> 
                <br/>
                <input  className="inputfield" 
                onChange={handleChange} 
                name="Ordertime"
                 value={orderForm.Ordertime} 
                 type="datetime-local"
                  placeholder="1"></input>
               
               </div>

         
         <div className="resp"  >           
                  <label
                   className="Name">
                       Complete Time</label> 
                <br/>
                <input 
                className="inputfield"
                 onChange={handleChange}
                  name="Completetime" 
                  value={orderForm.Completetime} 
                  type="datetime-local" ></input>
                </div>

<br/> <br/> 
            </div>
            <br/> 

            <div className="resp2"  >  
         
            <Button className="Sumbtn1" type="primary" onClick={showModal} >
        Add Dish
      </Button>

      <Modal className="Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
   
   title={<label className="adddish_label">
          <b>ADD DISH</b></label>}>
    
        <label className="label_tag">Choose Dish type</label>
        <br/>
        <select className="inputfield1" >
        <option   value="1" >Choose your option</option>
</select><br/><br/>

                <label className="label_tag">Choose Dish</label>
                <br/>
                <select className="inputfield1" > 
                <option  value="1" >Choose your option</option>
                </select>
<br/><br/>
              
                <label className="label_tag">Quantity</label>
                <br/>
                <input type="text" className="inputfield1" > 
             </input>
               <br/> <br/>

             <label className="label_tag">Price</label>
                <br/>
                <input type="text" className="inputfield1" > 
             </input>
<br/> <br/>
             <label className="label_tag">Total Price</label>
                <br/>
                <input type="text" className="inputfield1" > 
             </input>
             <br/><br/><br/><br/>

<Button type="primary" className="modal_btn" > Add Dish
<a className="a1" href='#'> <SendOutlined /></a>
 </Button>
{/* 
 <button type="button" className="modal_btn" > Add Dish
 
 <a className="a1" href='#'> <SendOutlined /></a>
 </button> */}
      </Modal>
                    <Button
                     type="danger" 
                     className="Sumbtn2" >
                           Cancel
                           </Button>

                    <Button  type="primary" 
                    onClick={handleClick}
                    className="Sumbtn3"
                    > Add Order</Button> 


                    <Button  
                    className="Sumbtn4" 
                    type="primary"
                    onClick={Vieworder}
                     >View Order</Button>

                </div>
</form>
<br/>
<div> 
<Card className="order_card" >
  <label className="orders">Orders</label>
  <br/> <br/>
  <label className="order"> <b>Order</b></label>
  <div>

  <label 
    style=
    {{marginRight:'10px'}}> 
    Show
    </label>
          <select
           style
           ={{fontSize:'15px',
           width:'55px',
           height:'28px',
           paddingRight:'10px'}}
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

<label> </label>
          <label
           className="entries">
             entries
             </label>

          <label
          className="Searchleb" >
             Search:
             </label>
 
          <input 
          className="Searchbox"
           type="search">
           </input>
           
<br/>
<table className="table">    {/* <label  style={{marginRight:'110px',marginLeft:'12px',fontSize:'18px'}}><b> ID </b></label> */}
<tr>
                <th>ID</th> 
                
  <a className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a  className="a"  href='#' > <SortAscendingOutlined /></a>
  <th>Dish Name</th>
{/*  
<label  style={{marginRight:'110px',marginLeft:'12px',fontSize:'18px'}}><b>Image</b></label> */}
<a  className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a  className="a"  href='#' > <SortAscendingOutlined /></a>
 
  <th>Type</th>
 {/* <label style={{marginRight:'110px',marginLeft:'12px',fontSize:'18px'}}><b>Info</b></label> */}
 <a  className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a className="a"  href='#' > <SortAscendingOutlined /></a>
 
  <th>Quantity</th>
 
 {/* <label s   atyle={{marginRight:'110px',marginLeft:'12px',fontSize:'18px'}}><b>Role</b></label> */}
 <a  className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a  className="a"  href='#' > <SortAscendingOutlined /></a>
 
 
  <th>Price</th>
 
{/* 
  <label  style={{marginRight:'110px',marginLeft:'12px', fontSize:'18px'}}><b>Action</b></label> */}
 <a  className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a className="a"  href='#' > <SortAscendingOutlined /></a>
 
  <th>Total Price</th> 
  
{/* 
  <label  style={{marginRight:'110px',marginLeft:'12px', fontSize:'18px'}}><b>Action</b></label> */}
 <a className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a className="a"  href='#' > <SortAscendingOutlined /></a>

  <th>Action</th> 
  <a  className="a"  href='#' ><SortDescendingOutlined/> </a>
  
  <a  className="a"  href='#' > <SortAscendingOutlined /></a>



 </tr>
  </table>

  </div>

  
  <Card className="hov" > 
  <label className="no_data" >No data available</label>
</Card><br/>
<div className="div1" style={{float: 'right'}}>
    <Button className="previous_btn"> Previous</Button>
    <Button className="next_btn"> Next</Button>
    </div>
    </Card>
        

            </div>
            </div>
        )
}   
    

export default Neworder