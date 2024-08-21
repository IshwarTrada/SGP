import React from 'react'
import BillingInformation from './BillingInformation'
import AdditionalInformation from './AdditionalInformation'

function CheckoutInformation() {
  return (
    <div className='w-2/3 pt-20'>
        <BillingInformation/>
        <AdditionalInformation/>
    </div>
  )
}

export default CheckoutInformation
