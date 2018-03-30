import React, { PureComponent } from 'react';
import ReactFilestack from 'filestack-react';
import BikeInput from 'components/bike/bike-input/bike-input';
import { isEquivalent } from 'utils/object/object';

class EditBikeForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = this.defaultState(props);

        this.handleChange = this.handleChange.bind(this);
    }

    defaultState(props) {
        return {
            fork: props.bike.get('fork') || '',
            cranks: props.bike.get('cranks') || '',
            saddle: props.bike.get('saddle') || '',
            handlebars: props.bike.get('handlebars') || '',
            frame: props.bike.get('frame') || '',
            frontWheel: props.bike.get('frontWheel') || '',
            instagram: props.bike.get('instagram') || '',
            rearWheel: props.bike.get('rearWheel') || '',
            title: props.bike.get('title'),
            images: props.bike.get('images') || [],
            pedals: props.bike.get('pedals') || '',
            drivetrain: props.bike.get('drivetrain') || '',
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
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
            <form className="edit-bike__form">
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

export default EditBikeForm;
