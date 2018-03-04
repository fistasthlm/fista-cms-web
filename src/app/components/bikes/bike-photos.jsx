import React, { Component } from 'react';
import Image from '../../components/viewHelper/image/image';
import Lightbox from 'react-image-lightbox';

export default class BikePhotos extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpen: false,
         photoIndex: 0
      };
   }

   renderThumbnails(images) {
      return (
         <div className="image-thumbnails">
            {
               images.map((image, index) => {
                  return(
                     <div key={index}>
                        <Image className="thumbnail"
                               url={image.get('url')}
                               caption={image.get('name')}
                               resize={true}
                               width="300"
                               height="300" />
                     </div>
                  );
               })
            }
         </div>
      );
   }

   toggleLightBox() {
      this.setState({isOpen: !this.state.isOpen});
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

   render() {
      const { images } = this.props;
      const { isOpen, photoIndex } = this.state;
      return(
         <div className="photos">
            {
               images &&
                  <div onClick={this.toggleLightBox.bind(this)}>
                     <Image className="big-picture"
                            url={images.last().get('url')}
                            width="800"
                            height="800"
                            resize={true} />
                     {
                        images.size > 1 &&
                           this.renderThumbnails(images)
                     }
                  </div>

            }
            {
               isOpen &&
                  <Lightbox mainSrc={images.get(photoIndex).get('url')}
                            nextSrc={images.get(photoIndex + 1 % images.size).get('url')}
                            prevSrc={images.get((photoIndex + images.size) % images.size).get('url')}
                            onMovePrevRequest={this.previousImage.bind(this)}
                            onMoveNextRequest={this.nextImage.bind(this)}
                            onCloseRequest={this.toggleLightBox.bind(this)}
                            discourageDownloads={true}
                            enableZoom={false} />
            }
         </div>
      );
   }
}
