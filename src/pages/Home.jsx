import React from 'react'
import Layout from '../components/Layout/Layout'
import Section from '../components/section/Section'
const Education =[
  'PSC',
  'JSC',
  'SSC',
  'HSC',
  'MSC'
]
const Experience =[
  'c++',
  'java',
  'python',
  'javascript',
  'typescript'
]
const Home = () => {
  return (
    <>
        <Layout>
           
            <Section title='Education' items={Education}/>
            <Section title='Experience' items={Experience}/>
           
        </Layout>
    </>
  )
}

export default Home