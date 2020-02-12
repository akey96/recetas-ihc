import Artyom from 'artyom.js';

export class ArtyomUtil {

    private static instance: ArtyomUtil;
    private jarvis = new Artyom();

    private constructor() { }

    public static getInstance(): ArtyomUtil {
        if (!ArtyomUtil.instance) {
            ArtyomUtil.instance = new ArtyomUtil();
        }

        return ArtyomUtil.instance;
    }

    public start(){
        ArtyomUtil.instance.jarvis.initialize({
          lang:"es-ES",// A lot of languages are supported. Read the docs !
          continuous:true,// Artyom will listen forever
          listen:true, // Start recognizing
          debug:true, // Show everything in the console
          speed:1 // talk normally
        }).then(function(){
          console.log('listo para usar');
        });
    }
    
    public getJarvis(): Artyom{
        return ArtyomUtil.instance.jarvis;
    }
    
    public say(texto: string){
        ArtyomUtil.instance.jarvis.say(texto);
    }

    public sayArray(parrafo: string[]){
        parrafo.forEach(texto => {
            ArtyomUtil.instance.jarvis.say(texto);
        });
    }

    
    public addCommands(commands: any[]){
        ArtyomUtil.instance.jarvis.addCommands(commands);
    }

    public stop(){
        ArtyomUtil.instance.jarvis.fatality();// use this to stop any of
    }

    
}