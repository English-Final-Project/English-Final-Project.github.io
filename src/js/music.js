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
                                ],
                                [
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=2fcX2dWmR6g"> Für Elise </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=NlprozGcs80"> Canon </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=JbjzPKTfjlc"> Nuvole Bianche </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=da7gMOY8bTA"> Digging Shelters </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=PoaT6WXUV_M"> Hey there delilah </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=70PPHLsFq7I"> Proud of you </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=4w8PCYlzlmg"> Over The Garden Wall </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=W9ASWBPyFnE"> Dreams </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=447yaU_4DF8"> The Moment </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=JX8Jo66w4tA"> Every Step </a>',
                                ],
                                [
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=siCmqvfw_1g"> Spring In My Step </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=VN9TEF1OiM8"> I\'m so excited </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=d-diB65scQU"> Don\'t Worry Be Happy </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=F3TzxXfoEHo"> Sugar Zone </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=6wlbB1PTzJU"> Summer Smile </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=vFe5N7bvXXI"> Fun and Exciting Music </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=V1Tr1qCHwq4"> Carol Of The Bells </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=RIwnkTlLQUY"> Obvs </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=ofMVDTtZZ5E"> Hold On a Minute </a>',
                                    '<a target="_blank" href="https://www.youtube.com/watch?v=LI_mwl3QcYA"> Super Mario Bros </a>',
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
                                        [
                                            '- Beethoven',
                                            '- Pachelbel',
                                            '- Ludovico Einaudi',
                                            '- Neil Halstead',
                                            '',
                                            '- Fiona Fung',
                                            '- Into The Unknown',
                                            '',
                                            '- Kenny G',
                                            '',
                                        ], 
                                        [
                                            '– Silent Partner',
                                            '- The Pointer Sisters',
                                            '- Bobby McFerrin',
                                            '– Silent Partner',
                                            '– Silent Partner',
                                            '',
                                            '- David Hicken',
                                            '- Jamie xx',
                                            '– Silent Partner',
                                            '',
                                        ],
                                    ]
                                    albumArtworks = [
                                                        ['_1','_2','_3','_4','_5','_6','_7','_8'],
                                                        ['_1','_2','_3','_4','_5','_6','_7','_8','_9','_10'],
                                                        ['_1','_2','_3','_4','_5','_6','_7','_8','_9','_10',],
                                                        ['_1','_2','_3','_4','_5','_6','_7','_8','_9','_10',],
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
                                                    ],

                                                    [
                                                        '../src/audio/calm/clam1.mp3',
                                                        '../src/audio/calm/clam2.mp3',
                                                        '../src/audio/calm/clam3.mp3',
                                                        '../src/audio/calm/clam4.mp3',
                                                        '../src/audio/calm/clam5.mp3',
                                                        '../src/audio/calm/clam6.mp3',
                                                        '../src/audio/calm/clam7.mp3',
                                                        '../src/audio/calm/clam8.mp3',
                                                        '../src/audio/calm/clam9.mp3',
                                                        '../src/audio/calm/clam10.mp3',
                                                    ],
                                                    [
                                                        '../src/audio/happy/happy1.mp3',
                                                        '../src/audio/happy/happy2.mp3',
                                                        '../src/audio/happy/happy3.mp3',
                                                        '../src/audio/happy/happy4.mp3',
                                                        '../src/audio/happy/happy5.mp3',
                                                        '../src/audio/happy/happy6.mp3',
                                                        '../src/audio/happy/happy7.mp3',
                                                        '../src/audio/happy/happy8.mp3',
                                                        '../src/audio/happy/happy9.mp3',
                                                        '../src/audio/happy/happy10.mp3',
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
        if($("#player-content").css("background-color") == 'rgb(255, 26, 185)') x = 2;
        if($("#player-content").css("background-color") == 'rgb(0, 255, 193)') x = 3;
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

