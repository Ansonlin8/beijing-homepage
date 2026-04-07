/* 步骤 3 & 4: 基础功能函数 */
function upDate(previewPic) {
    console.log("Event triggered: Updating image to " + previewPic.alt); // 步骤 10
    var displayDiv = document.getElementById('image');
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

/* 步骤 8, 9, 11, 12: 自动添加键盘聚焦功能的函数 */
function addTabFocus() {
    console.log("Window loaded: Initializing tabfocus attributes"); // 步骤 10
    
    // 步骤 11: 选取所有预览图片
    var images = document.getElementsByClassName('preview');
    
    // 步骤 11: 编写 for 循环遍历每一张图片
    for (var i = 0; i < images.length; i++) {
        console.log("Adding tabindex and focus events to image " + i);
        
        // 步骤 12: 动态添加 tabindex 属性，让图片可以被 Tab 键选中
        images[i].setAttribute("tabindex", "0");
        
        // 步骤 6: 添加 focus (选中) 和 blur (离开) 事件监听
        // 当用户按 Tab 键聚焦到图片时，触发 upDate
        images[i].onfocus = function() {
            upDate(this);
        };
        
        // 当用户离开该图片时，触发 unDo
        images[i].onblur = function() {
            unDo();
        };
    }
}
