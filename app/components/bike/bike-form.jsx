import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import update from 'react-addons-update';
import ReactFilestack from 'filestack-react';

export default class BikeForm extends Component {
   constructor(props) {
      super(props);
      const bike = this.props.bike;

      if (bike) {
         this.state = {
            id: bike.get('_id'),
            title: bike.get('title'),
            frame: bike.get('frame'),
            fork: bike.get('fork'),
            cranks: bike.get('cranks'),
            pedals: bike.get('pedals'),
            drivetrain: bike.get('drivetrain'),
            handlebars: bike.get('handlebars'),
            saddle: bike.get('saddle'),
            frontWheel: bike.get('frontWheel'),
            rearWheel: bike.get('rearWheel'),
            images: bike.get('images') ? bike.get('images').toJS() : [],
            instagram: this.props.user.get('instagram')
         }
      }
      else {
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
            images: [],
            instagram: this.props.user.get('instagram'),
         }
      }
   }

   handleTextInputChange(event) {
      const name = event.target.name;
      this.setState({
         [name]: event.target.value
      });
   }

   handleUploadImageResult(result) {
      if (result.filesUploaded.length > 0) {
         const newImages = result.filesUploaded.map(file => {
            return {
               url: file.url,
               name: file.filename
            }
         });
         const newImagesState = update(this.state.images, {
            $push: newImages
         });
         this.setState({ images: newImagesState });
      }
   }

   submit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state);
      hashHistory.push('/bikes');
   }

   formValid() {
      return this.state.title;
   }

   render() {
      const options = {
         accept: 'image/*',
         maxFiles: 5,
         storeTo: {
            location: 's3',
         },
         fromSources: ['local_file_system', 'instagram']
      };

      const submitClass = this.formValid() ? "btn btn-success" : "btn btn-danger fista-disabled";

      return(
         <div className="bike-form">
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
                  {
                     this.state.images.length > 0 &&
                        <div className="form-group">
                           <label htmlFor="photoPreview">Preview</label>
                           <div id="photoPreview">
                           {
                              this.state.images.map(image => {
                                 return (
                                    <img src={image.url}
                                         alt={image.name}
                                         key={image.name}
                                         className="preview-image" />
                                 );
                              })
                           }
                           </div>
                        </div>
                  }
                  <div className="form-group">
                     <label htmlFor="photos">Photos</label>
                     <ReactFilestack
                        apikey={'A3BcPUqFURlSDHWjF3UG1z'}
                        buttonText="Add images"
                        buttonClass="file-input-btn"
                        options={options}
                        onSuccess={this.handleUploadImageResult.bind(this)}
                     />
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

                  <button type="submit" className={submitClass}>Submit</button>
               </form>
            </div>
         </div>
      )
   }
}

BikeForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   bike: PropTypes.object
};

