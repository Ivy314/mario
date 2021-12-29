
kaboom(
{
}
);
const MOVE_SPEED = 120

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
    'block' : { 
        x: 590,
        y: 130,
        width: 45,
        height:60
    }, 
    'surprise' : { 
        x: 245,
        y: 325,
        width: 50,
        height:60
    }, 
    'red-block' : { 
        x: 640,
        y: 260,
        width: 50,
        height:60
    }, 
})

loadSpriteAtlas('images/mario-maker-2.png',{
    'mario':{
        x:0,
        y:0,
        width:100,
        height:100
    }
})

  const levelCfg = {
    width: 30,
    height: 30,
    '=': () => [sprite('block'), area(),solid(),scale(0.4)],
    '*': () => [sprite('red-block'), area(),solid(),scale(0.4)],
    '^': () => [sprite('evil-schroom'), area(),solid(),scale(0.5)],
    '%': () => [sprite('coin'), area(),solid(), scale(0.3),'coin-surprise'],
    's': () => [sprite('surprise'), area(),solid(), scale(0.4),'coin-surprise'],
    'm': () => [sprite('mario'), area(),solid(), scale(0.25),'coin-surprise'],
  }

 const levelMap = 
    [
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '  %        ***s**                     ',
      '                       ^  ^            ',
      '==============================   =====',
    ]

scene("game", () =>{

const gameLevel = addLevel(levelMap, levelCfg)

  const player = add([
    sprite('mario'), 
    area(),solid(),
    scale(0.25),
    pos(10, 10),
    body(),
    origin('bot')
  ])
  keyDown('left', () => {
    player.move(-MOVE_SPEED, 0)
  })

  keyDown('right', () => {
    player.move(MOVE_SPEED, 0)
  })
  onKeyPress("space", () => {
    player.jump()
})
})

go("game")
/*
add([
    sprite("mario"),
    pos(80, 40),
])

add([
    sprite("block"),
    pos(200, 80),
])
 */

