class timerController {
    constructor(id, dtIni){        
        this._lbtimer = document.querySelector(id);            
        this._datetIni = dtIni;
        this._finaly = false;
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);    
    }

    setDisplayDateTime(){        
        let dtFim = new Date();        
        if (!this._finaly) {
            this._lbtimer.innerHTML = this.timerDiff(this._datetIni, dtFim);
        } else {
            this._lbtimer.innerHTML = '00:00:00'
        }        
    }

    timerDiff(dtIni, dtFim){
      let time = (dtFim - dtIni) / 1000;
      let sec = parseInt(time / 1);      
      let hor = parseInt(sec / 3600);
      sec = sec % 3600;
      let min = parseInt(sec / 60);
      sec = sec % 60;
      console.log("Tempo: " + hor + ":" + min + ":" + sec)
      return this.pad(hor, 2) + ':' + this.pad(min, 2) + ':' + this.pad(sec, 2);      
    }

    pad(n, len) {
        let l = Math.floor(len)
        let sn = '' + n
        let snl = sn.length
        if(snl >= l) return sn
        return '0'.repeat(l - snl) + sn
    }

    stopTimer(){
        this._finaly = true;
    }
};

