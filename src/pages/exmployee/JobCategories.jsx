import React from 'react'
import CommonHeader from "../../components/Employee/Global/CommonHeader"
import CategoryGrid from '../../components/Employee/JobCategories/CategoryGrid'
import FAQSection from '../../components/Employee/JobCategories/FAQSection'

const JobCategories = () => {
  return (
    <div>
      <CommonHeader title="Job Categories"/>
      <CategoryGrid/>
      <FAQSection/>
    </div>
  )
}

export default JobCategories
