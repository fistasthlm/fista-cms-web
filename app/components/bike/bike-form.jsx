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
   handleTextInputChange(event) {
      const name = event.target.name;
      this.setState({
         [name]: event.target.value
      });
   }

   handlePhotosChange(event) {
      this.setState({
         photos: event.target.files
      });
   }

   submit(event) {
      event.preventDefault();

      const form = event.target;
      const data = this.state;

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
               <form onSubmit={(e) => this.submit(e)}>
                  <div className="form-group">
                     <label htmlFor="title">Title</label>
                     <input type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Title for biek" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="frame">Frame</label>
                     <input type="text"
                            id="frame"
                            name="frame"
                            className="form-control"
                            value={this.state.frame}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Frame"/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="fork">Fork / Headset</label>
                     <input type="text"
                            id="fork"
                            name="fork"
                            className="form-control"
                            value={this.state.fork}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Fork / Headset"/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="cranks">Cranks / BB</label>
                     <input type="text"
                            id="cranks"
                            name="cranks"
                            className="form-control"
                            value={this.state.cranks}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Cranks / BB" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="pedals">Pedals</label>
                     <input type="text"
                            id="pedals"
                            name="pedals"
                            className="form-control"
                            value={this.state.pedals}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Pedals" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="drivetrain">Drivetrain / Cog / Chainring / Chain</label>
                     <input type="text"
                            id="drivetrain"
                            name="drivetrain"
                            className="form-control"
                            value={this.state.drivetrain}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Drivetrain / Cog / Chainring / Chain" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="handlebars">Handlebars / Stem</label>
                     <input type="text"
                            id="handlebars"
                            name="handlebars"
                            className="form-control"
                            value={this.state.handlebars}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Handlebars / Stem" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="saddle">Saddle / Seatpost</label>
                     <input type="text"
                            id="saddle"
                            name="saddle"
                            className="form-control"
                            value={this.state.saddle}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Saddle / Seatpost" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="frontWheel">Front Wheel / Hub / Tire</label>
                     <input type="text"
                            id="frontWheel"
                            name="frontWheel"
                            className="form-control"
                            value={this.state.frontWheel}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Front Wheel / Hub / Tire" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="rearWheel">Rear Wheel / Hub / Tire</label>
                     <input type="text"
                            id="rearWheel"
                            name="rearWheel"
                            className="form-control"
                            value={this.state.rearWheel}
                            onChange={(e) => this.handleTextInputChange(e)}
                            placeholder="Rear Wheel / Hub / Tire" />
                  </div>
                  <div className="form-group">
                     <label htmlFor="photos">Photos</label>
                     <input type="file"
                            id="photos"
                            className="form-control-file"
                            onChange={(e) => this.handlePhotosChange(e)} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="instagram">Instagram</label>
                     <input type="text"
                            id="instagram"
                            name="instagram"
                            className="form-control"
                            value={this.state.instagram}
                            onChange={(e) => this.handleTextInputChange(e)}
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

