/**
 * Created by johnny on 2017/12/25.
 */
import PxLoader from './PxLoader'
import PxLoaderImage from './PxLoaderImage'
import PxLoaderData from './PxLoaderData'
import PxLoaderAudio from './PxLoaderAudio'
import PxLoaderVideo from './PxLoaderVideo'


// Why don't you export default?
// https://github.com/webpack/webpack/issues/3560

// add a convenience method to PxLoader for adding an image
PxLoader.prototype.addImage = function (url, tags, priority, options) {
    var imageLoader = new PxLoaderImage(url, tags, priority, options);
    this.add(imageLoader);

    // return the img element to the caller
    return imageLoader.img;
};
// add a convenience method to PxLoader for adding a data
PxLoader.prototype.addData = function (url, tags, priority, options) {
    var dataLoader = new PxLoaderData(url, tags, priority, options);

    this.add(dataLoader);

    // return the request object to the caller
    return dataLoader.xhr;
};

// add a convenience method to PxLoader for adding audio
PxLoader.prototype.addAudio = function (url, tags, priority, options) {
    var audioLoader = new PxLoaderAudio(url, tags, priority, options);
    this.add(audioLoader);

    // return the audio element to the caller
    return audioLoader.audio;
};

// add a convenience method to PxLoader for adding a video
PxLoader.prototype.addVideo = function (url, tags, priority, options) {
    var videoLoader = new PxLoaderVideo(url, tags, priority, options);
    this.add(videoLoader);

    // return the video element to the caller
    return videoLoader.video;
};

window.SmartLoader=PxLoader
export default SmartLoader
export {SmartLoader}