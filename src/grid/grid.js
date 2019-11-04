import React from 'react';
import './grid.css'

const Grid = () => {
    return (
        <div>
            <h1>CSS GRID</h1>
            <div className="main_div">
                <div>
                    <div className="a_div">
                        <div>a01</div>
                        <div>a02</div>
                        <div>a03</div>
                    </div>
                    <div className="a_div">
                        <div>a04</div>
                        <div>a05</div>
                        <div>a06</div>
                    </div>
                    <div className="a_div">
                        <div>a07</div>
                        <div>a08</div>
                        <div>a09</div>
                    </div>
                    <div className="a_div">
                        <div>a10</div>
                        <div>a11</div>
                        <div>a12</div>
                    </div>
                </div>
                <div className='b_c_div'>
                    <div className="b_div">
                        <div>b01</div>
                        <div>b02</div>
                        <div>b03</div>
                    </div>

                    <div className="c_div">
                        <div>c01</div>
                        <div>c02</div>
                        <div>c03</div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Grid;
