# flitdesk-techTest-Ghassene

Sauf erreur de ma part, chercher à avoir ce résultat lors de la requette GET
[
	{
		seasonNumber: 'integer',
		episodes: [
			{
				episodeUid: 'string',
				episodeTitle: 'string',
				episodeNumber: 'int',
				episodeSerialNumber: 'string'
			}
		]	
	}
]

peut amener l'utilisateur de l'API vers une incompréhension.
En effet, ## seasonNumber: 'integer', ## n'est pas unique, 
j'ai donc opté pour ce résultat final afin d'éviter un mélange des saisons
[
  {
    seasonTitle: 'DS9 Season 6',
    episodes: [
      {
        episodeUid: 'EPMA0000000979',
        episodeTitle: 'The Reckoning',
        episodeNumber: 21,
        episodeSerialNumber: '40510-545'
      }
    ]
  }
]
