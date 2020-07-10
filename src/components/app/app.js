import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import Tabs from '../Tabs/tabs';

import './app.css';
import Content from '../content/content';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsItems: [
        { title: 'Вариант кухни', visited: false, id: this.generateNewId(32) },
        { title: 'Размеры', visited: false, id: this.generateNewId(32) },
        { title: 'Сенсор', visited: false, id: this.generateNewId(32) },
        { title: 'Питающий кабель', visited: false, id: this.generateNewId(32) },
        { title: 'Блок питания', visited: false, id: this.generateNewId(32) },
        { title: 'Цвет свечения', visited: false, id: 4},
        { title: 'Монтаж', visited: false, id: this.generateNewId(32) },
        { title: 'Корзина', visited: false, id: this.generateNewId(32) },
      ],
      glowsData: [  
        { label: 'Теплый', check: false, id: 123 },
        { label: 'Дневной', check: false, id: 321 },
        { label: 'Холодный', check: false, id: 22 }
      ],
      logic: false
    };

    this.onToggleCheck = this.onToggleCheck.bind(this);
    this.onToggleContent = this.onToggleContent.bind(this);
  }

  generateNewId(maxInd) {
    let key = '';
    for (let i = 1; i <= maxInd; i++) {
      key += Math.floor(Math.random() * Math.floor(9));
      if (i % 4 === 0 && i !== maxInd) {
        key += '-';
      }
    }
    return key;
  }

  onToggleContent(logic) {
    this.setState({ logic })
  }

  onToggleCheck(id) {
    this.setState(({ glowsData }) => {
      const index = glowsData.findIndex(elem => elem.id === id);
      const old = glowsData[index];
      const newItem = { ...old, check: !old.check };

      for (let i = 0; i < glowsData.length; i++) {
        if (i === index) {
          continue;
        }
        else {
          const element = glowsData[i];
          element.check = !newItem.check;
          if (!newItem.check) {
            element.check = !element.check;
          }
        }
      }

      const newArr = [...glowsData.slice(0, index), newItem, ...glowsData.slice(index + 1)];
      return {
        glowsData: newArr
      }
    })
  }

  render() {
    const { glowsData, logic, tabsItems, } = this.state;
    return (
      <div className='app'>
        <Header />
        <Content glowsData={glowsData} logic={logic} onToggleContent={this.onToggleContent} onToggleCheck={this.onToggleCheck}/>
        <Tabs tabsItems={tabsItems}/>
      </div>
    );
  }
};