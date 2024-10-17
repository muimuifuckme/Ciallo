//这里负责鼠标交互相关
document.addEventListener('DOMContentLoaded', function() {  
    document.addEventListener('click', function(event) {  
        // 创建文本气泡  
        var bubble = document.createElement('div');  
        bubble.className = 'text-bubble';  
        bubble.textContent = 'Ciallo～(∠・ω< )⌒★';  
  
        // 初始样式  
        bubble.style.position = 'absolute';  
        bubble.style.left = event.clientX + 'px';  
        bubble.style.top = event.clientY + 'px';  
        bubble.style.opacity = 1;  
  
        // 随机颜色  
        function getRandomColor() {  
            var letters = '0123456789ABCDEF';  
            var color = '#';  
            for (var i = 0; i < 6; i++) {  
                color += letters[Math.floor(Math.random() * 16)];  
            }  
            return color;  
        }  
        bubble.style.color = getRandomColor();  
  
        // 添加到body 
        document.body.appendChild(bubble);  
  
        // 定义初始量  
        var speed = 2; // 初始速度  
        var increment = 0.1; // 速度增量  
        var maxSpeed = 20; // 最大速度  
        var startTop = parseInt(bubble.style.top, 10);  
        var targetTop = -50; // 目标位置  
        var opacity = 1;  
        var fadeRate = 0.01; // 每次迭代减少透明度  
  
        // 用setInterval更新信息
        var intervalId = setInterval(function() 
         {  
            // 更新位置  
            var currentTop = parseInt(bubble.style.top, 10);  
            if (currentTop > targetTop) {  
                bubble.style.top = (currentTop - speed) + 'px';  
            }  
  
            // 更新透明度  
            opacity -= fadeRate;  
            if (opacity < 0) {  
                opacity = 0;  
            }  
            bubble.style.opacity = opacity;  
  
            // 增加速度 
            if (speed < maxSpeed) {  
                speed += increment;  
            }  
  
            // 检查  到达位置/0透明度  xs\消失
            if (parseInt(bubble.style.top, 10) <= targetTop && opacity <= 0) {  
                clearInterval(intervalId);  
                bubble.remove();  
            }  
         }, 
        16); //60fps 
    });  
});