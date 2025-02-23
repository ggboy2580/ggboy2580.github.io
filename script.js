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
            alert('您的星座是处女座，姻缘已经匹配成功啦，您会遇到一个双子座的名为计算机秃头小宝贝的良人\n' +
                '理性冷静：处女座女生通常头脑清晰，在面对问题时能保持理性，不轻易被情绪左右，会用理智的思维去分析和解决问题。\n' +
                '注重细节：她们对生活的各个方面都有着极高的要求，关注细节，任何一点瑕疵都可能引起她们的注意。在感情中，也会留意伴侣的一举一动和相处中的细微之处。\n' +
                '勤奋努力：具有很强的上进心，对待工作和生活都认真负责，通过自己的努力去追求完美的生活。\n' +
                '情感内敛：不太善于直接表达自己的情感，即使内心有着深厚的感情，也可能会含蓄地表现出来。\n\n'+
                '吸引力\n' +
                '处女座女生的理性、认真和对细节的关注会让双子座男生觉得她是一个值得深入了解的人。双子座男生可能会被处女座女生身上那种沉稳、靠谱的特质所吸引，认为她能给自己带来一种安定感。\n' +
                '双子座男生的聪明才智和幽默风趣会让处女座女生眼前一亮。他丰富的话题和独特的见解能打破处女座女生相对单调的生活节奏，给她的世界带来新的活力和色彩，使处女座女生对他产生兴趣。\n' +
                '相处模式\n' +
                '交流互动：双子座男生能说会道，而处女座女生善于倾听和分析。他们之间的交流可能会非常丰富，双子座男生会分享各种奇闻趣事和自己的想法，处女座女生则会认真倾听并给出理性的建议。这种交流模式能让双方都感到满足，并且在思想的碰撞中加深对彼此的了解。\n' +
                '生活节奏：处女座女生注重规律和秩序，而双子座男生比较随性和自由。在生活中，可能需要双方相互妥协和适应。比如在安排活动时，处女座女生可能会提前做好详细的计划，而双子座男生可能更倾向于临时起意。双方需要找到一个平衡点，既能满足处女座女生对秩序的需求，又能让双子座男生感受到自由。\n' +
                '冲突点\n' +
                '处事风格：处女座女生做事严谨、追求完美，对事情的过程和结果都有严格的要求。而双子座男生则更注重过程中的乐趣，对结果的要求相对较低。这种差异可能会导致在合作完成一件事情时产生分歧。例如，在策划一次旅行时，处女座女生可能会精心规划行程、预订酒店等，而双子座男生可能觉得随意一些也无妨，这就容易引发矛盾。\n' +
                '情感表达：处女座女生情感内敛，不善于直接表达自己的爱意，而双子座男生可能更希望得到伴侣热情直接的回应。当处女座女生没有及时给予双子座男生足够的情感反馈时，双子座男生可能会觉得她不够在乎自己，从而产生误解和矛盾。' +
                ''
            );
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