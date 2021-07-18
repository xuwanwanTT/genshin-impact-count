import React from 'react';
import MySelect from '../select/MySelect.js';

const attributeDist = {
  '生命值': 4780,
  '攻击力': 311,
  '元素精通': 187,
  '生命值': '46.6%',
  '攻击力': '46.6%',
  '防御力': '58.3%',
  '暴击率': '31.1%',
  '暴击伤害': '62.2%',
  '治疗加成': '35.9%'
};

class PrimaryCount extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.itemSelect = this.itemSelect.bind(this);
  }

  itemSelect(data) {
    const type = this.props.type;
    const name = data.name;
    const value = attributeDist[name];
    this.setState({ type, name, value });
  }

  getValue() {
    return this.state;
  }

  render() {
    return (
      <div className={'count-number primary'}>
        <MySelect style={{ width: 90, marginRight: 10 }}
          onSelect={this.itemSelect}
          data={this.props.deputyArr} />
        <div style={{ paddingLeft: 10 }}>{this.state.value}</div>
      </div>
    );
  }

};

export default PrimaryCount;