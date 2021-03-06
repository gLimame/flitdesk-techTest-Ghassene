const fetch = require('node-fetch');
const _ = require('lodash')

const fetchAllData = async () => {
  try {
    const fetched = await fetch('http://stapi.co/api/v1/rest/episode/search');
    return fetched.json();
  } catch (err) {
    throw err;
  }
}

const getEpisodesList = async (data) => {
  try {
    const { episodes } = data;
    return episodes;
  } catch (err) {
    throw err;
  }
}

const getSeasonsList = async (episodes) => {
  try {
    const seasons = _.uniq(episodes.map(episode => episode.season.title));
    return seasons;
  } catch (err) {
    throw err;
  }
}

const formatEpisodesBySeason = async (listSeasons, listEpisodes) => {
  try {
    const seasons = listSeasons.map(title => title = { seasonTitle: title, episodes: [] });
    for (const episode of listEpisodes) {
      const resultat = seasons.map((season, index, seasons) => {
        if (season.seasonTitle == episode.season.title) {
          const formatedEpisode = {
            episodeUid: episode.uid,
            episodeTitle: episode.title,
            episodeNumber: episode.episodeNumber,
            episodeSerialNumber: episode.productionSerialNumber
          }
          seasons[index].episodes.push(formatedEpisode)
        }
      })
    }
    return seasons;
  } catch (err) {
    throw err;
  }
}

const getEpisodesBySeasons = async () => {
  try {
    const allData = await fetchAllData();
    const listEpisodes = await getEpisodesList(allData);
    const listSeasons = await getSeasonsList(listEpisodes);
    const listBySeason = await formatEpisodesBySeason(listSeasons, listEpisodes);
    return listBySeason;
  } catch (err) {
    throw err
  }
}

module.exports = {
  getEpisodesBySeasons,
  getEpisodesList,
  getSeasonsList,
  formatEpisodesBySeason,
};

