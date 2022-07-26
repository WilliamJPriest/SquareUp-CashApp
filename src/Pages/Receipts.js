import React,{useEffect,useState} from 'react'

export default function Receipts() {
    const [receiptData, setReceiptData]= useState([])
    useEffect(() =>{
        fetch('/api/v2/payments')
            .then(response => response.json())
            .then(data => console.log(data.get('amountMoney'))) 
    },[]);
    return (
    <>
        {receiptData.map((items)=>(
            <div>
                <h2>{items.payments}</h2>
            </div>
        ))}
    </>
  )
}
