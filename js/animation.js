init = function(){
      jarallax = new Jarallax();
      jarallax.setDefault('#second,#third,#fourth', {opacity:'0'});
      jarallax.addAnimation('#logo',[{progress: "0%", top:"220px"}, {progress: "30%", top: "110px"}]);
 
      jarallax.addAnimation('#second',[{progress: "15%", opacity:"0"}, {progress: "40%", opacity:"1"}]);
      jarallax.addAnimation('#second',[{progress: "40%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
      jarallax.addAnimation('#second',[{progress: "15%", top:"280px"}, {progress: "40%", top:"240px"}]);
 
      jarallax.addAnimation('#third',[{progress: "45%", opacity:"0"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#third',[{progress: "70%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
      jarallax.addAnimation('#third',[{progress: "45%", top:"280px"}, {progress: "70%", top:"240px"}]);
 
      jarallax.addAnimation('#fourth',[{progress: "75%", opacity:"0"}, {progress: "100%", opacity:"1"}]);
      jarallax.addAnimation('#fourth',[{progress: "75%", top:"280px"}, {progress: "100%", top:"240px"}]);
 
      jarallax.addAnimation('#price01',[{progress: "15%", top:"600px"}, {progress: "40%", top:"450px"}]);
      jarallax.addAnimation('#price01',[{progress: "0%", opacity:"0"}, {progress: "15%", opacity:"0"}]);
      jarallax.addAnimation('#price01',[{progress: "15%", opacity:"0"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#price01',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"1"}]);
      jarallax.addAnimation('#price01',[{progress: "40%", opacity:"1"}, {progress: "55%", opacity:"0"}]);
      jarallax.addAnimation('#price01',[{progress: "55%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
 
      jarallax.addAnimation('#price02',[{progress: "45%", top:"600px"}, {progress: "70%", top:"450px"}]);
      jarallax.addAnimation('#price02',[{progress: "0%", opacity:"0"}, {progress: "45%", opacity:"0"}]);
      jarallax.addAnimation('#price02',[{progress: "45%", opacity:"0"}, {progress: "60%", opacity:"1"}]);
      jarallax.addAnimation('#price02',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#price02',[{progress: "70%", opacity:"1"}, {progress: "85%", opacity:"0"}]);
      jarallax.addAnimation('#price02',[{progress: "85%", opacity:"0"}, {progress: "100%", opacity:"0"}]);
 
      jarallax.addAnimation('#price03',[{progress: "75%", top:"600px"}, {progress: "95%", top:"450px"}]);
      jarallax.addAnimation('#price03',[{progress: "0%", opacity:"0"}, {progress: "75%", opacity:"0"}]);
      jarallax.addAnimation('#price03',[{progress: "75%", opacity:"0"}, {progress: "90%", opacity:"1"}]);
      jarallax.addAnimation('#price03',[{progress: "90%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
 
    }