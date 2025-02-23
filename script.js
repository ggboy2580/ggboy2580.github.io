// 星座数据
const zodiacData = {
    baiyangzuo: {
        message: "像白羊一样勇敢，你愿意让我守护你的每一天吗？",
        name: "白羊座",
        time: "3月21日-4月19日",
        tip: "点击3次触发隐藏动画"
    },
    jinniuzuo: {
        message: "金牛的执着，就是我爱你的决心！",
        name: "金牛座",
        time: "4月20日-5月20日",
        tip: "长按图片获得惊喜"
    },
    shuangzizuo: {
        message: "双子座，你很美，我很爱你！",
        name: "双子座",
        time: "5月21日-6月20日",
        tip: "点击图片查看更多惊喜"
    },
    juxiezuo: {
        message: "巨蟹座，你很美，我爱你！",
        name: "巨蟹座",
        time: "6月21日-7月21日",
        tip: "点击图片查看更多惊喜"
    },
    shizizuo: {
        message: "狮子座，你很美，我爱你！",
        name: "狮子座",
        time: "7月22日-8月21日",
        tip: "点击图片查看更多惊喜"
    },
    chunvzuo: {
        message: "处女座，你很美，我爱你！",
        name: "处女座",
        time: "8月22日-9月21日",
        tip: "点击图片查看更多惊喜"
    },
    tianchengzuo: {
        message: "天秤座，你很美，我爱你！",
        name: "天秤座",
        time: "9月22日-10月22日",
        tip: "点击图片查看更多惊喜"
    },
    tianxiezuo: {
        message: "天蝎座，你很美，我爱你！",
        name: "天蝎座",
        time: "10月23日-11月21日",
        tip: "点击图片查看更多惊喜"
    },
    sheshouzuo: {
        message: "射手座，你很美，我爱你！",
        name: "射手座",
        time: "11月22日-12月21日",
        tip: "点击图片查看更多惊喜"
    },
    mojiezuo: {
        message: "摩羯座，你很美，我爱你！",
        name: "摩羯座",
        time: "12月22日-1月19日",
        tip: "点击图片查看更多惊喜"
    },
    shuipingzuo: {
        message: "水瓶座，你很美，我爱你！",
        name: "水瓶座",
        time: "1月20日-2月18日",
        tip: "点击图片查看更多惊喜"
    },

    shuangyuzuo: {
        message: "双鱼座，你很美，我爱你！",
        name:"双鱼座",
        time: "2月19日-3月20日",
        tip: "点击图片查看更多惊喜"
    },



};

// 初始化星座网格
function initZodiac() {
    const grid = document.getElementById('zodiacGrid');

    Object.keys(zodiacData).forEach(sign => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <img src="images/${sign}.png" alt="${sign}" class="zodiac-img" data-sign="${sign}">
            <div class="zodiac-info">
                <h1>${zodiacData[sign].name}</h1>
                <p>${zodiacData[sign].time}</p>
            <div>
        `;
        grid.appendChild(card);
    });
}

// 表白特效
function showLove(sign) {
    const modal = document.getElementById('loveModal');
    const content = modal.querySelector('.modal-content');

    // const loveModal = document.getElementById('loveModal');
    //
    //     // 为打开弹窗的按钮添加点击事件监听器
    //     openModalBtn.addEventListener('click', () => {
    //         // 显示弹窗
    //         loveModal.style.display = 'block';
    //     });
    // 添加心跳动画
    content.style.animation = 'heartbeat 1s infinite';

    // 根据星座显示不同效果
    switch(sign) {
        case 'baiyangzuo':
            //弹窗输出白羊座
            alert('白羊座');
            // addFishAnimation(); // 双鱼座专属游鱼特效
            break;
        case 'chunvzuo':
            // addConfetti(); // 处女座烟花特效
            break;
    }
}

// 撒花瓣特效
function createConfetti() {
    for(let i=0; i<50; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random()*100 + 'vw';
        petal.style.animationDelay = Math.random()*2 + 's';
        document.body.appendChild(petal);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initZodiac();

    // 事件监听
    document.querySelectorAll('.zodiac-img').forEach(img => {
        img.addEventListener('click', () => {
            const sign = img.dataset.sign;
            showLove(sign);
        });
    });

    document.getElementById('confettiBtn').addEventListener('click', createConfetti);
});