# react-context-provider-composer
![GitHub top language](https://img.shields.io/github/languages/top/ascodelife/react-context-provider-composer) ![GitHub](https://img.shields.io/github/license/ascodelife/react-context-provider-composer)  
将多个react context provider进行组合从而解决调用时的嵌套地狱。  
[github](https://github.com/ascodelife/react-context-provider-composer)  
[npm package](https://www.npmjs.com/package/@ascodelife/react-context-provider-composer)
## 🤔为什么我们需要它
当我们有多个Context Provider的时候我们将它们多层嵌套，这样会让代码结构越来越难看且不易于维护。所以，我将这种多层嵌套转成一维数组的形式来调用。  
下面是一个比较糟糕的例子。

```tsx
<LoadingContext.Provider value={{ loading, setLoading }}>
  <UserDataContext.Provider value={{ name: "ascodelife", age: 25 }}>
    <ThemeContext.Provider value={"light"}>
    {/* ....more Provider as long as you want */}
    </ThemeContext.Provider>
  </UserDataContext.Provider>
</LoadingContext.Provider>
```

## 📦 安装

```bash
yarn add @ascodelife/react-context-provider-composer
```

## 🔨 使用
```tsx
import ContextComposer from "@ascodelife/react-context-provider-composer";
```
## 🌰 举个栗子
下面是一个简单使用的例子。
```tsx
const App = () => {
  return (
    <ContextComposer
      contexts={[
        <LoadingContext.Provider value={{ loading, setLoading }} />,
        <UserDataContext.Provider value={{ name: "ascodelife", age: 25 }} />,
        <ThemeContext.Provider value={"light"} />,
      ]}
    >
      {{ children }}
    </ContextComposer>
  );
};

```
或者你可以参考我的写的demo。

```bash
cd demo
yarn
yarn start
```


## 📚 相关文章
[我是如何一步步封装一个React Context Composer ](https://juejin.cn/post/6997780311488593951/)
## 📃 LICENSE
[MIT](https://github.com/ascodelife/react-context-provider-composer/blob/master/LICENSE)