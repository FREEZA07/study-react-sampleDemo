import React, { useState, useEffect } from 'react';

export default function App() {

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // 第二参数
  // 空数组：传入空数组可控制effect只在组件渲染后执行一次
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // A
  // 某个state值：监听state值发生变化时执行
  useEffect(() => {
    console.log('clicked A');
  }, [countA]);

  // B
   // 某个state值：监听state值发生变化时执行
  useEffect(() => {
    console.log('clicked B');
  }, [countB]);

  // A + B
   // 多个state值：监听state值发生变化时执行
  useEffect(() => {
    console.log('clicked A or B');
  }, [countA, countB]);

  return (
    <div>
      <p>You clicked A {countA} times</p>
      <p>You clicked B {countB} times</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        B
      </button>
    </div>
  );
}