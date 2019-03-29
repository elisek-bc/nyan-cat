    // creating variable button
    var meow = document.getElementById('meowbutton');

    /*====================== ONE CAT IS ALL IT TAKES ==============================*/
    
        function createCat (){
            console.log('create cats start');
                var nyanCat = document.createElement('img');
                nyanCat.src = 'nyancat.gif';

    // random positioning start
                var x = Math.floor(Math.random()*parseInt(document.body.clientWidth));
                nyanCat.style.left = x + 'px';
                nyanCat.style.top = '-100px'; 

    // styling and placing
                nyanCat.style.height = '60px';
                nyanCat.style.transform = 'rotate(45deg)';
                document.body.appendChild(nyanCat);
                nyanCat.classList.add('nyanCat');

                setTimeout(function(){
                    var x = Math.floor(Math.random()*parseInt(document.body.clientWidth));
                    var y = parseInt(window.innerHeight)+200;
                    nyanCat.style.left = x + 'px';
                    nyanCat.style.top = y + 'px';

    // randomize speed here
                    var speed = Math.floor(Math.random()*10)+3;
                    nyanCat.style.transition = speed + 's';

    // randomize rotation here
                    var dontFallOnYourFace = Math.floor(Math.random()*360)
                    nyanCat.style.transform = "rotate(" + dontFallOnYourFace + "deg)";
                },100);
                };

    // 3 steps: on what, when, function?    
        meow.addEventListener('click', everything);

    // specifying function on click and creating cat var
        function everything() {
            createCat();

    // specifying background style + deleting button + playing audio
            if (createCat) {
                document.body.style.backgroundImage = "url('nyancatbackground.gif')";
                document.body.style.backgroundSize = '30vh';
                
                var meow = document.getElementById('meowbutton');
                meow.parentNode.removeChild(meow);

                var nyanAudio = new Audio('nyancatsong.mp3');
                nyanAudio.play();  
            }

    // loops animation every 3 seconds: working
    var loopCats = setInterval(createCat, 500);

    // and stopping after 10 seconds: not working!!!!   
    setTimeout(intervalStop,10000);
        function intervalStop() {
             clearInterval(loopCats);
        }
        

    // delete cats after they passed end of screen: not working!!!!
        /*if (nyanCat.style.top > '100vh'); {
            var nyanCat = document.createElement('img');
            nyanCat.src = 'nyancat.gif';
            document.body.removeChild(nyanCat);
        }*/
              
    }