import React, { Component, PropTypes } from 'react';

export default class BikeForm extends Component {
   handleTitle(event) {

   }

   render() {
      return(
         <div className="bike-form">
            <div>
               <h3>New biek day</h3>
               <p>fira mit ein vätska</p>
            </div>
            <div>
               <form>
                  <div className="form-group">
                     <label htmlFor="title">Title</label>
                     <input type="text"
                            id="title"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Title for biek" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="frame">Frame</label>
                     <input type="text"
                            id="frame"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Frame"/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="fork">Fork</label>
                     <input type="text"
                            id="fork"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Fork"/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="cranks">Cranks / BB</label>
                     <input type="text"
                            id="cranks"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Cranks / BB" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="pedals">Pedals</label>
                     <input type="text"
                            id="pedals"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Pedals" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="drivetrain">Drivetrain / Cog / Chainring / Chain</label>
                     <input type="text"
                            id="drivetrain"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Drivetrain / Cog / Chainring / Chain" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="handlebars">Handlebars / Stem</label>
                     <input type="text"
                            id="handlebars"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Handlebars / Stem" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="saddle">Saddle / Seatpost</label>
                     <input type="text"
                            id="saddle"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Saddle / Seatpost" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="frontWheel">Front Wheel / Hub / Tire</label>
                     <input type="text"
                            id="frontWheel"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Front Wheel / Hub / Tire" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="rearWheel">Rear Wheel / Hub / Tire</label>
                     <input type="text"
                            id="rearWheel"
                            className="form-control"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Rear Wheel / Hub / Tire" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="photos">Photos</label>
                     <input type="file"
                            id="photos"
                            className="form-control-file"
                            onChange={(e) => this.handleTitle(e)} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="instagram">Instagram</label>
                     <input type="text"
                            id="instagram"
                            className="form-control"
                            value="peteholmberg"
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Instagram" />
                  </div>

                  <button type="submit" className="btn btn-success">Submit</button>
               </form>
            </div>
         </div>
      )
   }
}

BikeForm.propTypes = {
   saveBike: PropTypes.func.isRequired
};

