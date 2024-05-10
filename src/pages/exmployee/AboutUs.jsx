import React from 'react'
import CommonHeader from "../../components/Employee/Global/CommonHeader"
import MillionsOfJobsSection from '../../components/Employee/Home/MillionsOfJobsSection'
import FeaturesSection from '../../components/Employee/AboutUs/FeaturesSection'
import VideoSection from '../../components/Employee/AboutUs/VideoSection'
import QuestionsAndAnswers from "../../components/Employee/Home/QuestionsAndAnswers"
import Counts from '../../components/Employee/AboutUs/Counts'

const AboutUs = () => {
  return (
    <div>
      <CommonHeader title="About Us"/>
      <MillionsOfJobsSection/>
      <FeaturesSection/>
      <VideoSection/>
      <Counts/>
      <QuestionsAndAnswers/>
    </div>
  )
}

export default AboutUs
