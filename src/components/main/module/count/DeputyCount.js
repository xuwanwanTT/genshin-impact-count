import React from 'react';
import MySelect from '../select/MySelect.js';
import MyInput from '../input/MyInput.js';

const deputyNumArr = [0, 1, 2, 3];

class Deputy extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  itemSelect(type, i, data) {
    let temp = {};
    temp[type + i] = { type, name: data.name }
    this.setState(temp);
  }

  getValue() {
    const data = [];
    const type = this.props.type;
    deputyNumArr.forEach(s => {
      let temp = this.state[type + s];
      if (temp) {
        temp.value = this[type + s + 'DdeputyRef'].getValue();
        data.push(temp);
      }
    });
    return data;
  }

  render() {
    const { type, deputyArr } = this.props;
    return (
      <>
        {deputyNumArr.map((s, i) => (
          <div className={'count-number deputy'} key={'deputy' + i}>
            <MySelect style={{ width: 90, marginRight: 10 }}
              onSelect={this.itemSelect.bind(this, type, s)}
              data={deputyArr} />
            <MyInput ref={refs => this[type + s + 'DdeputyRef'] = refs} />
          </div>
        ))}
      </>
    );
  }
};

export default Deputy;