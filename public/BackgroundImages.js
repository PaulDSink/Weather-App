const backgroundImages = [
    {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    image: "https://mcdn.wallpapersafari.com/medium/1/77/suAMgq.jpeg"
    },
    {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    image: "https://media.istockphoto.com/photos/the-sun-and-white-clouds-on-the-beautiful-blue-sky-partly-cloudy-picture-id971373858?k=6&m=971373858&s=612x612&w=0&h=yCE3D4kfOsCjdHug-LBu4krbPK-ms7QHiR-7xh8D2_I="
    },
    {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    image: "https://media.istockphoto.com/videos/moving-rain-cloudy-with-overcast-sky-video-id1145484204?s=640x640"
    },
    {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    image: "https://media.istockphoto.com/videos/moving-rain-cloudy-with-overcast-sky-video-id1145484204?s=640x640"
    },
    {
    code: 1030,
    day: "Mist",
    night: "Mist",
    image: ""
    },
    {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    image: ""
    },
    {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    image: ""
    },
    {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    image: ""
    },
    {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    image: ""
    },
    {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    image: ""
    },
    {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    image: ""
    },
    {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    image: ""
    },
    {
    code: 1135,
    day: "Fog",
    night: "Fog",
    image: ""
    },
    {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    image: ""
    },
    {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    image: ""
    },
    {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    image: ""
    },
    {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    image: ""
    },
    {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    image: ""
    },
    {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    image: ""
    },
    {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    image: ""
    },
    {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    image: ""
    },
    {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    image: ""
    },
    {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    image: ""
    },
    {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    image: ""
    },
    {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    image: ""
    },
    {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    image: ""
    },
    {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    image: ""
    },
    {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    image: ""
    },
    {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    image: ""
    },
    {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    image: ""
    },
    {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    image: ""
    },
    {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    image: ""
    },
    {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    image: ""
    },
    {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    image: ""
    },
    {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    image: ""
    },
    {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    image: ""
    },
    {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    image: ""
    },
    {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    image: ""
    },
    {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    image: ""
    },
    {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    image: ""
    },
    {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    image: ""
    },
    {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    image: ""
    },
    {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    image: ""
    },
    {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    image: ""
    },
    {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    image: ""
    },
    {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    image: ""
    },
    {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    image: ""
    },
    {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    image: ""
    }
]