import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import ReactFilestack from 'filestack-react';
import history from 'utils/history';
import BikeInput from './bikeInput/bike-input';

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
            };
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
            };
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
                };
            });

            const newImagesState = update(this.state.images, {
                $push: newImages
            });

            this.setState({images: newImagesState});
        }
    }

    submit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        history.push('/bikes');
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

        const submitClass = this.formValid() ? 'btn btn-success' : 'btn btn-danger fista-disabled';

        return (
            <form
                className="add-bike__form"
                onSubmit={(e) => this.submit(e)}>
                <input type="text"
                       id="title"
                       name="title"
                       className="bike-form__input"
                       value={this.state.title}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Title for biek"/>
                <input type="text"
                       id="frame"
                       name="frame"
                       className="form-control"
                       value={this.state.frame}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Frame"/>
                <input type="text"
                       id="fork"
                       name="fork"
                       className="form-control"
                       value={this.state.fork}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Fork / Headset"/>
                <input type="text"
                       id="cranks"
                       name="cranks"
                       className="form-control"
                       value={this.state.cranks}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Cranks / BB"/>
                <input type="text"
                       id="pedals"
                       name="pedals"
                       className="form-control"
                       value={this.state.pedals}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Pedals"/>
                <input type="text"
                       id="drivetrain"
                       name="drivetrain"
                       className="form-control"
                       value={this.state.drivetrain}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Drivetrain / Cog / Chainring / Chain"/>
                <input type="text"
                       id="handlebars"
                       name="handlebars"
                       className="form-control"
                       value={this.state.handlebars}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Handlebars / Stem"/>
                <input type="text"
                       id="saddle"
                       name="saddle"
                       className="form-control"
                       value={this.state.saddle}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Saddle / Seatpost"/>
                <input type="text"
                       id="frontWheel"
                       name="frontWheel"
                       className="form-control"
                       value={this.state.frontWheel}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Front Wheel / Hub / Tire"/>
                <input type="text"
                       id="rearWheel"
                       name="rearWheel"
                       className="form-control"
                       value={this.state.rearWheel}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Rear Wheel / Hub / Tire"/>
                {
                    this.state.images.length > 0 &&
                        <div id="photoPreview">
                            {
                                this.state.images.map(image => {
                                    return (
                                        <img src={image.url}
                                             alt={image.name}
                                             key={image.name}
                                             className="preview-image"/>
                                    );
                                })
                            }
                        </div>
                }
                <label htmlFor="photos">Photos</label>
                <ReactFilestack
                    apikey={'A3BcPUqFURlSDHWjF3UG1z'}
                    buttonText="Add images"
                    buttonClass="file-input-btn"
                    options={options}
                    onSuccess={this.handleUploadImageResult.bind(this)}/>
                <input type="text"
                       id="instagram"
                       name="instagram"
                       className="form-control"
                       value={this.state.instagram}
                       onChange={(e) => this.handleTextInputChange(e)}
                       placeholder="Instagram"/>
                <button type="submit" className={submitClass}>Submit</button>
            </form>
        );
    }
}

BikeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    bike: PropTypes.object
};

