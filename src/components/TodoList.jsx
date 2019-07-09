import React from 'react';

// export default ({items}) => {
//     return (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>{item.text}</li>
//           ))}
//         </ul>
//     );
// }
export default (props) => {
    return (
        <ul>
          {props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
    );
}