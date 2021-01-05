const fetch = require('node-fetch');

const fetchAllEpisodes = async () => {
  const fetched = await fetch('http://stapi.co/api/v1/rest/episode/search');
  return fetched.json();
}

const getSeasonsList = async (data) =>  (episodes) => episodes.season ;



exports.getEpisodesBySeasons = async () => {
  const allEpisodes = await fetchAllEpisodes();
  const allSeasons = await getSeasonsList(allEpisodes);
  
  // console.log(allEpisodes)
  console.log(allSeasons)

  return allEpisodes;
}

