const fetch = require('node-fetch');

const fetchAllEpisodes = async () => {
  try {
    const fetched = await fetch('http://stapi.co/api/v1/rest/episode/search');
    return fetched.json();
  } catch (err) {
    throw err;
  }
}

const getSeasonsList = async (data) => {
  try {
    const { episodes } = data
    // console.log(episodes)
    // const seasons = async (episode) => episode.season
    const seasons = episodes.map(episode => episode.season.title.filter(title => seasons.include(title) == false ))
    return seasons;
  } catch (err) {
    throw err;
  }
}




exports.getEpisodesBySeasons = async () => {
  const allEpisodes = await fetchAllEpisodes();
  const allSeasons = await getSeasonsList(allEpisodes);

  // console.log(allEpisodes)
  console.log(allSeasons)

  return allEpisodes;
}

