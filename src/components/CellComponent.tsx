import React, { FC } from 'react'
import { Cell } from '../models/Cell';



interface CellProps {
   cell: Cell;
   celected: boolean;
   click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, celected, click }) => {
   return (
      <div
         className={['cell', cell.color, celected ? 'selected' : ''].join(' ')}
         onClick={()=>click(cell)}
         style={{background:cell.available && cell.figure ? 'green' : ''  }}
          >
            {cell.available && !cell.figure && <div className='available'/>}
         {cell.figure?.logo && <img src={cell.figure.logo}></img>}
      </div>
   )
}


export default CellComponent;