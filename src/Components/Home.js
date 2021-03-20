import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container' style={{marginTop:'12%'}}>
           <div class="row">
        <div class="col-sm-3">
            <div class="card">
            <div style={{padding:'3px'}}>
                
                <Link to="/destination" class="btn btn-primary"><img style={{width:'100%',height:'180px'}} src="https://i.imgur.com/8Wd2xEF.png" alt=""/>
                <h5 class="card-title">Bike</h5></Link>
            </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
            <div style={{padding:'3px'}}>
               
                <Link to="/destination" class="btn btn-primary"><img style={{width:'100%',height:'180px'}} src="https://i.imgur.com/6OeGDXI.png" alt=""/>
                <h5 class="card-title">Car</h5></Link>
            </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
            <div style={{padding:'3px'}}>
            
                <Link to="/destination" class="btn btn-primary"><img style={{width:'100%',height:'180px'}} src="https://i.imgur.com/5IBJBFH.png" alt=""/>
                <h5 class="card-title">Bus</h5></Link>
            </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
            <div style={{padding:'3px'}}>
            
                <Link to="/destination"  class="btn btn-primary"><img style={{width:'100%',height:'180px'}} src="https://i.imgur.com/tefqsif.png" alt=""/>
                <h5 class="card-title">Train</h5></Link>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Home;