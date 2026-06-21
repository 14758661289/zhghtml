document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable');

    images.forEach(img => {

        img.onclick = function(e) {

            e.stopPropagation();


            this.classList.toggle('zoomed');


            if (this.classList.contains('zoomed')) {
                document.body.classList.add('overlay-active');//加遮
            } else {
                document.body.classList.remove('overlay-active');
            }
        };
    });

    // 点击页面空白处关闭所有放大
    document.body.addEventListener('click', () => {
        images.forEach(img => {
            img.classList.remove('zoomed');
        });
        document.body.classList.remove('overlay-active');
    });
});

const form = document.getElementById('pledgeForm');
const successMsg = document.getElementById('successMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止刷新

        // 模拟发送数据的过程（比如假装正在上传）
        const btn = form.querySelector('.btn-submit');
        const originalText = btn.innerText;

        btn.innerText = '提交中...';
        btn.disabled = true; // 防止重复点击

        setTimeout(() => {
            // 1. 恢复按钮
            btn.innerText = originalText;
            btn.disabled = false;

            // 2. 显示成功消息
            successMsg.style.display = 'block';

            // 3. 清空表单
            form.reset();

            // 4. 3秒后自动隐藏成功消息
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);

        }, 1000); // 这里的 1000 代表延迟 1 秒，模拟网络请求
    });
}




document.addEventListener('DOMContentLoaded', function() {
    // 获取相关元素
    const modal = document.getElementById('infoModal');
    const closeBtn = document.querySelector('.close-btn');
    const speciesLinks = document.querySelectorAll('.species-link');

    // 模态框内部的元素
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    // 1. 循环遍历所有的物种名字，添加点击事件
    speciesLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // 获取 HTML 标签里 data-xxx 属性的值
            const name = this.getAttribute('data-name');
            const imgUrl = this.getAttribute('data-img');
            const desc = this.getAttribute('data-desc');

            // 将获取到的数据填入模态框对应的元素中
            modalTitle.textContent = name;
            modalImg.src = imgUrl;
            modalDesc.textContent = desc;

            // 显示模态框 (使用 flex 以配合 CSS 中的居中对齐)
            modal.style.display = 'flex';
        });
    });

    // 2. 点击 "X" 号关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 3. 点击模态框外部（黑色背景区域）也能关闭
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});