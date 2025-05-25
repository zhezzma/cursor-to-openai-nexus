const path = require('path');
const fs = require('fs');

// 尝试加载自定义的cursor配置文件
const customConfigPath = path.join(process.cwd(), 'cursor-config.env');
if (fs.existsSync(customConfigPath)) {
    require('dotenv').config({ path: customConfigPath });
}

// 辅助函数：解析布尔值
function parseBoolean(value, defaultValue = false) {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
        return value.toLowerCase() === 'true' || value === '1';
    }
    return defaultValue;
}

// 辅助函数：解析整数
function parseInteger(value, defaultValue = 0) {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
}

// 辅助函数：解析浮点数
function ParseFloat(value, defaultValue = 0.0) {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
}

// 辅助函数：解析数组
function parseArray(value, defaultValue = []) {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value.split(',').map(item => item.trim()).filter(item => item);
        }
    }
    return defaultValue;
}

// Cursor配置对象
const cursorConfig = {
    // 🎯 核心模式设置
    core: {
        maxModeEnabled: parseBoolean(process.env.CURSOR_MAX_MODE_ENABLED, true),
        agentMode: parseBoolean(process.env.CURSOR_AGENT_MODE, true),
        unifiedMode: parseInteger(process.env.CURSOR_UNIFIED_MODE, 1),
        chatModeEnum: parseInteger(process.env.CURSOR_CHAT_MODE_ENUM, 2),
        chatMode: process.env.CURSOR_CHAT_MODE || 'collaborative',
        preprocessingFlag: parseBoolean(process.env.CURSOR_PREPROCESSING_FLAG, false),
        streamMode: parseInteger(process.env.CURSOR_STREAM_MODE, 1),
        thinkingLevel: parseInteger(process.env.CURSOR_THINKING_LEVEL, 3)
    },

    // 🤖 模型配置选项
    model: {
        modelName: process.env.CURSOR_MODEL_NAME || 'claude-4-sonnet-thinking',
        streamingEnabled: parseBoolean(process.env.CURSOR_STREAMING_ENABLED, true),
        maxTokens: parseInteger(process.env.CURSOR_MAX_TOKENS, 4096),
        temperature: ParseFloat(process.env.CURSOR_TEMPERATURE, 0.7),
        thinkingMode: parseBoolean(process.env.CURSOR_THINKING_MODE, true),
        thinkingDepth: parseInteger(process.env.CURSOR_THINKING_DEPTH, 5)
    },

    // 🛠️ Agent能力配置
    agentCapabilities: {
        codeUnderstanding: parseBoolean(process.env.CURSOR_CODE_UNDERSTANDING, true),
        codeGeneration: parseBoolean(process.env.CURSOR_CODE_GENERATION, true),
        codeRefactoring: parseBoolean(process.env.CURSOR_CODE_REFACTORING, true),
        debuggingAssistance: parseBoolean(process.env.CURSOR_DEBUGGING_ASSISTANCE, true),
        testGeneration: parseBoolean(process.env.CURSOR_TEST_GENERATION, true),
        errorAnalysis: parseBoolean(process.env.CURSOR_ERROR_ANALYSIS, true),
        fileReading: parseBoolean(process.env.CURSOR_FILE_READING, true),
        fileWriting: parseBoolean(process.env.CURSOR_FILE_WRITING, false),
        fileSearch: parseBoolean(process.env.CURSOR_FILE_SEARCH, true),
        filesystemAccess: parseBoolean(process.env.CURSOR_FILESYSTEM_ACCESS, false),
        projectAnalysis: parseBoolean(process.env.CURSOR_PROJECT_ANALYSIS, true),
        dependencyAnalysis: parseBoolean(process.env.CURSOR_DEPENDENCY_ANALYSIS, true),
        architectureAnalysis: parseBoolean(process.env.CURSOR_ARCHITECTURE_ANALYSIS, true),
        performanceOptimization: parseBoolean(process.env.CURSOR_PERFORMANCE_OPTIMIZATION, true),
        securityAnalysis: parseBoolean(process.env.CURSOR_SECURITY_ANALYSIS, true),
        documentationGeneration: parseBoolean(process.env.CURSOR_DOCUMENTATION_GENERATION, true),
        commentGeneration: parseBoolean(process.env.CURSOR_COMMENT_GENERATION, true)
    },

    // 🧠 思考配置选项
    thinking: {
        depthLevel: parseInteger(process.env.CURSOR_DEPTH_LEVEL, 5),
        showThinking: parseBoolean(process.env.CURSOR_SHOW_THINKING, true),
        stepByStep: parseBoolean(process.env.CURSOR_STEP_BY_STEP, true),
        reasoningChains: parseBoolean(process.env.CURSOR_REASONING_CHAINS, true),
        selfVerification: parseBoolean(process.env.CURSOR_SELF_VERIFICATION, true),
        alternativeApproaches: parseBoolean(process.env.CURSOR_ALTERNATIVE_APPROACHES, true)
    },

    // 📚 上下文配置选项
    context: {
        maxContextTokens: parseInteger(process.env.CURSOR_MAX_CONTEXT_TOKENS, 8192),
        maxFiles: parseInteger(process.env.CURSOR_MAX_FILES, 50),
        maxFileSize: parseInteger(process.env.CURSOR_MAX_FILE_SIZE, 1048576),
        conversationHistory: parseInteger(process.env.CURSOR_CONVERSATION_HISTORY, 10),
        includeEditHistory: parseBoolean(process.env.CURSOR_INCLUDE_EDIT_HISTORY, true),
        includeProjectStructure: parseBoolean(process.env.CURSOR_INCLUDE_PROJECT_STRUCTURE, true),
        includeDependencies: parseBoolean(process.env.CURSOR_INCLUDE_DEPENDENCIES, true),
        largeContext: parseInteger(process.env.CURSOR_LARGE_CONTEXT, 1)
    },

    // 🔧 外部工具配置
    tools: {
        webSearchEnabled: parseBoolean(process.env.CURSOR_WEB_SEARCH_ENABLED, false),
        codeExecutionEnabled: parseBoolean(process.env.CURSOR_CODE_EXECUTION_ENABLED, false),
        externalApiCalls: parseBoolean(process.env.CURSOR_EXTERNAL_API_CALLS, false),
        databaseAccess: parseBoolean(process.env.CURSOR_DATABASE_ACCESS, false),
        wikiTool: parseArray(process.env.CURSOR_WIKI_TOOL, []),
        webTool: parseInteger(process.env.CURSOR_WEB_TOOL, 0)
    },

    // ⚙️ 高级控制选项
    advanced: {
        enableMaxFeatures: parseInteger(process.env.CURSOR_ENABLE_MAX_FEATURES, 1),
        streamControlFlag: parseInteger(process.env.CURSOR_STREAM_CONTROL_FLAG, 1),
        tokenStartFlag: parseInteger(process.env.CURSOR_TOKEN_START_FLAG, 1),
        tokenControlFlag: parseInteger(process.env.CURSOR_TOKEN_CONTROL_FLAG, 1),
        sessionTrackingFlag: parseInteger(process.env.CURSOR_SESSION_TRACKING_FLAG, 1)
    },

    // 🎛️ 请求控制标志
    control: {
        controlFlag: parseBoolean(process.env.CURSOR_CONTROL_FLAG, true),
        instructionFlag: parseInteger(process.env.CURSOR_INSTRUCTION_FLAG, 1),
        modelFlag: parseInteger(process.env.CURSOR_MODEL_FLAG, 1),
        requestFlag: parseInteger(process.env.CURSOR_REQUEST_FLAG, 1),
        feedbackFlag: parseInteger(process.env.CURSOR_FEEDBACK_FLAG, 1),
        desiredMaxTokens: parseInteger(process.env.CURSOR_DESIRED_MAX_TOKENS, 2048),
        contentFormat: process.env.CURSOR_CONTENT_FORMAT || 'markdown'
    },

    // 🌐 系统环境配置
    system: {
        timezone: process.env.CURSOR_TIMEZONE || 'Asia/Shanghai',
        clientVersion: process.env.CURSOR_CLIENT_VERSION || '0.50.5',
        configVersion: process.env.CURSOR_CONFIG_VERSION || 'v1.0.0',
        projectType: process.env.CURSOR_PROJECT_TYPE || 'javascript'
    }
};

// 导出配置和辅助函数
module.exports = {
    cursorConfig,

    // 生成能力数组（用于protobuf）
    getCapabilities() {
        const caps = [];
        const abilities = cursorConfig.agentCapabilities;

        if (abilities.codeUnderstanding) caps.push(1);
        if (abilities.codeGeneration) caps.push(3);
        if (abilities.codeRefactoring) caps.push(5);
        if (abilities.fileReading) caps.push(6);
        if (abilities.fileWriting) caps.push(7);
        if (abilities.fileSearch) caps.push(8);
        if (abilities.projectAnalysis) caps.push(9);
        if (abilities.debuggingAssistance) caps.push(11);
        if (abilities.testGeneration) caps.push(12);
        if (abilities.errorAnalysis) caps.push(14);
        if (abilities.documentationGeneration) caps.push(15);
        if (abilities.performanceOptimization) caps.push(17);
        if (abilities.securityAnalysis) caps.push(18);
        if (abilities.dependencyAnalysis) caps.push(20);
        if (abilities.architectureAnalysis) caps.push(19);
        if (abilities.commentGeneration) caps.push(21);

        // 添加基础能力
        caps.push(22, 23, 24);

        return caps;
    },


    // 生成系统环境信息
    getSystemEnvironment() {
        return {
            platform: 'win32',
            architecture: 'x64',
            osVersion: '10.0.26100',
            executablePath: 'cursor.exe',
            timestamp: new Date().toISOString(),
            timezone: cursorConfig.system.timezone,
            clientVersion: cursorConfig.system.clientVersion,
            configVersion: cursorConfig.system.configVersion
        };
    },

    // 生成MAX模式设置
    getMaxModeSettings() {
        return {
            enabled: cursorConfig.core.maxModeEnabled,
            agentCaps: cursorConfig.agentCapabilities,
            thinkingConfig: cursorConfig.thinking,
            contextConfig: cursorConfig.context,
            toolConfig: cursorConfig.tools
        };
    },

    // 检查是否启用了某个功能
    isFeatureEnabled(feature) {
        const parts = feature.split('.');
        let current = cursorConfig;

        for (const part of parts) {
            if (current[part] === undefined) return false;
            current = current[part];
        }

        return parseBoolean(current, false);
    },

    // 获取配置值
    getValue(path, defaultValue) {
        const parts = path.split('.');
        let current = cursorConfig;

        for (const part of parts) {
            if (current[part] === undefined) return defaultValue;
            current = current[part];
        }

        return current;
    },

    // 重新加载配置
    reload() {
        if (fs.existsSync(customConfigPath)) {
            delete require.cache[require.resolve('dotenv')];
            require('dotenv').config({ path: customConfigPath, override: true });
        }

        // 重新计算配置值...
        // 这里可以重新执行配置初始化逻辑
    }
};
