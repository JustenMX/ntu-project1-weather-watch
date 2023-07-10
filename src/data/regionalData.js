const regionalData = [
  {
    name: "Ang Mo Kio",
    label_location: {
      latitude: 1.375,
      longitude: 103.839,
      region: "north",
      id: "S104",
    },
  },
  {
    name: "Bedok",
    label_location: {
      latitude: 1.321,
      longitude: 103.924,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Bishan",
    label_location: {
      latitude: 1.350772,
      longitude: 103.839,
      region: "central",
      id: "S111",
    },
  },
  {
    name: "Boon Lay",
    label_location: {
      latitude: 1.304,
      longitude: 103.701,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Bukit Batok",
    label_location: {
      latitude: 1.353,
      longitude: 103.754,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Bukit Merah",
    label_location: {
      latitude: 1.277,
      longitude: 103.819,
      region: "south",
      id: "S60",
    },
  },
  {
    name: "Bukit Panjang",
    label_location: {
      latitude: 1.362,
      longitude: 103.77195,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Bukit Timah",
    label_location: {
      latitude: 1.325,
      longitude: 103.791,
      region: "south",
      id: "S60",
    },
  },
  {
    name: "Central Water Catchment",
    label_location: {
      latitude: 1.38,
      longitude: 103.805,
      region: "central",
      id: "S111",
    },
  },
  {
    name: "Changi",
    label_location: {
      latitude: 1.357,
      longitude: 103.987,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Choa Chu Kang",
    label_location: {
      latitude: 1.377,
      longitude: 103.745,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Clementi",
    label_location: {
      latitude: 1.315,
      longitude: 103.76,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "City",
    label_location: {
      latitude: 1.292,
      longitude: 103.844,
      region: "south",
      id: "S60",
    },
  },
  {
    name: "Geylang",
    label_location: {
      latitude: 1.318,
      longitude: 103.884,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Hougang",
    label_location: {
      latitude: 1.361218,
      longitude: 103.886,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Jalan Bahar",
    label_location: {
      latitude: 1.347,
      longitude: 103.67,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Jurong East",
    label_location: {
      latitude: 1.326,
      longitude: 103.737,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Jurong Island",
    label_location: {
      latitude: 1.266,
      longitude: 103.699,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Jurong West",
    label_location: {
      latitude: 1.34039,
      longitude: 103.705,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Kallang",
    label_location: {
      latitude: 1.312,
      longitude: 103.862,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Lim Chu Kang",
    label_location: {
      latitude: 1.423,
      longitude: 103.717332,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Mandai",
    label_location: {
      latitude: 1.419,
      longitude: 103.812,
      region: "north",
      id: "S104",
    },
  },
  {
    name: "Marine Parade",
    label_location: {
      latitude: 1.297,
      longitude: 103.891,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Novena",
    label_location: {
      latitude: 1.327,
      longitude: 103.826,
      region: "central",
      id: "S111",
    },
  },
  {
    name: "Pasir Ris",
    label_location: {
      latitude: 1.37,
      longitude: 103.948,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Paya Lebar",
    label_location: {
      latitude: 1.358,
      longitude: 103.914,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Pioneer",
    label_location: {
      latitude: 1.315,
      longitude: 103.675,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Pulau Tekong",
    label_location: {
      latitude: 1.403,
      longitude: 104.053,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Pulau Ubin",
    label_location: {
      latitude: 1.404,
      longitude: 103.96,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Punggol",
    label_location: {
      latitude: 1.401,
      longitude: 103.904,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Queenstown",
    label_location: {
      latitude: 1.291,
      longitude: 103.78576,
      region: "south",
      id: "S60",
    },
  },
  {
    name: "Seletar",
    label_location: {
      latitude: 1.404,
      longitude: 103.869,
      region: "north",
      id: "S60",
    },
  },
  {
    name: "Sembawang",
    label_location: {
      latitude: 1.445,
      longitude: 103.818495,
      region: "north",
      id: "S104",
    },
  },
  {
    name: "Sengkang",
    label_location: {
      latitude: 1.384,
      longitude: 103.891443,
      region: "north",
      id: "S104",
    },
  },
  {
    name: "Sentosa",
    label_location: {
      latitude: 1.243,
      longitude: 103.832,
      region: "central",
      id: "S111",
    },
  },
  {
    name: "Serangoon",
    label_location: {
      latitude: 1.357,
      longitude: 103.865,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Southern Islands",
    label_location: {
      latitude: 1.208,
      longitude: 103.842,
      region: "south",
      id: "S60",
    },
  },
  {
    name: "Sungei Kadut",
    label_location: {
      latitude: 1.413,
      longitude: 103.756,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Tampines",
    label_location: {
      latitude: 1.345,
      longitude: 103.944,
      region: "east",
      id: "S107",
    },
  },
  {
    name: "Tanglin",
    label_location: {
      latitude: 1.308,
      longitude: 103.813,
      region: "central",
      id: "S111",
    },
  },
  {
    name: "Tengah",
    label_location: {
      latitude: 1.374,
      longitude: 103.715,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Toa Payoh",
    label_location: {
      latitude: 1.334304,
      longitude: 103.856327,
      region: "central",
      id: "S111",
    },
  },
  {
    name: "Tuas",
    label_location: {
      latitude: 1.294947,
      longitude: 103.635,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Western Islands",
    label_location: {
      latitude: 1.205926,
      longitude: 103.746,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Western Water Catchment",
    label_location: {
      latitude: 1.405,
      longitude: 103.689,
      region: "west",
      id: "S115",
    },
  },
  {
    name: "Woodlands",
    label_location: {
      latitude: 1.432,
      longitude: 103.786528,
      region: "north",
      id: "S104",
    },
  },
  {
    name: "Yishun",
    label_location: {
      latitude: 1.418,
      longitude: 103.839,
      region: "north",
      id: "S104",
    },
  },
];

export default regionalData;
