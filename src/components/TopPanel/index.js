import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toggleTheme from '../../store/actions/themes';
import './styles.css';



function TopPanel() {

    const [check, setCheck] = useState("");

    const current = useSelector(state => state.themeReducer.currentTheme);
    const colors = useSelector(state => state.themeReducer.colors);

    const dispatch  = useDispatch();

    useEffect(() => {
        document.body.style.backgroundColor = current.color;
        
        if (current.theme === 'Light') {
            setCheck("")
        } else {
            setCheck("checked")
        }
        

    }, [current.theme, current.color]);

    function clickCapture(theme, color) {
        if (theme === 'Light') {
            theme = 'Dark';
            color = colors.dark;
        } else {
            theme = 'Light';
            color = colors.light;
        }
       
        document.body.style.transition = '1s';
        document.body.style.backgroundColor = color;
    
        
        dispatch(toggleTheme(theme, color));
    }

    return (
        <div className="middlePanel" target={ current.theme }>
            <ul className="base" target={ current.theme }>
                <li><h2 className="text" target={ current.theme }>{ current.theme } Theme</h2></li>
                <li>  
                    <label className="switch">
                        <input type="checkbox" checked={check} onChange={() => clickCapture(current.theme, current.color)} className="themeButton" target={ current.theme }/>
                        <div></div>
                    </label>        
                </li>           
            </ul>
        </div>

    );
}





export default TopPanel;