$(function(){
    var playerTrack = $("#player-track"), 
                      albumName = $('#album-name'), 
                      trackName = $('#track-name'), 
                      albumArt = $('#album-art'), 
                      playPauseButton = $("#play-pause-button"),  
                      i = playPauseButton.find('i'),
                      albums = [
                                '<a target="_blank" href="https://www.youtube.com/watch?v=xTs83Ej5nS8"> Schindler\'s List Soundtrack </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=pUZeSYsU0Uk"> Cold </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=y3PWiRFk5GE"> Waking Life 11 </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=aWIE0PX1uXk"> Sad Piano Music </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=QuNhTLVgV2Y"> Sad Violin </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=nOr0na6mKJQ"> The Ecstacy of Gold </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=mF3DCa4TbD0"> Naruto </a>',
                                '<a target="_blank" href="https://www.youtube.com/watch?v=lcOxhH8N3Bo"> Total Eclipse of the Heart </a>',
                               ], 
                      trackNames = [
                                    '',
                                    '- Jorge Méndez',
                                    '- Ballade 4 part 2',
                                    '',
                                    '',
                                    '- Ennio Morricone',
                                    '- Taylor Davis',
                                    '- Bonnie Tyler',
                                   ], 
                                    albumArtworks = ['_1','_2','_3','_4','_5','_6','_7','_8'], 
                                    trackUrl = [
                                                '../src/audio/sad/sad1.mp3',
                                                '../src/audio/sad/sad2.mp3',
                                                '../src/audio/sad/sad3.mp3',
                                                '../src/audio/sad/sad4.mp3',
                                                '../src/audio/sad/sad5.mp3',
                                                '../src/audio/sad/sad6.mp3',
                                                '../src/audio/sad/sad7.mp3',
                                                '../src/audio/sad/sad8.mp3',
                                                ],
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

            aName = document.getElementById('album-name');
            aName.innerHTML = currAlbum;
            //albumName.text(currAlbum);
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

    function ended(){
            i.attr('class','fa fa-play');
            albumArt.removeClass('active');
    }

    function initPlayer(){	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
        
	    $(audio).on('ended',ended);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
	initPlayer();
});

