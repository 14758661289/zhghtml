// 定义动物数据数组
const animals = [
    {
        name: "大熊猫",
        type: "mammal", // 哺乳类
        desc: "中国特有物种，被誉为'活化石'和'中国国宝'。主要以竹子为食，性格温顺但具有咬合力。",
        img: "img/panda.png" // 记得替换成你的图片路径
    },
    {
        name: "东北虎",
        type: "mammal",
        desc: "现存体重最大的肉食性猫科动物，主要分布于中国东北地区。处于食物链顶端，对维持生态平衡至关重要。",
        img: "img/donbeihu.jpg"
    },
    {
        name: "川金丝猴",
        type: "mammal",
        desc: "毛色金黄，鼻孔向上仰，面部蓝色。群居生活，是中国特有的珍贵灵长类动物。",
        img: "img/monkey.jpg"
    },
    {
        name: "藏狐",
        type: "mammal",
        desc: "生活在高原荒漠，因为长相'高冷'而在网络走红。它们是鼠兔的天敌，对控制草原鼠害有重要作用。",
        img: "img/fox.jpg"
    },
    {
        name: "中华白海豚",
        type: "mammal",
        desc: "被称为'海上大熊猫'，主要分布在东南沿海。成年后身体呈粉红色，是海洋生态健康的指示物种。",
        img: "img/baihaitun.jpg"
    },
    {
        name: "中华穿山甲",
        type: "mammal",
        desc: "全身披覆鳞片，以白蚁为食。由于非法捕杀，目前极度濒危，是国家一级保护动物。",
        img: "img/chuansanjia.jpg"
    },
    {
        name: "中华秋沙鸭",
        type: "bird", // 鸟类
        desc: "第三纪冰川期遗留物种，对水质要求极高，被称为'鸟中大熊猫'。",
        img: "img/qiushaya.jpg"
    },
    {
        name: "黄胸鹀",
        type: "bird",
        desc: "俗称'禾花雀'，曾因过度捕杀而极度濒危。体型小巧，迁徙路线漫长。",
        img: "img/huangxiongwu.jpg"
    },
    {
        name: "黑脸琵鹭",
        type: "bird",
        desc: "全球濒危物种，因其扁平如汤匙状的长嘴像乐器琵琶而得名。",
        img: "img/heilianpilu.jpg"
    },
    {
        name: "小灵猫",
        type: "mammal",
        desc: "外形像猫又像鼠，身上有斑点。它们也是国家一级保护动物，非常神秘。",
        img: "img/xiaolingmao.jpg"
    },
    {
        name: "豹猫",
        type: "mammal",
        desc: "体型似家猫但稍大，身上的斑点像铜钱，所以也叫'铜钱猫'。",
        img: "img/baomao.jpg"
    },
    {
        name: "上川岛猕猴",
        type: "mammal",
        desc: "仅分布于广东江门上川岛的特定种群，具有独特的遗传特性。",
        img: "img/mihou.jpg"
    },
    {
        name: "蟒蛇",
        type: "other", // 爬行类
        desc: "中国境内最大的蛇类之一，无毒，通过缠绕捕食。",
        img: "img/mangshe.jpg"
    },
    {
        name: "岩鹭",
        type: "bird",
        desc: "常栖息于海边岩石或岛屿上，羽色多变，有深色型和浅色型。",
        img: "img/yanlu.jpg"
    }
];

// 获取容器元素
const container = document.getElementById('animalContainer');
const btns = document.querySelectorAll('.filter-btn');

// 渲染函数
function renderAnimals(filterType) {
    container.innerHTML = ''; // 清空当前内容

    animals.forEach(animal => {
        // 如果 filterType 是 'all' 或者与动物类型匹配
        if (filterType === 'all' || animal.type === filterType) {
            const card = document.createElement('div');
            card.className = 'card'; // 复用原本的 CSS 类名
            
            // 构建卡片 HTML
            card.innerHTML = `
                <div class="image-wrapper">
                    <!-- 使用占位图，实际使用时请替换 src -->
                    <img src="${animal.img}" alt="${animal.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${animal.name}'">
                </div>
                <div class="card-info">
                    <h3>${animal.name}</h3>
                    <p>${animal.desc}</p>
                </div>
            `;
            container.appendChild(card);
        }
    });
}

// 筛选逻辑
function filterAnimals(type) {
    // 更新按钮样式
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active'); // 这里的 event 是点击事件
    
    // 重新渲染
    renderAnimals(type);
}

// 页面加载时默认显示全部
document.addEventListener('DOMContentLoaded', () => {
    renderAnimals('all');
});