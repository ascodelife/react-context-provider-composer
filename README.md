English | [简体中文](https://github.com/ascodelife/react-context-provider-composer/blob/master/README.zh-CN.md)

# react-context-provider-composer
![GitHub top language](https://img.shields.io/github/languages/top/ascodelife/react-context-provider-composer) ![GitHub](https://img.shields.io/github/license/ascodelife/react-context-provider-composer)  
Compose your react context provider to solve nested hell.  
[github](https://github.com/ascodelife/react-context-provider-composer)  
[npm package](https://www.npmjs.com/package/@ascodelife/react-context-provider-composer)
## 🤔Why We Need It 
When we have multiple context providers, we nest them at multiple levels, which will make the code structure more and more ugly and difficult to maintain. Therefore, I convert this multi-layer nesting into a one-dimensional array to call.  
The following is a bad case.


```tsx
<LoadingContext.Provider value={{ loading, setLoading }}>
  <UserDataContext.Provider value={{ name: "ascodelife", age: 25 }}>
    <ThemeContext.Provider value={"light"}>
    {/* ....more Providers as long as you want */}
    </ThemeContext.Provider>
  </UserDataContext.Provider>
</LoadingContext.Provider>
```

## 📦 Install

```bash
yarn add @ascodelife/react-context-provider-composer
```

## 🔨 Usage

```tsx
import ContextComposer from "@ascodelife/react-context-provider-composer";
```

## 🌰 Usage Examples

This example will show how to use it simply.
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
      { children }
    </ContextComposer>
  );
};

```
Or you can try the the following demo.

```bash
cd demo
yarn
yarn start
```

## 📚 Related article
I'm sorry it's written in Chinese.  
[我是如何一步步封装一个React Context Composer ](https://juejin.cn/post/6997780311488593951/)

## 📃 LICENSE
[MIT](https://github.com/ascodelife/react-context-provider-composer/blob/master/LICENSE)