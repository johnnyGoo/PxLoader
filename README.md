PxLoader is a Javascript library that helps you download images, sound files or anything else you need before you take a specific action on your site (like showing a user interface or starting a game). You can use it to create a preloader for HTML5 games and websites.
based on thinkpixellab/PxLoader
#npm
```
npm install smart-loader

import SmartLoader from 'smart-loader'

```
##link
```html
<script src="dist/smart-loader.js" />

```



###Usage
```javascript

var loader = new SmartLoader({capacity:2});
    image = loader.addImage('http://h5.2smart.cn/2017/sharp/images/index_bg.jpg',['image'],9)
    loader.addCompletionListener(function () {});
    loader.addProgressListener(function(e) {
        console.log('loaded:'+e.resource.getName()+' '+e.completedCount + ' / ' + e.totalCount)
    });
    // begin downloading images
    loader.start(['image']);

```
###Constructor
```
SmartLoader(option:Object)
option.capacity  //max files on progress
option.statusInterval //how frequently we poll resources for progress
option.loggingDelay //delay before logging since last progress change
option.noProgressTimeout //stop waiting if no progress has been made in the moving time window

```


###Methods
```
addImage(url:String, tags:Array=null, priority:Number=null, options:Object=null):img
addAudio(url:String, tags:Array=null, priority:Number=null, options:Object=null):audio
addVideo(url:String, tags:Array=null, priority:Number=null, options:Object=null):video
addData(url:String, tags:Array=null, priority:Number=null, options:Object=null):XMLHttpRequest

Event
addProgressListener(listener:Function)
addCompletionListener(listener:Function)

//get resource by url
getResource(url:String):img|audio|video|XMLHttpRequest

//startLoading
loader.start(orderedTags:Array=null);

```



















The MIT License

Copyright (c) 2017 Johnny

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.