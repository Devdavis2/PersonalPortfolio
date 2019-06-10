import React from 'react'
import { Carousel } from 'react-materialize';
// var instance = M.Carousel.getInstance(elem);


class Portfolio extends React.Component {

  
    render () {
      return (
        <div className="grey lighten-1">
        <div className="container">
        
        <h3 className="white-text">Here's some of my work</h3>


  <Carousel options={{fullWidth: true,indicators: true}}>

<div className='blue darken-2'>
<a href='https://kicks-stock.herokuapp.com/kicks/user'> 
<h2 className=" btn blue white-text">Kicks Stock</h2></a>
<p className='white-text'>Kicks Stock is a sneaker app</p>
<img src='https://imgur.com/7gyDsYA.png'/>
</div> 

<div className='green darken-1'>
<a href='https://jobshunter.herokuapp.com/'> 
<h2 className=" btn green white-text">JobHunters</h2></a>
<p className='white-text'>JobHunters is a app that tracks and adds potenial jobs</p>
<img src='https://imgur.com/nfvZj8I.png'/>
</div> 

<div className='red darken-1'>
<a href='https://tonus-moods-eq.herokuapp.com/'> 
<h2 className=" btn red white-text">Tonus Mood EQ</h2></a>
<p className='white-text'>Tonus Mood EQ is a ... app</p>
<img src='https://imgur.com/gqQ64WQ.png'/>
</div> 

  </Carousel>

</div>
</div>
          
      );
    }
  }

  
  export default Portfolio;