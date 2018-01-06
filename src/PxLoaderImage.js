function PxLoaderImage(url, tags, priority, options) {
    options = options || {};
    this.type='img';
    var self = this,
        loader = null,
        img;

    img = this.img = new Image();
    if (options.origin) {
        img.crossOrigin = options.origin;
    }

    this.tags = tags;
    this.priority = priority;

    var onReadyStateChange = function () {
        if (self.img.readyState !== 'complete') {
            return;
        }

        onLoad();
    };

    var onLoad = function () {
        loader.onLoad(self);
        cleanup();
    };

    var onError = function () {
        loader.onError(self);
        cleanup();
    };

    var onTimeout = function () {
        loader.onTimeout(self);
        cleanup();
    };

    var cleanup = function () {
        self.unbind('load', onLoad);
        self.unbind('readystatechange', onReadyStateChange);
        self.unbind('error', onError);
    };

    this.start = function (pxLoader) {
        // we need the loader ref so we can notify upon completion
        loader = pxLoader;

        // NOTE: Must add event listeners before the src is set. We
        // also need to use the readystatechange because sometimes
        // load doesn't fire when an image is in the cache.
        self.bind('load', onLoad);
        self.bind('readystatechange', onReadyStateChange);
        self.bind('error', onError);

        self.img.src = url;
    };

    // called by PxLoader to check status of image (fallback in case
    // the event listeners are not triggered).
    this.checkStatus = function () {
        onReadyStateChange();
    };

    // called by PxLoader when it is no longer waiting
    this.onTimeout = function () {
        if (self.img.complete) {
            onLoad();
        } else {
            onTimeout();
        }
    };

    // returns a name for the resource that can be used in logging
    this.getName = function () {
        return url;
    };

    // cross-browser event binding
    this.bind = function (eventName, eventHandler) {
        self.img.addEventListener(eventName, eventHandler, false);
    };

    // cross-browser event un-binding
    this.unbind = function (eventName, eventHandler) {
        self.img.removeEventListener(eventName, eventHandler, false);
    };

}


module.exports = PxLoaderImage
