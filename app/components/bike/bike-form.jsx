import React, { Component, PropTypes } from 'react';

export default class BikeForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         frame: '',
         fork: '',
         cranks: '',
         pedals: '',
         drivetrain: '',
         handlebars: '',
         saddle: '',
         frontWheel: '',
         rearWheel: '',
         photos: [],
         instagram: this.props.user.get('instagram')
      }
   }
   handleTitle(event) {

   }

   submit(event) {
      event.preventDefault();

      const form = event.target;
      const data = {

      };

      this.props.onSubmit(data);

   }

   render() {
      return(
         <div className="bike-form">
            <div>
               <h3>New biek day</h3>
               <p>fira mit ein vätska</p>
            </div>
            <div>
               <form onSubmit={this.submitBike}>
                  <div className="form-group">
                     <label htmlFor="title">Title</label>
                     <input type="text"
                            id="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Title for biek" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="frame">Frame</label>
                     <input type="text"
                            id="frame"
                            className="form-control"
                            value={this.state.frame}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Frame"/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="fork">Fork / Headset</label>
                     <input type="text"
                            id="fork"
                            className="form-control"
                            value={this.state.fork}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Fork / Headset"/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="cranks">Cranks / BB</label>
                     <input type="text"
                            id="cranks"
                            className="form-control"
                            value={this.state.cranks}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Cranks / BB" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="pedals">Pedals</label>
                     <input type="text"
                            id="pedals"
                            className="form-control"
                            value={this.state.pedals}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Pedals" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="drivetrain">Drivetrain / Cog / Chainring / Chain</label>
                     <input type="text"
                            id="drivetrain"
                            className="form-control"
                            value={this.state.drivetrain}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Drivetrain / Cog / Chainring / Chain" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="handlebars">Handlebars / Stem</label>
                     <input type="text"
                            id="handlebars"
                            className="form-control"
                            value={this.state.handlebars}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Handlebars / Stem" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="saddle">Saddle / Seatpost</label>
                     <input type="text"
                            id="saddle"
                            className="form-control"
                            value={this.state.saddle}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Saddle / Seatpost" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="frontWheel">Front Wheel / Hub / Tire</label>
                     <input type="text"
                            id="frontWheel"
                            className="form-control"
                            value={this.state.frontWheel}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Front Wheel / Hub / Tire" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="rearWheel">Rear Wheel / Hub / Tire</label>
                     <input type="text"
                            id="rearWheel"
                            className="form-control"
                            value={this.state.rearWheel}
                            onChange={(e) => this.handleTitle(e)}
                            placeholder="Rear Wheel / Hub / Tire" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="photos">Photos</label>
                     <input type="file"
                            id="photos"
                            className="form-control-file"
                            value={this.state.photos}
                            onChange={(e) => this.handleTitle(e)} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="instagram">Instagram</label>
                     <input type="text"
                            id="instagram"
                            className="form-control"
                            value={this.state.instagram}
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
   onSubmit: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired
};

