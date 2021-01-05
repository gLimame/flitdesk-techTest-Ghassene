## flitdesk-techTest-Ghassene
#REMARQUE
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


## Description


Simple Express API that enables a user to browse Star Trek episodes.
The Star Trek API is described at the following address: http://stapi.co/.

Exposed endpoint:

`GET` `/episodes/seasons` 
The endpoint should return the list of all the Star Trek episodes grouped by season.

`POST` `/episodes/comment`
A single Star Trek episode can be retrieved from:
[http://stapi.co/api/v1/rest/episode?uid=](http://stapi.co/api/v1/rest/episode?uid=EPMA0000001362):uid
The endpoint should log the comment provided by the user in the request body.
The request body should have the following form:
{
	episodeUid: 'string',
	comment: 'string'
}
The following output should be **logged** on the server:
{
	episodeUid: 'string',
	episodeTitle: 'string',
	episodeNumber: 'integer',
	episodeSerialNumber: 'string',
	comment: 'string'
}


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start


## Test

```bash
# unit tests
$ npm run test

