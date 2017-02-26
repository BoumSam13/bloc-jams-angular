(function() {
    function AlbumCtrl() {   
        this.album = [];;
        for (var i = 0; i < 1; i++) {
            this.album.push(angular.copy(albumPicasso));
        }
        this.albumData;
        this.albumData = angular.copy(albumPicasso.songs);
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
