//这里负责音频相关
document.addEventListener('click', function(event) {  
    // 新audio 
    const newAudio = document.createElement('audio');  
    newAudio.src = 'static/ciallo.aac'; 
    newAudio.preload = 'auto'; // 预加载 
    newAudio.autoplay = true;  // 自动播放  
    newAudio.controls = false; // 隐藏控件  
  
    // 播放  
    newAudio.play().catch(error => {  
        console.error('Error playing audio:', error);  
    });  
  
    // 清理 
    newAudio.addEventListener('ended', function() {  
        newAudio.remove();  
    });  
});