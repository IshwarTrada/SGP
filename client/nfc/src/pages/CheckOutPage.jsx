import React from 'react'
import CheckoutInformation from '../components/CheckoutInformation'
import OrderSummary from '../components/OrderSummary'

function CheckOutPage() {
  return (
    <div className='flex gap-3 px-14 py-9'>
      <CheckoutInformation />
      <OrderSummary/>
    </div>
  )
}

export default CheckOutPage
