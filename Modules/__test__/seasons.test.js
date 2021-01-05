const { getEpisodesList,
  getSeasonsList,
  formatEpisodesBySeason } = require("../seasons");

const data = {
  "page": {
    "pageNumber": 0,
    "pageSize": 50,
    "numberOfElements": 50,
    "totalElements": 745,
    "totalPages": 15,
    "firstPage": true,
    "lastPage": false
  },
  "sort": {
    "clauses": [

    ]
  },
  "episodes": [
    {
      "uid": "EPMA0000000979",
      "title": "The Reckoning",
      "titleGerman": "Zeit der Abrechnung",
      "titleItalian": null,
      "titleJapanese": "善と悪の叫び",
      "series": {
        "uid": "SEMA0000073238",
        "title": "Star Trek: Deep Space Nine"
      },
      "season": {
        "uid": "SAMA0000001740",
        "title": "DS9 Season 6"
      },
      "seasonNumber": 6,
      "episodeNumber": 21,
      "productionSerialNumber": "40510-545",
      "featureLength": false,
      "stardateFrom": null,
      "stardateTo": null,
      "yearFrom": 2374,
      "yearTo": 2374,
      "usAirDate": "1998-04-29",
      "finalScriptDate": null
    },
    {
      "uid": "EPMA0000001548",
      "title": "Living Witness",
      "titleGerman": "Der Zeitzeuge",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000000029",
        "title": "Star Trek: Voyager"
      },
      "season": {
        "uid": "SAMA0000001745",
        "title": "VOY Season 4"
      },
      "seasonNumber": 4,
      "episodeNumber": 23,
      "productionSerialNumber": "191",
      "featureLength": false,
      "stardateFrom": null,
      "stardateTo": null,
      "yearFrom": 3074,
      "yearTo": 3074,
      "usAirDate": "1998-04-29",
      "finalScriptDate": null
    },
    {
      "uid": "EPMA0000001540",
      "title": "Hunters",
      "titleGerman": "Jäger",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000000029",
        "title": "Star Trek: Voyager"
      },
      "season": {
        "uid": "SAMA0000001745",
        "title": "VOY Season 4"
      },
      "seasonNumber": 4,
      "episodeNumber": 15,
      "productionSerialNumber": "183",
      "featureLength": false,
      "stardateFrom": 51501.4,
      "stardateTo": 51501.4,
      "yearFrom": 2374,
      "yearTo": 2374,
      "usAirDate": "1998-02-11",
      "finalScriptDate": "1997-10-16"
    },
    {
      "uid": "EPMA0000001558",
      "title": "Nothing Human",
      "titleGerman": "Inhumane Praktiken",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000000029",
        "title": "Star Trek: Voyager"
      },
      "season": {
        "uid": "SAMA0000001753",
        "title": "VOY Season 5"
      },
      "seasonNumber": 5,
      "episodeNumber": 8,
      "productionSerialNumber": "200",
      "featureLength": false,
      "stardateFrom": null,
      "stardateTo": null,
      "yearFrom": 2375,
      "yearTo": 2375,
      "usAirDate": "1998-12-02",
      "finalScriptDate": null
    },
    {
      "uid": "EPMA0000000955",
      "title": "Soldiers of the Empire",
      "titleGerman": "Martoks Ehre",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000073238",
        "title": "Star Trek: Deep Space Nine"
      },
      "season": {
        "uid": "SAMA0000001739",
        "title": "DS9 Season 5"
      },
      "seasonNumber": 5,
      "episodeNumber": 21,
      "productionSerialNumber": "40510-519",
      "featureLength": false,
      "stardateFrom": null,
      "stardateTo": null,
      "yearFrom": 2373,
      "yearTo": 2373,
      "usAirDate": "1997-04-28",
      "finalScriptDate": null
    },
    {
      "uid": "EPMA0000000915",
      "title": "Starship Down",
      "titleGerman": "Das Wagnis",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000073238",
        "title": "Star Trek: Deep Space Nine"
      },
      "season": {
        "uid": "SAMA0000001738",
        "title": "DS9 Season 4"
      },
      "seasonNumber": 4,
      "episodeNumber": 7,
      "productionSerialNumber": "40510-479",
      "featureLength": false,
      "stardateFrom": 49263.5,
      "stardateTo": 49263.5,
      "yearFrom": 2372,
      "yearTo": 2372,
      "usAirDate": "1995-11-06",
      "finalScriptDate": null
    },
    {
      "uid": "EPMA0000000859",
      "title": "The Homecoming",
      "titleGerman": "Die Heimkehr",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000073238",
        "title": "Star Trek: Deep Space Nine"
      },
      "season": {
        "uid": "SAMA0000001736",
        "title": "DS9 Season 2"
      },
      "seasonNumber": 2,
      "episodeNumber": 1,
      "productionSerialNumber": "40512-421",
      "featureLength": false,
      "stardateFrom": null,
      "stardateTo": null,
      "yearFrom": 2370,
      "yearTo": 2370,
      "usAirDate": "1993-09-26",
      "finalScriptDate": null
    },
    {
      "uid": "EPMA0000001514",
      "title": "Coda",
      "titleGerman": "Der Wille",
      "titleItalian": null,
      "titleJapanese": null,
      "series": {
        "uid": "SEMA0000000029",
        "title": "Star Trek: Voyager"
      },
      "season": {
        "uid": "SAMA0000001744",
        "title": "VOY Season 3"
      },
      "seasonNumber": 3,
      "episodeNumber": 15,
      "productionSerialNumber": "158",
      "featureLength": false,
      "stardateFrom": 50518.6,
      "stardateTo": 50518.6,
      "yearFrom": 2373,
      "yearTo": 2373,
      "usAirDate": "1997-01-29",
      "finalScriptDate": "1996-10-29"
    }
  ]
}

const expectedResult = [
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

describe("transform", () => {
  it("should fetch and transform properly the given object", async () => {
    const listEpisodes = await getEpisodesList(data);
    const listSeasons = await getSeasonsList(listEpisodes);
    const listBySeason = await formatEpisodesBySeason(listSeasons, listEpisodes);
    // const result = await getEpisodesBySeasons();
    await expect([listBySeason[0]]).toMatchObject(expectedResult);
  })
})