import React from 'react';
import './count.css';
import MySelect from '../select/MySelect.js';
import PrimaryCount from './PrimaryCount.js';
import DeputyCount from './DeputyCount.js';

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

const relicsArr = ['生之花', '死之羽', '时之沙', '空之杯', '理之冠',];

const deputyArr = [
  { name: '暴击率' },
  { name: '暴击伤害' },
  { name: '攻击力' }
];

class Count extends React.Component {
  constructor() {
    super();
    this.state = {
      '生之花': { type: '生之花', main: '生命值', value: 4780 },
      '死之羽': { type: '死之羽', main: '攻击力', value: 311 },
    };
    this.countAll = this.countAll.bind(this);
  }

  countAll() {
    const data = {
      '生之花': { primary: { type: '生之花', main: '生命值', value: 4780 } },
      '死之羽': { primary: { type: '死之羽', main: '攻击力', value: 311 } },
    };
    relicsArr.forEach((s, i) => {
      if (!data[s]) data[s] = {};
      if (i > 1) {
        data[s].primary = this[s + 'PrimaryRef'].getValue();
      }
      data[s].deputy = this[s + 'DeputyRef'].getValue();
    });
    console.log(data);
  }

  render() {
    return (
      <>

        <div className={'count-item-wrap weapon'}>
          <div className={'title'}>武器</div>
          <MySelect data={[{ name: 1 }, { name: 2 }, { name: 3 }]} />
        </div>

        <div className={'count-item-wrap relics'}>
          <div className={'title'}>圣遗物</div>
          <MySelect style={{ marginRight: 20 }} data={[{ name: '炽烈的炎之魔女' }, { name: '角斗士的终幕礼' }, { name: '被怜爱的少女' }]} />
          <MySelect data={[{ name: '炽烈的炎之魔女' }, { name: '角斗士的终幕礼' }, { name: '被怜爱的少女' }]} />
        </div>

        <div className={'relics-info-wrap'}>
          {relicsArr.map((s, i) => (
            <div key={'relics' + i} className={'relics-item'}>
              <div className={'title'}>{s}</div>

              <div className={'relics-item-info'}>
                <div className={'title'}>主词条</div>
                {s === '生之花' ? (
                  <div className={'count-number'}>
                    <div style={{ height: 34, paddingLeft: 10, width: 90, marginRight: 10, boxSizing: 'border-box' }}>生命值</div>
                    <div style={{ paddingLeft: 10 }}>{4780}</div>
                  </div>
                ) : (s === '死之羽' ? (
                  <div className={'count-number'}>
                    <div style={{ height: 34, paddingLeft: 10, width: 90, marginRight: 10, boxSizing: 'border-box' }}>攻击力</div>
                    <div style={{ paddingLeft: 10 }}>{311}</div>
                  </div>
                ) : <PrimaryCount type={s} deputyArr={deputyArr}
                  ref={refs => this[s + 'PrimaryRef'] = refs}
                />)}
              </div>

              <div className={'relics-item-info'}>
                <div className={'title'}>副词条</div>
                <DeputyCount type={s} deputyArr={deputyArr}
                  ref={refs => this[s + 'DeputyRef'] = refs} />
              </div>
            </div>
          ))}
        </div>

        <div className={'count-button'} onClick={this.countAll}>计算</div>

        <div className={'count-result'}>{this.state.count}</div>

      </>
    )
  }
}

export default Count;