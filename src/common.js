import React from 'react';

class Dropdown extends React.Component{
    render(){
    const results = this.props.values.map((item)=><option key={item.id} id={item.id}>{item.name}</option>);
        return (
         <select onChange={this.props.onChanged} value={this.props.value}>{results}</select>
        )
    }
}

export default Dropdown