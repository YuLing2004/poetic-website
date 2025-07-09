const fs = require('fs').promises;
const path = require('path');
const marked = require('marked');

// HTML 模板
const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}} | Poetry Collection</title>
    <link rel="icon" type="image/png" href="../PICs/icon.png">
    <style>
        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background-color: #fffaed;
            font-family: "Songti SC", "STSong", "宋体", SimSun, serif;
            color: #2c2c2c;
            line-height: 1.8;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .container {
            max-width: 800px;
            padding: 2rem;
            margin: 0 auto;
            position: relative;
        }

        .poetry-header {
            text-align: center;
            margin: 3rem 0;
            position: relative;
        }

        .poetry-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: normal;
            color: #1a1a1a;
            letter-spacing: 0.1em;
        }

        .poetry-content {
            font-size: 1.2rem;
            line-height: 2.2;
            margin: 2rem auto;
            padding: 0 1rem;
            max-width: 600px;
            text-align: left;
        }

        .poetry-section {
            margin-bottom: 2.5rem;
            position: relative;
        }

        .poetry-footer {
            text-align: center;
            margin-top: 4rem;
            font-family: "Songti SC", "STSong", "宋体", SimSun, serif;
            font-size: 0.9rem;
            color: #666;
        }

        .back-link {
            position: fixed;
            top: 2rem;
            left: 2rem;
            text-decoration: none;
            color: #666;
            font-family: "Songti SC", "STSong", "宋体", SimSun, serif;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .back-link:hover {
            color: #1a1a1a;
        }

        .decorative-line {
            width: 100px;
            height: 1px;
            background: #666;
            margin: 2rem auto;
            opacity: 0.3;
        }

        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            .poetry-title {
                font-size: 1.8rem;
            }
            
            .back-link {
                position: static;
                display: block;
                text-align: center;
                margin: 1rem auto;
            }

            .poetry-content {
                font-size: 1.1rem;
                padding: 0 0.5rem;
            }
        }

        /* 为Markdown内容添加的额外样式 */
        .poetry-content h1 {
            display: none;
        }

        .poetry-content h2 {
            font-size: 1.3rem;
            margin: 2rem 0 1.2rem;
            color: #333;
            font-weight: normal;
        }

        .poetry-content p {
            margin: 1.2rem 0;
        }
    </style>
</head>
<body>
    <a href="../poetic.html" class="back-link">← Back</a>
    
    <div class="container">
        <header class="poetry-header">
            <h1 class="poetry-title">{{title}}</h1>
            <div class="decorative-line"></div>
        </header>

        <main class="poetry-content" id="poetry-content">
            {{content}}
        </main>

        <footer class="poetry-footer">
            <div class="decorative-line"></div>
            <p>「梦境絮语」诗集</p>
        </footer>
    </div>
</body>
</html>`;

// 自定义 Markdown 渲染器
const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    if (level === 1) {
        // 跳过 h1 标题，因为已经在页面顶部显示了
        return '';
    }
    return `<div class="poetry-section"><h${level}>${text}</h${level}>`;
};
renderer.paragraph = (text) => {
    return `<div class="poetry-section">${text}</div>`;
};

// 配置 marked
marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: true
});

async function extractTitle(markdown) {
    const lines = markdown.split('\n');
    let title = '';

    // 查找标题（# 开头的第一行）
    for (const line of lines) {
        if (line.startsWith('# ')) {
            title = line.substring(2).trim();
            break;
        }
    }

    return title;
}

async function convertMarkdownToHtml(mdFilePath) {
    try {
        // 读取 Markdown 文件
        const markdown = await fs.readFile(mdFilePath, 'utf-8');
        
        // 提取标题
        const title = await extractTitle(markdown);
        
        // 如果没有在内容中找到标题，使用文件名作为标题
        const finalTitle = title || path.basename(mdFilePath, '.md').split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        // 转换 Markdown 为 HTML
        const content = marked.parse(markdown);

        // 替换模板中的变量
        let html = HTML_TEMPLATE
            .replace(/\{\{title\}\}/g, finalTitle)
            .replace('{{content}}', content);

        // 生成输出文件路径
        const outputDir = path.join(path.dirname(mdFilePath), '../poems');
        const outputFile = path.join(outputDir, `${path.basename(mdFilePath, '.md')}.html`);

        // 确保输出目录存在
        await fs.mkdir(outputDir, { recursive: true });

        // 写入 HTML 文件
        await fs.writeFile(outputFile, html);

        console.log(`Successfully converted ${mdFilePath} to ${outputFile}`);
    } catch (error) {
        console.error(`Error converting file ${mdFilePath}:`, error);
    }
}

// 监视 Poetry 目录的变化
async function watchPoetryDirectory(directory) {
    try {
        const files = await fs.readdir(directory);
        for (const file of files) {
            if (file.endsWith('.md')) {
                const filePath = path.join(directory, file);
                await convertMarkdownToHtml(filePath);
            }
        }

        console.log(`Watching ${directory} for changes...`);
        require('fs').watch(directory, async (eventType, filename) => {
            if (filename && filename.endsWith('.md')) {
                console.log(`File ${filename} changed`);
                await convertMarkdownToHtml(path.join(directory, filename));
            }
        });
    } catch (error) {
        console.error('Error watching directory:', error);
    }
}

// 启动脚本
const poetryDir = path.join(__dirname, '../Poetry');
watchPoetryDirectory(poetryDir); 