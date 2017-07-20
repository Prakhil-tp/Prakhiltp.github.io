var typeWriteText = document.getElementById('typeWriteText');

var typewriter = new Typewriter(typeWriteText, {
    loop: true
});

typewriter.typeString('web applications.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('user interfaces.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('landing pages.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('android applications.')
    .pauseFor(1000)
    .start();
