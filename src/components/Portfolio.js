import React from 'react'
import { Carousel } from 'react-materialize';



class Portfolio extends React.Component {

  
    render () {
      return (
        <div className="portfolio grey lighten-3">
        <div className="container">
        
        <h4 className="work blue-text">Work</h4>

  <Carousel options={{fullWidth: true,indicators: true}}>

<div className='blue darken-2'>
<a target="_blank" href='https://kicks-stock.herokuapp.com/kicks/user'> 
<h3 className=" btn blue white-text">Kicks Stock</h3></a>
<p className=' container white-text'>Kicks Stock is a sneaker app for resellers and limited edition kicks</p>
<img src='https://imgur.com/7gyDsYA.png'/>
</div> 

<div className='green darken-1'>
<a target="_blank" href='https://jobshunter.herokuapp.com/'> 
<h3 className=" btn green white-text">JobHunters</h3></a>
<p className='container white-text'>JobHunters is a app that tracks and adds potenial jobs</p>
<img src='https://imgur.com/nfvZj8I.png'/>
</div> 

<div className='red darken-1'>
<a target="_blank" href='https://tonus-moods-eq.herokuapp.com/'> 
<h3 className=" btn red white-text">Tonus Mood EQ</h3></a>
<p className='container white-text'>Tonus Mood EQ is an prototype app that quantifies how music affects users mood to optimize their playlist based on emotional insights</p>
<img src='https://imgur.com/gqQ64WQ.png'/>
</div> 

<div className='grey darken-4'>
<a target="_blank" href='http://tonusaudio.com/'> 
<h3 className=" btn grey darken-3 red white-text">Tonus Audio</h3></a>
<p className=' container white-text'>Tonus Audio is an ecommerce site for a consumer electronics audio brand</p>
<img src='https://imgur.com/XsqWpEz.png'/>
</div> 
  </Carousel>

</div>

</div>

          
      );
    }
  }

  
  export default Portfolio;