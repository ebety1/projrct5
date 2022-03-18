class DeviceScreen{
    constructor(){
        var mainScreen = document.getElementById('mainScreen')
        mainScreen.style.height = screen.height-400 + 'px';
        var content = document.getElementById('content')
        content.style.height = screen.height-500 + 'px';


    }
}
onload = new DeviceScreen()

class Player{
    constructor(){
        this.audio = document.getElementById('audio')
        this.root =  document.querySelector('#root')
        this.play_pause = document.getElementById('play_pause')
        this.play_pause.addEventListener('click',()=>{
            this.when_paly()
        })
        this.isPlay;

        // ---------------------------A------------------------------
        this.radio_name = ['Mauritania FM','tan FM', 'kurdStan FM','Algeria FM']
        this.radio_source = ['Rihanna_-_Diamonds(48k).mp3','Rihanna_-_Diamonds(48k).mp3','Rihanna_-_Diamonds(48k).mp3','Rihanna_-_Diamonds(48k).mp3'];
        
        
        this.server=0
        document.getElementById('next').addEventListener('click',()=>{
            if(this.server < this.radio_name.length-1){
                this.server++
                this.isPlay = false
            }else if(this.server>0){
                this.server=0
                this.isPlay = false

            }
            localStorage.setItem('save',this.server)
            this.setSource()
            
        });
        document.getElementById('back').addEventListener('click',()=>{
            if(this.server < this.radio_name.length-1){
                this.server++
                this.isPlay = false
            }else if(this.server>0){
                this.server=0
                this.isPlay = false

            }
            localStorage.setItem('save',this.server)
            this.setSource()
            
        })

       
      
    };

    setSource(){
        if(localStorage.getItem('save')==true){
            this.server = localStoragegetItem('save')
        }
        this.audio.src = this.radio_source[this.server];
        document.getElementById('radioName').innerHTML = `${this.radio_name[this.server]}`;
        this.when_paly();
    }

    when_paly(){
        if(this.isPlay == false){
            this.play_pause.src = 'img/pause.png'
            this.audio.play()
            this.isPlay = true
        }else{
            this.play_pause.src = 'img/play.png'
            this.audio.pause()
            this.isPlay = false
        }

    }

}
onload = new Player()