import axios from 'axios';
import { users } from "./dataConstants";

const API_URL = 'http://localhost:8000';

const getRecVideos = () => {
    const url = `${API_URL}/network/api/get_rec_videos/`;
    return axios.get(url).then(response => response.data);
};

const getSubVideos = () => {
    const url = `${API_URL}/network/api/get_sub_videos/`;
    return axios.get(url).then(response => response.data);
};

const getVideo = (videoId) => {
    const url = `${API_URL}/network/api/get_video/${videoId}`;
    return axios.get(url).then(response => response.data);
}

const postVideo = (video, heading, text) => {
    const url = `${API_URL}/network/api/get_rec_videos/`;
    return axios.post(url, video, heading, text);
}

const deleteVideo = (videoId) => {
    const url = `${API_URL}/network/api/get_video/${videoId}`;
    return axios.delete(url);
}

const getUser = (username) => {
    const url = `${API_URL}/network/api/get_profile/${username}`;
    return axios.get(url).then(response => response.data);
}

const getComments = (videoId) => {
    const url = `${API_URL}/network/api/get_comments/${videoId}`;
    return axios.get(url).then(response => response.data);
};

const getComment = (commentId) => {
    const url = `${API_URL}/network/api/get_comment/${commentId}`;
    return axios.get(url).then(response => response.data);
};

const postComment = (videoId, text) => {
    const url = `${API_URL}/network/api/get_comments/${videoId}`;
    return axios.post(url, text);
};

const deleteComment = (commentId) => {
    const url = `${API_URL}/network/api/get_comment/${commentId}`;
    return axios.delete(url);
};

const getLikes = (videoId) => {
    const url = `${API_URL}/network/api/get_likes/${videoId}`;
    return axios.get(url).then(response => response.data);
}

const getLike = (likeId) => {
    const url = `${API_URL}/network/api/get_like/${likeId}`;
    return axios.get(url).then(response => response.data);
}

const postLike = (videoId) => {
    const url = `${API_URL}/network/api/get_like/${videoId}`;
    return axios.post(url);
}

const deleteLike = (likeId) => {
    const url = `${API_URL}/network/api/get_like/${likeId}`;
    return axios.delete(url);
}

const getSubscibtions = (videoId) => {
    const url = `${API_URL}/network/api/get_subscribtions/${videoId}`;
    return axios.get(url).then(response => response.data);
}

const getSubscibtion = (subscibtionId) => {
    const url = `${API_URL}/network/api/get_subscribtion/${subscibtionId}`;
    return axios.get(url).then(response => response.data);
}

const postSubscibtion = (videoId) => {
    const url = `${API_URL}/network/api/get_subscribtions/${videoId}`;
    return axios.post(url);
}

const deleteSubscibtion = (subscibtionId) => {
    const url = `${API_URL}/network/api/get_subscribtion/${subscibtionId}`;
    return axios.delete(url);
}

const getBans = (videoId) => {
    const url = `${API_URL}/network/api/get_bans/${videoId}`;
    return axios.get(url).then(response => response.data);
}

const getBan = (banId) => {
    const url = `${API_URL}/network/api/get_ban/${banId}`;
    return axios.get(url).then(response => response.data);
}

const postBan = (videoId) => {
    const url = `${API_URL}/network/api/get_bans/${videoId}`;
    return axios.post(url);
}

const deleteBan = (banId) => {
    const url = `${API_URL}/network/api/get_ban/${banId}`;
    return axios.delete(url);
}

const getUsers = () => {
    return users;
};

export default {
    getRecVideos,
    getSubVideos,
    getVideo,
    postVideo,
    deleteVideo,
    getUser,
    getUsers,
    getComments,
    getComment,
    postComment,
    deleteComment,
    getLikes,
    getLike,
    postLike,
    deleteLike,
    getSubscibtions,
    getSubscibtion,
    postSubscibtion,
    deleteSubscibtion,
    getBans,
    getBan,
    postBan,
    deleteBan
};