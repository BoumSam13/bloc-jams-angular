(function() {  
    function AlbumCtrl(Fixtures) {
        this.album = Fixtures.getAlbum();
        this.albumData = Fixtures.getAlbumSongs();
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
