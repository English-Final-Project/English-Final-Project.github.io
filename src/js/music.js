$(function(){
    var playerTrack = $("#player-track"), 
                      albumName = $('#album-name'), 
                      trackName = $('#track-name'), 
                      albumArt = $('#album-art'), 
                      playPauseButton = $("#play-pause-button"),  
                      i = playPauseButton.find('i'),
                      albums = ['Dawn','Me & You','Electro Boy','Home','Proxy (Original Mix)'], 
                      trackNames = ['Skylike - Dawn',
                                    'Alex Skrindo - Me & You',
                                    'Kaaze - Electro Boy',
                                    'Jordan Schor - Home',
                                    'Martin Garrix - Proxy'], 
                                    albumArtworks = ['_1','_2','_3','_4','_5'], 
                                    trackUrl = ['https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3',
                                                'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3',
                                                'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3',
                                                'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3',
                                                'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3'],
                                     playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;

    function playPause(){
        setTimeout(function(){
            if(audio.paused){
                playerTrack.addClass('active');
                albumArt.addClass('active');
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else{
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }
    
    function selectTrack(flag){
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < albumArtworks.length) ){
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else{
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];

            if(flag != 0){
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#'+currArtwork).addClass('active');

        }
        else{
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer(){	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
	
        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});