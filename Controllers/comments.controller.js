const { commentEpisode } = require('../Modules/comments')

// The request body should have the following form:
// 
// {
// 	episodeUid: 'string',
// 	comment: 'string'
// }
// 

exports.comments = async (req, res) => {
  try {
    const { episodeUid, comment} = req.body;
    const commented = await commentEpisode(episodeUid, comment)
    return res.status(200).send(commented);
  } catch (error) {
    return new Error(`Error fetching seasons : ${error}`)
  }
}