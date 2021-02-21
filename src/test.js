//核心思路同时以文本的形式和html的形式展示一个style标签。
//把一大快不相关的代码或是独立的放在一个文件里，在这个文件里到出一个字符串等，再需要的地方导入进来---模块化。css.js里就是模块，里面包含了css
import string from './css'



const player = {
    id : undefined,
    time : 100 , 
    ui: {
        demo :document.querySelector('#demo'),
        demo2 : document.querySelector('#demo2')
        
    },
    events : {
        '#btnPause' :  'pause',
        '#btnPlay' :  'play',
        '#btnSlow' : 'slow',
        '#btnNormal' : 'normal',
        '#btnFast' : 'fast'
        },


    n : 1,

    init :()=>{
    player.ui.demo.innerText = string.substr(0,player.n)
    player.ui.demo2.innerHTML = string.substr(0,player.n)
    player.bindEvents()
    player.play()
    },

    bindEvents: ()=>{

        for(let key in player.events){
            //防御性编程
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key] // pause / play /slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },

    run : () =>{
        player.n +=1
        if( player.n > string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        //player.ui.demo.scrollHeight demo可滚动高度
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },

    play : ()=>{
        player.id = setInterval(player.run,player.time)
     },

    pause : ()=>{
        window.clearInterval(player.id)
    },
    slow : ()=>{
        player.pause()
        player.time = 300
        player.play()
    },
    normal : ()=>{
      player.pause()
      player.time = 50
      player.play()
    },
    fast : ()=>{
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()




/*id= setInterval( ()=>{
    run()
},time)
精简为id= setInterval(run,time)

//如果一个函数什么都没干只是调用另一个函数，那么可以直接省略外面的函数，(不加括号)
*/