import React,{useEffect,useState} from 'react'
import jsonPath from 'jsonpath'

export default function Receipts() {
    // const payForms = jsonPath(payments, '$..amountMoney')
    const [receiptData, setReceiptData]= useState([])
    useEffect(() =>{
        fetch('/api/v2/payments')
            .then(response => response.json())
            .then(data => setReceiptData(data.payments))
    },[]);
    return (
    <>
        {receiptData.map((items)=>(
            <div key={items.id}>
                <h2>{items.amountMoney.amount} {items.amountMoney.currency}</h2>
            </div>
        ))}
    </>
  )
}
