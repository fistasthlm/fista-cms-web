import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { List, fromJS } from 'immutable';
import ReactFilestack from 'filestack-react';
import BikeInput from 'components/bike/bike-input/bike-input';
import { isEquivalent } from 'utils/object/object';
import update from 'react-addons-update';

class EditBikeForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = this.defaultState(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleUploadImageResult = this.handleUploadImageResult.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    defaultState(props) {
        return {
            title: props.bike.get('title'),
            frame: props.bike.get('frame') || '',
            fork: props.bike.get('fork') || '',
            handlebars: props.bike.get('handlebars') || '',
            saddle: props.bike.get('saddle') || '',
            cranks: props.bike.get('cranks') || '',
            drivetrain: props.bike.get('drivetrain') || '',
            pedals: props.bike.get('pedals') || '',
            frontWheel: props.bike.get('frontWheel') || '',
            rearWheel: props.bike.get('rearWheel') || '',
            images: props.bike.get('images') || List(),
            instagram: props.bike.get('instagram') || '',
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleUploadImageResult(result) {
        if (result.filesUploaded.length > 0) {
            const newImages = result.filesUploaded.map(file => {
                return  {
                    url: file.url,
                    name: file.filename
                };
            });

            const newImagesState = fromJS(update(this.state.images.toJS(), {
                $push: newImages
            }));


            this.setState({
                images: newImagesState,
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.formValid()) {
            this.props.submit({
                id: this.props.bike.get('_id'),
                ...this.state
            });
        }
    }

    formValid() {
        return !isEquivalent(this.defaultState(this.props), this.state);
    }

    render() {
        const submitClass = this.formValid() ? 'add-bike__submit' : 'add-bike__submit add-bike__submit--disabled';
        const options = {
            accept: 'image/*',
            maxFiles: 5,
            storeTo: {
                location: 's3',
            },
            fromSources: ['local_file_system']
        };

        return (
            <form
                className="edit-bike__form"
                onSubmit={this.handleSubmit}>
                {
                    Object.entries(this.state).map((prop, index) => {
                        if (prop[0] !== 'images') {
                            return (
                                <BikeInput
                                    key={`${index}-${prop[0]}`}
                                    handleChange={this.handleChange}
                                    value={prop[1]}
                                    placeholder={prop[0]}
                                    className="edit-bike__input"
                                    name={prop[0]} />
                            );
                        }
                    })
                }
                {
                    this.state.images && this.state.images.size > 0 &&
                    <div id="photoPreview">
                        <h3>Photos</h3>
                        {
                            this.state.images.map(image => {
                                return (
                                    <img
                                        src={image.get('url')}
                                        alt={image.get('name')}
                                        key={image.get('name')}
                                        className="preview-image" />
                                );
                            })
                        }
                        <div className="add-bike__photos">
                            <ReactFilestack
                                apikey={'A3BcPUqFURlSDHWjF3UG1z'}
                                buttonText="Add images"
                                buttonClass="add-bike__add-photo"
                                options={options}
                                onSuccess={this.handleUploadImageResult} />
                        </div>
                    </div>

                }
                <button
                    type="submit"
                    className={submitClass}>
                    Save bieeek
                </button>
            </form>
        );
    }
}

EditBikeForm.propTypes = {
    bike: ImmutablePropTypes.map.isRequired,
    submit: PropTypes.func.isRequired,
};

export default EditBikeForm;
