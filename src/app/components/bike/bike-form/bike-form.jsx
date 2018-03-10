import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import ReactFilestack from 'filestack-react';
import BikeInput from 'components/bike/bike-input/bike-input';
import history from 'utils/history';

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
            images: [],
            instagram: props.user.get('instagram'),
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleUploadImageResult = this.handleUploadImageResult.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleTextInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
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

            this.setState({
                images: newImagesState
            });
        }
    }

    submit(event) {
        event.preventDefault();

        if (this.formValid()) {
            this.props.onSubmit(this.state);
            history.push('/bikes');
        }
    }

    formValid() {
        return this.state.title && this.state.images.length > 0;
    }

    render() {
        const options = {
            accept: 'image/*',
            maxFiles: 5,
            storeTo: {
                location: 's3',
            },
            fromSources: ['local_file_system']
        };

        const submitClass = this.formValid() ? 'add-bike__submit' : 'add-bike__submit add-bike__submit--disabled';

        return (
            <form
                className="add-bike__form"
                onSubmit={this.submit}>
                <BikeInput
                    type="text"
                    name="title"
                    className="add-bike__input"
                    value={this.state.title}
                    handleChange={this.handleTextInputChange}
                    placeholder="Title for bike" />
                <BikeInput
                    type="text"
                    name="frame"
                    className="add-bike__input"
                    value={this.state.frame}
                    handleChange={this.handleTextInputChange}
                    placeholder="Frame" />
                <BikeInput
                    type="text"
                    name="fork"
                    className="add-bike__input"
                    value={this.state.fork}
                    handleChange={this.handleTextInputChange}
                    placeholder="Fork / Headset" />
                <BikeInput
                    type="text"
                    name="cranks"
                    className="add-bike__input"
                    value={this.state.cranks}
                    handleChange={this.handleTextInputChange}
                    placeholder="Cranks / BB" />
                <BikeInput
                    type="text"
                    name="pedals"
                    className="add-bike__input"
                    value={this.state.pedals}
                    handleChange={this.handleTextInputChange}
                    placeholder="Pedals" />
                <BikeInput
                    type="text"
                    name="drivetrain"
                    className="add-bike__input"
                    value={this.state.drivetrain}
                    handleChange={this.handleTextInputChange}
                    placeholder="Drivetrain / Cog / Chainring / Chain" />
                <BikeInput
                    type="text"
                    name="handlebars"
                    className="add-bike__input"
                    value={this.state.handlebars}
                    handleChange={this.handleTextInputChange}
                    placeholder="Handlebars / Stem" />
                <BikeInput
                    type="text"
                    name="saddle"
                    className="add-bike__input"
                    value={this.state.saddle}
                    handleChange={this.handleTextInputChange}
                    placeholder="Saddle / Seatpost" />
                <BikeInput
                    type="text"
                    name="frontWheel"
                    className="add-bike__input"
                    value={this.state.frontWheel}
                    handleChange={this.handleTextInputChange}
                    placeholder="Front Wheel / Hub / Tire" />
                <BikeInput
                    type="text"
                    name="rearWheel"
                    className="add-bike__input"
                    value={this.state.rearWheel}
                    handleChange={this.handleTextInputChange}
                    placeholder="Rear Wheel / Hub / Tire" />

                <BikeInput
                    type="text"
                    name="instagram"
                    className="add-bike__input"
                    value={this.state.instagram}
                    handleChange={this.handleTextInputChange}
                    placeholder="Instagram" />
                {
                    this.state.images.length > 0 &&
                        <div id="photoPreview">
                            <span>Photos</span>
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
                }
                <div className="add-bike__photos">
                    <ReactFilestack
                        apikey={'A3BcPUqFURlSDHWjF3UG1z'}
                        buttonText="Add images"
                        buttonClass="add-bike__add-photo"
                        options={options}
                        onSuccess={this.handleUploadImageResult} />
                </div>
                <button
                    type="submit"
                    className={submitClass}>
                    Save bieeek
                </button>
            </form>
        );
    }
}

BikeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

