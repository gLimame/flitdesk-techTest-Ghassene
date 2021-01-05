const fetch = require('node-fetch');

const fetchEpisode = async (uid) => {
  try {
    const fetched = await fetch(`http://stapi.co/api/v1/rest/episode?uid=${uid}`);
    return fetched.json();
  } catch (err) {
    throw err
  }
}

const formatEpisode = async (episode) => {
  try {
    const ep = episode.episode;
    const formated = {
      episodeUid: ep.uid,
      episodeTitle: ep.title,
      episodeNumber: ep.episodeNumber,
      episodeSerialNumber: ep.productionSerialNumber
    };

    return formated;
  } catch (err) {
    throw err;
  }
}

const addCommentToEpisode = async (episode, userComment) => {
  try {
    const commentedEpisode = { ...episode };
    commentedEpisode.comment = userComment;
    return commentedEpisode;
  } catch (err) {
    throw err;
  }
}

const commentEpisode = async (uid, userComment) => {
  try {
    const fetchedEpisode = await fetchEpisode(uid);
    const formatedEpisode = await formatEpisode(fetchedEpisode);
    const commented = await addCommentToEpisode(formatedEpisode, userComment);
    return commented;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  fetchEpisode,
  formatEpisode,
  addCommentToEpisode,
  commentEpisode
};

