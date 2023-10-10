const axios = require("axios");

async function tryapi() {
  const clientId = "aa82bc0c6f594c19a0fd207dade98723";
  const clientSecret = "d1a49d9ecf024dd686daa7e697b33735";
  let playlist_id = "4acQIuCN9aeFBCpr9vubVd";
  const typeUrl = `https://api.spotify.com/v1/playlists/${playlist_id}`;

  const serialize = function (obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  };

  axios
    .post(
      "https://accounts.spotify.com/api/token",
      serialize({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
        },

        json: true,
      }
    )

    .then((res) => {
      fetch(typeUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${res.data.access_token}` },
      })
        .then((response) => response.json())
        .then((musicList) => console.log(musicList.tracks))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

tryapi();
