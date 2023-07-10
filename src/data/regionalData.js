const regionalData = [
  {
    name: "Ang Mo Kio",
    label_location: {
      latitude: 1.375,
      longitude: 103.839,
      region: "north",
    },
  },
  {
    name: "Bedok",
    label_location: {
      latitude: 1.321,
      longitude: 103.924,
      region: "east",
    },
  },
  {
    name: "Bishan",
    label_location: {
      latitude: 1.350772,
      longitude: 103.839,
      region: "central",
    },
  },
  {
    name: "Boon Lay",
    label_location: {
      latitude: 1.304,
      longitude: 103.701,
      region: "west",
    },
  },
  {
    name: "Bukit Batok",
    label_location: {
      latitude: 1.353,
      longitude: 103.754,
      region: "west",
    },
  },
  {
    name: "Bukit Merah",
    label_location: {
      latitude: 1.277,
      longitude: 103.819,
      region: "south",
    },
  },
  {
    name: "Bukit Panjang",
    label_location: {
      latitude: 1.362,
      longitude: 103.77195,
      region: "west",
    },
  },
  {
    name: "Bukit Timah",
    label_location: {
      latitude: 1.325,
      longitude: 103.791,
      region: "south",
    },
  },
  {
    name: "Central Water Catchment",
    label_location: {
      latitude: 1.38,
      longitude: 103.805,
      region: "central",
    },
  },
  {
    name: "Changi",
    label_location: {
      latitude: 1.357,
      longitude: 103.987,
      region: "east",
    },
  },
  {
    name: "Choa Chu Kang",
    label_location: {
      latitude: 1.377,
      longitude: 103.745,
      region: "west",
    },
  },
  {
    name: "Clementi",
    label_location: {
      latitude: 1.315,
      longitude: 103.76,
      region: "west",
    },
  },
  {
    name: "City",
    label_location: {
      latitude: 1.292,
      longitude: 103.844,
      region: "south",
    },
  },
  {
    name: "Geylang",
    label_location: {
      latitude: 1.318,
      longitude: 103.884,
      region: "east",
    },
  },
  {
    name: "Hougang",
    label_location: {
      latitude: 1.361218,
      longitude: 103.886,
      region: "east",
    },
  },
  {
    name: "Jalan Bahar",
    label_location: {
      latitude: 1.347,
      longitude: 103.67,
      region: "west",
    },
  },
  {
    name: "Jurong East",
    label_location: {
      latitude: 1.326,
      longitude: 103.737,
      region: "west",
    },
  },
  {
    name: "Jurong Island",
    label_location: {
      latitude: 1.266,
      longitude: 103.699,
      region: "west",
    },
  },
  {
    name: "Jurong West",
    label_location: {
      latitude: 1.34039,
      longitude: 103.705,
      region: "west",
    },
  },
  {
    name: "Kallang",
    label_location: {
      latitude: 1.312,
      longitude: 103.862,
      region: "east",
    },
  },
  {
    name: "Lim Chu Kang",
    label_location: {
      latitude: 1.423,
      longitude: 103.717332,
      region: "west",
    },
  },
  {
    name: "Mandai",
    label_location: {
      latitude: 1.419,
      longitude: 103.812,
      region: "north",
    },
  },
  {
    name: "Marine Parade",
    label_location: {
      latitude: 1.297,
      longitude: 103.891,
      region: "east",
    },
  },
  {
    name: "Novena",
    label_location: {
      latitude: 1.327,
      longitude: 103.826,
      region: "central",
    },
  },
  {
    name: "Pasir Ris",
    label_location: {
      latitude: 1.37,
      longitude: 103.948,
      region: "east",
    },
  },
  {
    name: "Paya Lebar",
    label_location: {
      latitude: 1.358,
      longitude: 103.914,
      region: "west",
    },
  },
  {
    name: "Pioneer",
    label_location: {
      latitude: 1.315,
      longitude: 103.675,
    },
  },
  {
    name: "Pulau Tekong",
    label_location: {
      latitude: 1.403,
      longitude: 104.053,
      region: "east",
    },
  },
  {
    name: "Pulau Ubin",
    label_location: {
      latitude: 1.404,
      longitude: 103.96,
      region: "east",
    },
  },
  {
    name: "Punggol",
    label_location: {
      latitude: 1.401,
      longitude: 103.904,
      region: "east",
    },
  },
  {
    name: "Queenstown",
    label_location: {
      latitude: 1.291,
      longitude: 103.78576,
      region: "south",
    },
  },
  {
    name: "Seletar",
    label_location: {
      latitude: 1.404,
      longitude: 103.869,
      region: "north",
    },
  },
  {
    name: "Sembawang",
    label_location: {
      latitude: 1.445,
      longitude: 103.818495,
      region: "north",
    },
  },
  {
    name: "Sengkang",
    label_location: {
      latitude: 1.384,
      longitude: 103.891443,
      region: "north",
    },
  },
  {
    name: "Sentosa",
    label_location: {
      latitude: 1.243,
      longitude: 103.832,
      region: "central",
    },
  },
  {
    name: "Serangoon",
    label_location: {
      latitude: 1.357,
      longitude: 103.865,
      region: "east",
    },
  },
  {
    name: "Southern Islands",
    label_location: {
      latitude: 1.208,
      longitude: 103.842,
      region: "south",
    },
  },
  {
    name: "Sungei Kadut",
    label_location: {
      latitude: 1.413,
      longitude: 103.756,
      region: "west",
    },
  },
  {
    name: "Tampines",
    label_location: {
      latitude: 1.345,
      longitude: 103.944,
      region: "east",
    },
  },
  {
    name: "Tanglin",
    label_location: {
      latitude: 1.308,
      longitude: 103.813,
      region: "central",
    },
  },
  {
    name: "Tengah",
    label_location: {
      latitude: 1.374,
      longitude: 103.715,
      region: "west",
    },
  },
  {
    name: "Toa Payoh",
    label_location: {
      latitude: 1.334304,
      longitude: 103.856327,
      region: "central",
    },
  },
  {
    name: "Tuas",
    label_location: {
      latitude: 1.294947,
      longitude: 103.635,
      region: "west",
    },
  },
  {
    name: "Western Islands",
    label_location: {
      latitude: 1.205926,
      longitude: 103.746,
      region: "west",
    },
  },
  {
    name: "Western Water Catchment",
    label_location: {
      latitude: 1.405,
      longitude: 103.689,
      region: "west",
    },
  },
  {
    name: "Woodlands",
    label_location: {
      latitude: 1.432,
      longitude: 103.786528,
      region: "north",
    },
  },
  {
    name: "Yishun",
    label_location: {
      latitude: 1.418,
      longitude: 103.839,
      region: "north",
    },
  },
];

export default regionalData;
