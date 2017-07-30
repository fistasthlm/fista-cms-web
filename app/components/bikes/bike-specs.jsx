import React, { Component } from 'react';

export default class BikeSpecs extends Component {
   render() {
      const { bike } = this.props;
      return (
         <div className="bike-specs">
            <ul className="property-group">
               <li className="property-group-item">
                  Frame - {bike.get('frame')}
               </li>
               <li className="property-group-item">
                  Fork - {bike.get('fork')}
               </li>
               <li className="property-group-item">
                  Cranks - {bike.get('cranks')}
               </li>
               <li className="property-group-item">
                  Drivetrain - {bike.get('drivetrain')}
               </li>
               <li className="property-group-item">
                  Handlebars/Stem - {bike.get('handlebars')}
               </li>
               <li className="property-group-item">
                  Pedals - {bike.get('pedals')}
               </li>
               <li className="property-group-item">
                  Saddle/Seatpost - {bike.get('saddle')}
               </li>
               <li className="property-group-item">
                  Front wheel - {bike.get('frontWheel')}
               </li>
               <li className="property-group-item">
                  Rear wheel - {bike.get('rearWheel')}
               </li>
            </ul>
         </div>
      );
   }
}
