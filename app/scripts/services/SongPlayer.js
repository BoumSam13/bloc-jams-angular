(function() {
     function SongPlayer() {
        var SongPlayer = {};
        /** @desc current song
        * @type {Object}
        */
        var currentSong = null;
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
                currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            currentSong = song;
        };
        /**
        * @function SongPlayer.playSong
        * @desc Plays the current song clicked if current song equals song
        * @param {Object} song
        */
        SongPlayer.playSong = function(song) {
            if (currentSong !== song) {
                setSong(song);
                currentBuzzObject.play();
                song.playing = true;
            } else if (currentSong === song) {
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
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();