const { getEpisodesBySeasons } = require('../Modules/seasons')

exports.seasons = async (req, res) => {
  try {
    const data = await getEpisodesBySeasons()
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500 ).send(new Error(`Error fetching seasons : ${error}`))
  }
}