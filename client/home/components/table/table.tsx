import * as React from 'react';

class Table extends React.Component<any, any> {

 render () {
   return (
    <table className="Table">
      <thead>
        <tr>
          <th colSpan={5}> Table Component </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell A</td>
          <td>Cell B</td>
          <td>Cell C</td>
          <td>Cell D</td>
          <td>Cell E</td>
        </tr>
      </tbody>
    </table>
   );
 } 
};

export default Table;