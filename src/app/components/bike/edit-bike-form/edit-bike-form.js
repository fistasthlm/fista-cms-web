import React, { PureComponent } from 'react';
import BikeInput from 'components/bike/bike-input/bike-input';

class EditBikeForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: props.bike.get('title'),
            frame: props.bike.get('frame'),
            fork: props.bike.get('fork'),
            cranks: props.bike.get('cranks'),
            pedals: props.bike.get('pedals'),
            drivetrain: props.bike.get('drivetrain'),
            handlebars: props.bike.get('handlebars'),
            saddle: props.bike.get('saddle'),
            frontWheel: props.bike.get('frontWheel'),
            rearWheel: props.bike.get('rearWheel'),
            images: props.bike.get('images'),
            instagram: props.bike.get('instagram'),
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
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
            </form>
        );
    }
}

export default EditBikeForm;
