import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Lightbox from 'react-image-lightbox';
import Image from '../../viewHelper/image/image';

export default class BikePhotos extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            photoIndex: 0
        };

        this.toggleLightBox = this.toggleLightBox.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    renderThumbnails(images) {
        return (
            <div className="bike-photos__image-thumbnails">
                {
                    images.map((image, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    className="bike-photos__thumbnail"
                                    url={image.get('url')}
                                    resize={true}
                                    width="300"
                                    height="300"/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    toggleLightBox() {
        if (document.body.clientWidth <= 768) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    previousImage() {
        const { images } = this.props;
        const { photoIndex } = this.state;

        this.setState({
            photoIndex: (photoIndex + images.size - 1) % images.size,
        });
    }

    nextImage() {
        const { images } = this.props;
        const { photoIndex } = this.state;

        this.setState({
            photoIndex: (photoIndex + 1) % images.size,
        });
    }

    getPictureClass(images) {
        return images.size > 1 ?
                'bike-photos__big-picture--thumbnails'
            :
                'bike-photos__big-picture';
    }

    render() {
        const { images } = this.props;
        const { isOpen, photoIndex } = this.state;

        return (
            <div className="bike-photos">
                {
                    images &&
                        <div onClick={this.toggleLightBox}>
                            <Image
                                className={this.getPictureClass(images)}
                                url={images.first().get('url')}
                                resize={false} />
                            {
                                images.size > 1 &&
                                    this.renderThumbnails(images)
                            }
                        </div>
                }
                {
                    isOpen &&
                        <Lightbox
                            mainSrc={images.get(photoIndex).get('url')}
                            nextSrc={images.get((photoIndex + 1) % images.size).get('url')}
                            prevSrc={images.get((photoIndex + images.size - 1) % images.size).get('url')}
                            onMovePrevRequest={this.previousImage}
                            onMoveNextRequest={this.nextImage}
                            onCloseRequest={this.toggleLightBox}
                            discourageDownloads={true}
                            enableZoom={false} />
                }
            </div>
        );
    }
}

BikePhotos.propTypes = {
    images: PropTypes.instanceOf(List).isRequired
};
