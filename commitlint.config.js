module.exports = {
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新增功能
        "fix", // 修复功能bug
        "docs", // 文档变动
        "style", // 格式调整，对代码实际运行没有改动， 例如添加空行，格式化等
        "refactor", // bug修复和添加新功能之外的代码改动
        "perf", // 提升性能的改动
        "test", // 添加或者修正测试代码
        "chore", // 构建过程或者辅助工具和库（如文档生成）的更改
      ],
    ],
    "scope-empty": [0],
    // 'scope-empty': [2, 'never'], 作用域不为空
    "scope-case": [0],
    "subject-full-stop": [0],
    "subject-case": [0],
  },
};
// <type>(<scope>): <subject>
