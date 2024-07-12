import React from 'react' 
import './productSection.css'
import Card from './cards/Card'
import Circlecard from './circle/Circlecard'
const ProductSection = () => {
  return (
    <div className='products-section' id ="products-section">
        <h1 className="products-heading">Explore from our products</h1>
        <div className="products-list">
            <Card title={'Airdopes 161'} image={'AD_161'} price={999} orgprice={2999} discount={60} playblack={40} rating={4.9} sales={1315}/>
            <Card title={'Airdopes 141'} image={'AD_141'} price={1349} orgprice={4499} discount={70} playblack={42} rating={4.9} sales={662}/>
            <Card title={'Airdopes 131'} image={'AD_131'} price={899} orgprice={2999} discount={70} playblack={60} rating={4.8} sales={172}/>
        </div>
        <h4>Shop by <span>categories</span></h4>
        <div className='categories'>

                <Circlecard title='True wireless' image='./tws'/> 
                <Circlecard title='Wired Earphones' image='./Wired-Earphones'/> 
                <Circlecard title='Wireless Headphones' image='./Wireless-Headphones'/> 
                <Circlecard title='Wireless Speaker' image='./Wireless-Speaker'/> 
        </div>
        
    </div>
  )
}

export default ProductSection