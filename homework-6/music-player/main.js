import songs from "./modules/songs.js";
import { showSong, showPlaylist } from "./modules/display.js";
import * as player from "./modules/player.js";

import "./styles/theme.js";

showPlaylist(songs);
showSong(songs[0]);
player.showSong(songs[0]);
player.play();
player.pause();
showSong(songs[1]);
player.showSong(songs[1]);
player.play();
player.stop();
