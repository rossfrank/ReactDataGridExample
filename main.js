import React from 'react';
import ReactDOM from 'react-dom';
import ReactDataGrid from 'react-data-grid';

var inputJSON = require('./../python_out.json');

//var PythonShell = require('python-shell');

var file = inputJSON[(Object.keys(inputJSON)[0])];
var array = Object.keys(file);
var index = array.indexOf('size');
if (index > -1) {
  array.splice(index, 1);
}
var data = file[array[0]];

class Grid extends React.Component {
  constructor(props){
    super(props);
    this.state = {columns : this.getCol()};
  }

  rowGetter(i){
    /*
    var row = {id: i};
    for(j = 0; j < data[i].length; i++){
      row[j] = data[i][j];
    }
    return row;
    */
    ///*
    return {id: i , 0: data[i][0], 1: data[i][1], 2: data[i][2],
      3: data[i][3], 4: data[i][4], 5: data[i][5], 6: data[i][6],
      7: data[i][7], 8: data[i][8], 9: data[i][9]};
    //*/
  }

  getCol(){
    /*var cols = [{ key: 'id', name: 'ID', width: 40, locked: true, resizable: true}];
    for (i = 0; i < data[0].length; i++) {
      cols.push({ key: i, name: i, width:190, resizable: true})
    }
    console.log(cols)
    return cols;*/
    return [{ key: 'id', name: 'ID', width: 40, locked: true, resizable: true},
            { key: 0, name: '1', width:190, resizable: true},
            { key: 1, name: '2', width:60, resizable: true},
            { key: 2, name: '3', width:60, resizable: true},
            { key: 3, name: '4', width:60, resizable: true},
            { key: 4, name: '5', width:60, resizable: true},
            { key: 5, name: '6', width:60, resizable: true},
            { key: 6, name: '7', width:80, resizable: true},
            { key: 7, name: '8', width:60, resizable: true},
            { key: 8, name: '9', width:60, resizable: true},
            { key: 9, name: '10', width:60, resizable: true}];
  }

  render(){
    return(
      <div>
        <ReactDataGrid
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          rowsCount={data.length}
        />
      </div>
    );
  }
}

ReactDOM.render(<Grid />, document.getElementById('app'));
