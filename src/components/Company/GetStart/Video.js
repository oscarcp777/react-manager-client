import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class Video extends Component {
    constructor(props) {
        super();
        this.state = {
            showVideo:false
        };
        this.images = [
            {
                original: props.imgVideo,
                renderItem: this.renderVideo.bind(this),
                embedUrl: props.url
            }
        ]
    }
    toggleShowVideo() {
        this.setState({showVideo: true});
    }

    renderVideo(item) {
        return (
            <div className='image-gallery-image'>
                {this.state.showVideo
                    ? <div className='video-wrapper'>
                                <iframe  src={item.embedUrl} frameBorder='0' allowFullScreen></iframe>
                        </div>
                    : <a onClick={this.toggleShowVideo.bind(this)}>
                        <div className='play-button'></div>
                        <img src={item.original} role="presentation"/>
                    </a>
                  }
            </div>
        );
    }
    render() {
        return (
          <ImageGallery
            showThumbnails={false}
            showIndex={false}
            showNav={false}
            items={this.images}
            showBullets={false}
            showPlayButton={false}
            showFullscreenButton={false}
        />)
    }
}
export default Video;
