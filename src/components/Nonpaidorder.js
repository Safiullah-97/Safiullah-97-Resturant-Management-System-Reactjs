import React from 'react'
import Tables from './table'

export default function Nonpaidorder() {

    const columns = [
        {
          title: 'Order No',
          dataIndex: 'OrderNo',
          key: 'Id',
          width: 100,
        },
        {
          title: 'Table No',
          dataIndex: 'Dish Name',
          key: 'Dish Name',
          width: 150,
        },
        {
          title: 'Type',
          dataIndex: 'Type',
          key: 'Type ',
          width: 150,
        },
        {
          title: 'Quantity',
          dataIndex: 'Quantity',
          key: 'Quantity',
          width: 150,
        },
        {
          title: 'Price',
          dataIndex: 'Price',
          key: 'Price',
          width: 150,
        },
        {
          title: 'Total Price',
          dataIndex: 'Total Price',
          key: 'Total Price',
          width: 150,
        },
        {
          title: 'Action',
          dataIndex: 'Action',
          key: 'Action',
          width: 150,
          // render: text => <a>{text}</a>,
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
      
    return (
        <div className="position2">
            <Tables head1='Non Paid Orders' Order='Non Paid' show='Show' entries='entries'
                    Search='Search' data={data} columns={columns}
            
            />
        </div>
    )
}
