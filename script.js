/* Name this external file: gallery.js
  Purpose: Handling mouseover and mouseout events for the photo gallery.
*/

/**
 * 步骤 3: 编写 upDate 函数
 * 当鼠标悬停在预览图上时调用
 * @param {HTMLElement} previewPic - 触发事件的当前图片元素（即 HTML 中的 this）
 */
function upDate(previewPic) {
    // 3a. 在控制台打印信息，确认事件已触发
    console.log("事件触发：鼠标已移入预览图");

    // 3b. 打印预览图的 alt 文字和 src 地址，方便调试
    console.log("图片描述 (Alt): " + previewPic.alt);
    console.log("图片路径 (Source): " + previewPic.src);

    // 找到大展示框元素
    var imageDiv = document.getElementById('image');

    // 3c. 改变展示框的文字内容为当前预览图的 alt 属性
    imageDiv.innerHTML = previewPic.alt;

    // 3e. 改变展示框的背景图片为当前预览图的 src
    // 注意：CSS 的 backgroundImage 必须符合 url('路径') 的语法格式
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/**
 * 步骤 4: 编写 unDo 函数
 * 当鼠标移出预览图时调用，恢复初始状态
 */
function unDo() {
    // 找到大展示框元素
    var imageDiv = document.getElementById('image');

    // 4a. 将背景图片改回初始值（空字符串）
    imageDiv.style.backgroundImage = "url('')";

    // 4b. 将文字改回原始提示文字
    imageDiv.innerHTML = "Hover over an image below to display here.";
}