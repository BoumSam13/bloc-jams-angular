(function() {
     function SongPlayer(Fixtures) {
        var SongPlayer = {};
        var currentAlbum = Fixtures.getAlbum();
        var currentAlbumSongs = Fixtures.getAlbumSongs();
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            SongPlayer.currentSong = song;
        };
         
         var playSong = function(song) {
             currentBuzzObject.play();
             song.playing = true;
             SongPlayer.artist = getArtist();
             SongPlayer.title = SongPlayer.currentSong.title;
             SongPlayer.totalTime = SongPlayer.currentSong.duration;
         };
         
         var stopSong = function(song) {
             currentBuzzObject.stop();
             SongPlayer.currentSong.playing = null;
             SongPlayer.artist = null;
             SongPlayer.title = null;
             SongPlayer.totalTime = null;
         };
         
         /** @function getSongIndex
         * @desc gets the index of the current song
         * @param {Object} song
         */
         var getSongIndex = function(albumSong) {
             var aSong = [];
             for (var song in currentAlbumSongs) {
                 aSong.push(currentAlbumSongs[song].title);
             }
             return aSong.indexOf(albumSong);
         };
         
         var getTotalNumberOfSongs = function() {
             for (var song in currentAlbumSongs) {
                 var songTotal = song;
             }
             return songTotal;
         }
         
        var getArtist = function() {
             return currentAlbum[0].artist;
         };
         
        /** @desc current song
        * @type {Object}
        */
        SongPlayer.currentSong = null;
        SongPlayer.artist = null;
        SongPlayer.title = null;
        SongPlayer.totalTime = null;
         
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        }
        
        /**
        * @function SongPlayer.pause
        * @desc Pauses the song that is clicked that is playing
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        /** @function SongPlayer.previous
         * @desc Get index of the previous song by decreasing index of current song by 1
        */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong.title);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                stopSong(song);
            } else {
                var song = currentAlbumSongs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        SongPlayer.next = function() {
            var numSongs = getTotalNumberOfSongs();
            var currentSongIndex = getSongIndex(SongPlayer.currentSong.title);
            currentSongIndex++;
            
            if (currentSongIndex > numSongs)
            {
                stopSong(song);
            } else {
                var song = currentAlbumSongs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        }

        return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();