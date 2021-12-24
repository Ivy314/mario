
kaboom();

loadSpriteAtlas('images/mario-maker.png',{
    'coin' : { 
        x: 400,
        y: 60,
        width: 40,
        height:60
    }, 
    'evil-schroom' : { 
        x: 100,
        y: 450,
        width: 50,
        height:50
    }, 
    'brick' : { 
        x: 50,
        y: 600,
        width: 49,
        height:50
    }, 
})


add([
    sprite("coin"),
    pos(80, 40),
])

add([
    sprite("brick"),
    pos(200, 80),
])
