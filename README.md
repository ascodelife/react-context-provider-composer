English | [ç®ä½ä¸­æ](https://github.com/ascodelife/react-context-provider-composer/blob/master/README.zh-CN.md)

# react-context-provider-composer
[![Build Status](https://app.travis-ci.com/ascodelife/react-context-provider-composer.svg?branch=feat-travis)](https://app.travis-ci.com/ascodelife/react-context-provider-composer)[![codecov](https://codecov.io/gh/ascodelife/react-context-provider-composer/branch/feat-travis/graph/badge.svg?token=AJ8GMI5UAO)](https://codecov.io/gh/ascodelife/react-context-provider-composer)![GitHub top language](https://img.shields.io/github/languages/top/ascodelife/react-context-provider-composer) ![GitHub](https://img.shields.io/github/license/ascodelife/react-context-provider-composer)     
Compose your react context provider to solve nested hell.  
[github](https://github.com/ascodelife/react-context-provider-composer)  
[npm package](https://www.npmjs.com/package/@ascodelife/react-context-provider-composer)
## ð¤Why We Need It 
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

## ð¦ Install

```bash
yarn add @ascodelife/react-context-provider-composer
```

## ð¨ Usage

```tsx
import ContextComposer from "@ascodelife/react-context-provider-composer";
```

## ð° Usage Examples

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

## ð Related article
I'm sorry it's written in Chinese.  
[ææ¯å¦ä½ä¸æ­¥æ­¥å°è£ä¸ä¸ªReact Context Composer ](https://juejin.cn/post/6997780311488593951/)

## ð LICENSE
[MIT](https://github.com/ascodelife/react-context-provider-composer/blob/master/LICENSE)