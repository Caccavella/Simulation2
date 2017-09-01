import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { updatePropAddress, updatePropCity, updatePropState, updatePropZip } from '../../ducks/reducer';

class StepTwo extends Component {
    render(){
        const { updatePropAddress, updatePropCity, updatePropState, updatePropZip } = this.props;

        return(
        <div className="step_container">
                <p> Step 2</p>
            <div className="step2_address_container">
                <span>Address</span>
                <input placeholder="address" type="text" onChange={ ( e ) => updateAddress( e.target.value ) } />
            </div>
            
            <div className="step2_middle_container">
                <div className="step2_city">
                    <span>City</span>
                    <input placeholder="City" type="text" onChange={ ( e ) => updateCity( e.target.value ) } />   
                </div>
                <div className="step2_state">
                    <span>State</span>
                    <input placeholder="State" type="text" onChange={ ( e ) => updateState( e.target.value ) } /> 
                </div> 
            </div>

            <div className="step2_zip_container">
                <span>Zip</span>
                <input placeholder="Zip" type="text" onChange={ ( e ) => updateZip( e.target.value ) } />
 
        <Link to="/StepOne"><button className="/StepTwo"> Previous Step </button></Link>
        <Link to="/StepThree"><button className="/StepTwo"> Next Step </button></Link>
            </div>
        </div>          
      

       )
    }
}

function mapStateToProps(state) {
    const { address, city, state, zip } = state;

    return{
        address,
        city,
        state,
        zip
    };
}

export default connect (mapStateToProps, { updatePropAddress, updatePropCity, updatePropState, updatePropZip }) (StepTwo); 