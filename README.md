# TypeScript-learn

My TypeScript Learning Records

## new TS Project

```shell
yarn init --yes
yarn add typescript --dev

# 编译 某个文件
yarn tsc xx.ts

```

## 配置
```shell
# 生成配置文件
yarn tsc --init
# 编译整个项目
yarn tsc 

# tsconfig.json
"target": "es2016",  
"module": "commonjs",
"rootDir": "src",     
"sourceMap": true, 
"outDir": "dist", 
```