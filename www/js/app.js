// This is a JavaScript file

const deviceReady = () => {
  window.plugins.NativeAudio.preloadComplex(
    'music',
    'music/music.mp3',
    0.5,
    1,
    1,
    (msg) => play(),
    (err) => {
		  console.log( 'error: ' + msg );
	  }
  );

  window.plugins.NativeAudio.preloadComplex(
    'music2',
    'music/music.mp3',
    0.3,
    1,
    1,
    (msg) => {
    },
    (err) => {
  	  console.log( 'error: ' + msg );
	  }
  );
  
};

const play = () => {
  window.plugins.NativeAudio.loop('music',
    (msg) => console.log('success', msg),
    (err) => console.log('error', msg)
  );
}

const multiPlay = () => {
  window.plugins.NativeAudio.loop('music',
    (msg) => console.log('success', msg),
    (err) => console.log('error', msg)
  );
  setTimeout(() => {
    window.plugins.NativeAudio.loop('music2');
  }, 4760);
}

const stop = () => {
  window.plugins.NativeAudio.stop('music');
}
document.addEventListener('deviceReady', deviceReady, false);