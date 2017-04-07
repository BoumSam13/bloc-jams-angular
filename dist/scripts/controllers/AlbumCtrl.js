(function() {  
    function AlbumCtrl(Fixtures, SongPlayer) {
        this.album = Fixtures.getAlbum();
        this.albumData = Fixtures.getAlbumSongs();
        this.songPlayer = SongPlayer;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
