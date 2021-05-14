$(function(){
    var playerTrack = $("#player-track"), 
                      albumName = $('#album-name'), 
                      trackName = $('#track-name'), 
                      albumArt = $('#album-art'), 
                      playPauseButton = $("#play-pause-button"),  
                      i = playPauseButton.find('i'),
                      albums = [
                                [
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=xTs83Ej5nS8"> Schindler\'s List Soundtrack </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=pUZeSYsU0Uk"> Cold </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=y3PWiRFk5GE"> Waking Life 11 </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=aWIE0PX1uXk"> Sad Piano Music </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=QuNhTLVgV2Y"> Sad Violin </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=nOr0na6mKJQ"> The Ecstacy of Gold </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=mF3DCa4TbD0"> Naruto </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=lcOxhH8N3Bo"> Total Eclipse of the Heart </a>'
                                ],
                                [
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=ootz7HsxrK8"> ECSTASY TRANCE Remix </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=btPJPFnesV4"> Eye Of The Tiger </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=Z-k8HQGON_8"> Proud </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=6EqxOvMIYMU"> Worst Music Video Ever </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=CDl9ZMfj6aE"> Smooth Criminal </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=QYqsevBV97g"> Street Fighter 5: Ryu\'s </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=bWcASV2sey0">  Holding Out For A Hero </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=3X9LvC9WkkQ"> Hungarian Dance No. 5 </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=xCChxBSRo1Y"> Talk Dirty To Me </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=ICaTsTkBPV8"> Erase Me ft. Kanye West </a>',
                                ]
                               ], 
                      trackNames = [
                                        [
                                            '',
                                            '- Survivor',
                                            '- Ultima Thule',
                                            '',
                                            '',
                                            '- Ennio Morricone',
                                            '- Taylor Davis',
                                            '- Bonnie Tyler',
                                        ], 
                                        
                                        [
                                            '',
                                            '- Jorge Méndez',
                                            '- Ballade 4 part 2',
                                            '',
                                            '- Alien Ant Farm',
                                            '',
                                            '- Bonnie Tyler',
                                            '- Johannes Brahms',
                                            '- Poison ',
                                            '- Kid Cudi',
                                        ], 
                                    ]
                                    albumArtworks = [
                                                        ['_1','_2','_3','_4','_5','_6','_7','_8'],
                                                        ['_1','_2','_3','_4','_5','_6','_7','_8','_9','_10'],

                                                    ]
                                    trackUrl = [
                                                    [
                                                        '../src/audio/sad/sad1.mp3',
                                                        '../src/audio/sad/sad2.mp3',
                                                        '../src/audio/sad/sad3.mp3',
                                                        '../src/audio/sad/sad4.mp3',
                                                        '../src/audio/sad/sad5.mp3',
                                                        '../src/audio/sad/sad6.mp3',
                                                        '../src/audio/sad/sad7.mp3',
                                                        '../src/audio/sad/sad8.mp3',
                                                    ],

                                                    [
                                                        '../src/audio/energy/energy1.mp3',
                                                        '../src/audio/energy/energy2.mp3',
                                                        '../src/audio/energy/energy3.mp3',
                                                        '../src/audio/energy/energy4.mp3',
                                                        '../src/audio/energy/energy5.mp3',
                                                        '../src/audio/energy/energy6.mp3',
                                                        '../src/audio/energy/energy7.mp3',
                                                        '../src/audio/energy/energy8.mp3',
                                                        '../src/audio/energy/energy9.mp3',
                                                        '../src/audio/energy/energy10.mp3',
                                                    ]
                                                ]
                                     playPreviousTrackButton = $('#play-previous'), 
                                     playNextTrackButton = $('#play-next'), 
                                     currIndex = -1;

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
    function category(){
        var x = 0;
        console.log($("#player-content").css("background-color"));
        if($("#player-content").css("background-color") == 'rgb(0, 132, 149)') x = 0;
        if($("#player-content").css("background-color") == 'rgb(211, 18, 255)') x = 1;
        return x;
    }
    function selectTrack(flag){
        if( flag == 0 || flag == 1 ){
            ++currIndex;
            console.log(currIndex);
        }
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < albumArtworks[category()].length) ){
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else{
                i.attr('class','fa fa-pause');
            }

            currAlbum = albums[category()][currIndex];
            currTrackName = trackNames[category()][currIndex];
            currArtwork = albumArtworks[category()][currIndex];

            audio.src = trackUrl[category()][currIndex];

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
        $('.circle').on('click', function(){
            currIndex = -1;
            ended();
            selectTrack(0);
        });
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
        
	    $(audio).on('ended',ended);

        
        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
	initPlayer();
});

