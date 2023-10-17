#!/bin/bash

# GitHub 用户名和 API 密钥
GITHUB_USERNAME="Gc-Peanut"
GITHUB_API_KEY="xxxx"

# GitHub 仓库信息
REPO_OWNER="Gc-Peanut"
REPO_NAME="gitShellFlow"

# echo "请输入 SOURCE_BRANCH: "
# read SOURCE_BRANCH

current_branch=$(git symbolic-ref --short HEAD 2>/dev/null)
echo "当前分支: $current_branch "

# 新分支的名称和基准分支
SOURCE_BRANCH="feature/gc_1.0.0"
DESTINATION_BRANCH="main"

# Pull Request 标题和描述
PR_TITLE="merge $current_branch to $DESTINATION_BRANCH"
PR_DESCRIPTION="加油"

# GitHub REST API URL
API_URL="https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls"

# 创建 Pull Request 的 JSON 数据
JSON_DATA=$(cat <<EOF
{
  "title": "$PR_TITLE",
  "head": "$SOURCE_BRANCH",
  "base": "$DESTINATION_BRANCH",
  "body": "$PR_DESCRIPTION"
}
EOF
)

# 发起 API 请求创建 Pull Request
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_API_KEY" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "$API_URL" \
  -d "$SON_DATA"
