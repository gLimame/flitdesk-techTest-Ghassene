const { getEpisodesBySeasons } = require('./seasons')

exports.seasons = async (req, res) => {
  try {
    // fetch GET data
    const data = await getEpisodesBySeasons() /* fetch func */
    // transform data
    // const episodeBySeasons = await 'FormatedData'
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500 ).send(new Error(`Error fetching seasons : ${error}`))
  }
}

exports.comments = async (req, res) => {
  try {
    // fetch POST data
    const data = await 'DATA' /* fetch func */
    // transform data
    const formattedJsonData = await 'FormatedData'
    return res.status(200).send(formattedJsonData);
  } catch (error) {
    return new Error(`Error fetching seasons : ${error}`)
  }
}