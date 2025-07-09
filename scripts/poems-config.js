// 诗歌配置文件
const poemsConfig = {
    // 英文模式下的配置
    en: {
        "The Fifth Night": {
            link: "poems/The Fifth Night.html",
            floatingLetters: ["N", "i", "g", "h", "t"],
            position: { x: 30, y: 40 },  // 百分比位置
            preview: "A_dream_about_the_fifth_night..."
        },
        "Late March": {
            link: "poems/Late March.html",
            floatingLetters: ["M", "a", "r", "c", "h"],
            position: { x: 70, y: 60 },
            preview: "Spring_whispers_in_late_March..."
        },
        "Run Towards You": {
            link: "poems/Run Towards You.html",
            floatingLetters: ["R", "u", "n", "T", "o"],
            position: { x: 50, y: 50 },
            preview: "A_night_run_towards_you..."
        },
        "Pass": {
            link: "poems/Pass.html",
            floatingLetters: ["P", "a", "s", "s"],
            position: { x: 23, y: 90 },
            preview: "Pass..."
        },
        "Fiction Girl": {
            link: "poems/Fiction Girl.html",
            floatingLetters: ["F", "i", "c", "t", "i", "o", "n", "G", "i", "r", "l"],
            position: { x: 60, y: 70 },
            preview: "Fiction_Girl..."
        },
        "Forget": {
            link: "poems/Forget.html",
            floatingLetters: ["F", "o", "r", "g", "e", "t"],
            position: { x: 33, y: 75 },
            preview: "Forget..."
        },
        "A Dream About Him": {
            link: "poems/A Dream About Him.html",
            floatingLetters: ["a", "D", "r", "e", "a", "m", "A", "b", "o", "u", "t", "H", "i", "m"],
            position: { x: 43, y: 55 },
            preview: "A_dream_about_him..."
        },
        "Go Back": {
            link: "poems/Go Back.html",
            floatingLetters: ["G", "o", "B", "a", "c", "k"],
            position: { x: 13, y: 65 },
            preview: "Go_Back_to_a_Dreamplace..."
        },
        "A Story": {
            link: "poems/A Story.html",
            floatingLetters: ["a", "S", "t", "o", "r", "y"],
            position: { x: 28, y: 33 },
            preview: "A_Story_about_us..."
        },
        "A Lover Like Him": {
            link: "poems/A Lover Like Him.html",
            floatingLetters: ["a", "L", "o", "v", "e", "r", "L", "i", "k", "e", "H", "i", "m"],
            position: { x: 20, y: 43 },
            preview: "A_lover_like_him..."
        },
        "Sans Titre": {
            link: "poems/sans-titre.html",
            floatingLetters: ["S", "a", "n", "s","-", "T", "i", "t", "r", "e"],
            position: { x: 15, y: 85 },
            preview: "I_wrote_this_at_new_year_night..."
        },
        "Foerst": {
            link: "poems/Foerst.html",
            floatingLetters: ["F", "o", "e", "r", "s", "t"],
            position: { x: 50, y: 90 },
            preview: "Foerst..."
        }
    },
    // 中文模式下的配置
    zh: {
        "第五夜": {
            link: "poems/The Fifth Night.html",
            floatingLetters: ["夜", "梦", "境"],
            position: { x: 30, y: 40 },
            preview: "大概是第五个又梦见你的夜晚..."
        },
        "三月末": {
            link: "poems/Late March.html",
            floatingLetters: ["晚", "三", "月"],
            position: { x: 70, y: 60 },
            preview: "三月末的春日私语..."
        },
        "深夜狂奔向你": {
            link: "poems/Run Towards You.html",
            floatingLetters: ["夜", "狂", "奔", "向", "你"],
            position: { x: 50, y: 50 },
            preview: "深夜狂奔向你..."
        },
        "过": {
            link: "poems/Pass.html",
            floatingLetters: ["过"],
            position: { x: 23, y: 90 },
            preview: "过..."
        },
        "纯粹少女文学": {
            link: "poems/Fiction Girl.html",
            floatingLetters: ["纯", "粹", "少", "女", "文", "学"],
            position: { x: 60, y: 70 },
            preview: "纯粹少女文学..."
        },
        "记忆的淡却": {
            link: "poems/Forget.html",
            floatingLetters: ["记", "忆", "的", "淡", "却"],
            position: { x: 33, y: 75 },
            preview: "记忆的淡却..."
        },
        "有关他的梦": {
            link: "poems/A Dream About Him.html",
            floatingLetters: ["有", "关", "他", "的", "梦"],
            position: { x: 43, y: 55 },
            preview: "有关他的梦..."
        },
        "无题": {
            link: "poems/Go Back.html",
            floatingLetters: ["无", "题"],
            position: { x: 13, y: 65 },
            preview: "无题..."
        },
        "故事": {
            link: "poems/A Story.html",
            floatingLetters: ["故", "事"],
            position: { x: 28, y: 33 },
            preview: "故事..."
        },
        "像他这样的爱人": {
            link: "poems/A Lover Like Him.html",
            floatingLetters: ["像", "他", "这", "样", "的", "爱", "人"],
            position: { x: 20, y: 43 },
            preview: "像他这样的爱人..."
        },
        "无题": {
            link: "poems/sans-titre.html",
            floatingLetters: ["无", "题"],
            position: { x: 10, y: 90 },
            preview: "无题..."
        },
        "浓雾夜": {
            link: "poems/Foerst.html",
            floatingLetters: ["浓", "雾", "夜"],
            position: { x: 50, y: 90 },
            preview: "浓雾夜..."
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = poemsConfig;
} 