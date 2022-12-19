import { videos, users, comments } from "./dataConstants";

const getRecVideos = () => {
    return videos;
};

const getSubVideos = () => {
    return videos;
};

const getVideo = (id) => {
    switch (id) {
        case '1':
            return videos[0];
        case '2':
            return videos[1];
        case '3':
            return videos[2];
        case '4':
            return videos[3];
        default:
            return {};
    };
};

const getUsers = () => {
    return users;
};

const getUser = (id) => {
    switch (id) {
        case '1':
            return 'Alex';
        case '2':
            return 'Bob';
        case '3':
            return 'Tom';
        case '4':
            return 'Oleg';
        default:
            return '';
    };
};

const getComments = (id) => {
    switch (id) {
        case '1':
            return comments[0];
        case '2':
            return comments[1];
        case '3':
            return comments[2];
        case '4':
            return comments[3];
        default:
            return {};
    };
};

export default {
    getVideo,
    getUser,
    getUsers,
    getRecVideos,
    getSubVideos,
    getComments
};