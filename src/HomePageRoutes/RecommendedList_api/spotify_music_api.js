// import request from "request";

// export default function SpotifyMusicApi() {
//   const clientId = "aa82bc0c6f594c19a0fd207dade98723";
//   const clientSecret = "d1a49d9ecf024dd686daa7e697b33735";
//   let playlist_id = "4acQIuCN9aeFBCpr9vubVd";
//   const typeUrl = `https://api.spotify.com/v1/playlists/${playlist_id}`;

//   const authOptions = {
//     url: "https://accounts.spotify.com/api/token",
//     headers: {
//       Authorization:
//         "Basic " +
//         new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
//     },
//     form: {
//       grant_type: "client_credentials",
//     },
//     json: true,
//   };

//   request.post(authOptions, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       let token = body.access_token;
//       fetchSpotifyMusicList(token);
//     }
//   });

//   async function fetchSpotifyMusicList(token) {
//     const response = await fetch(typeUrl, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await response.json();
//     const musicList = data.tracks.map((track) => track.name);
//     return musicList;
//   }

//   return (
//     <div>
//       {musicList && <ul>{musicList.map((track) => (track) => track.name)};</ul>}
//     </div>
//   );
// }

// import { useState } from "react";
// import { useEffect } from "react";

// export default function SpotifyMusicApi() {
//   const [accessToken, setAccessToken] = useState(null);
//   // const [musicList, setMusicList] = useState(null);

//   useEffect(() => {
//     // async function MusicList() {
//     const clientId = "aa82bc0c6f594c19a0fd207dade98723";
//     const clientSecret = "d1a49d9ecf024dd686daa7e697b33735";
//     let playlist_id = "4acQIuCN9aeFBCpr9vubVd";
//     const url = `https://api.spotify.com/v1/playlists/${playlist_id}`;
//     const params = new URLSearchParams(window.location.search);
//     const code = params.get("code");

//     // const playlist = await
//     //   fetchPlaylist(accessToken);
//     //   populateUI(playlist);
//     const getAccessToken = async () => {
//       //   async function getAccessToken(clientId, code) {
//       const verifier = localStorage.getItem("verifier");

//       const params = new URLSearchParams();
//       params.append("client_id", clientId);
//       params.append("grant_type", "authorization_code");
//       params.append("code", code);
//       params.append("redirect_uri", "http://localhost:5173/callback");
//       params.append("code_verifier", verifier);

//       const result = await fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: params,
//       });
//       const { access_token } = await result.json();
//       setAccessToken(access_token);
//       //   const { access_token } = await result.json();
//       //   return access_token;
//     };

//     const fetchPlaylist = async () => {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       const data = await response.json();
//       const musicList = data.tracks;
//       //   setMusicList(musicList);
//       return musicList;
//     };
//     getAccessToken(clientId, code).then((accessToken) => {
//       fetchPlaylist(accessToken);
//     });
//     //   const accessToken = await getAccessToken(clientId, code);
//     //   fetchPlaylist(accessToken);
//     // }
//   }, []);
//   return <div></div>;
// }

//   function populateUI(profile) {
//     // TODO: Update UI with profile data
//   }
