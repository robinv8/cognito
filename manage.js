#!/usr/bin/env node

/**
 * Cognito Content Manager
 * 用于管理知识库内容的简单命令行工具
 */

const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const CONTENT_FILE = path.join(__dirname, 'data', 'content.json');

// 确保数据目录和文件存在
function ensureDataFile() {
    const dataDir = path.dirname(CONTENT_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    
    if (!fs.existsSync(CONTENT_FILE)) {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify([], null, 2));
    }
}

// 读取内容数据
function loadContent() {
    try {
        const data = fs.readFileSync(CONTENT_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading content:', error.message);
        return [];
    }
}

// 保存内容数据
function saveContent(content) {
    try {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
        console.log('✅ 内容已保存');
    } catch (error) {
        console.error('❌ 保存失败:', error.message);
    }
}

// 创建命令行接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提示用户输入
function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

// 显示所有内容
function listContent() {
    const content = loadContent();
    if (content.length === 0) {
        console.log('📭 暂无内容');
        return;
    }

    console.log('\n📚 当前内容列表:');
    console.log('==================');
    content.forEach((item, index) => {
        console.log(`${index + 1}. ${item.title}`);
        console.log(`   📂 分类: ${item.category}`);
        console.log(`   🔗 链接: ${item.url}`);
        console.log(`   📅 添加日期: ${item.dateAdded}`);
        console.log(`   ${item.favorite ? '⭐ 收藏' : '☆ 未收藏'}`);
        console.log('');
    });
}

// 主菜单
async function showMenu() {
    console.log('\n🧠 Cognito 内容浏览器');
    console.log('====================');
    console.log('1. 📋 查看所有内容');
    console.log('2. 🚪 退出');
    
    const choice = await question('\n请选择操作 (1-2): ');
    
    switch (choice) {
        case '1':
            listContent();
            break;
        case '2':
            console.log('👋 再见!');
            rl.close();
            return;
        default:
            console.log('❌ 无效选择');
    }
    
    // 继续显示菜单
    setTimeout(showMenu, 1000);
}

// 主程序
async function main() {
    ensureDataFile();
    
    if (process.argv.length > 2) {
        const command = process.argv[2];
        switch (command) {
            case 'list':
                listContent();
                rl.close();
                break;
            default:
                console.log('用法: node manage.js [list]');
                rl.close();
        }
    } else {
        await showMenu();
    }
}

// 运行程序
main().catch(console.error);
