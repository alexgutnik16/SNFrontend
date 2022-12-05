const getVideo = (id) => {
    switch (id) {
        case '1':
            return 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4#t=0.5';
        case '2':
            return 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4#t=0.5';
        case '3':
            return 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4#t=0.5';
        case '4':
            return 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4#t=0.5';
        default:
            return '';
    };
};

export default getVideo;