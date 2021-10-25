import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';



const Navbar = () => {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const {isLoggedIn, changeAuthStatus} = useContext(AuthContext); 
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return(
    <nav style={{ background: theme.background, color:theme.text, height:'180px'}}>
    <h2 style={{ textAlign:'center' }}>
        Bora Dörtoluklar
    </h2>
    <div style={{textAlign:'center'}}> 
        <button className='ui button primary' onClick ={changeTheme}>Switch Theme</button>
    </div>
    <p 
        style={{textAlign:'center'}}
        onClick={changeAuthStatus}
    >
        {isLoggedIn ? 'Logged In' : 'Logged Out'}
    </p>
    <div className='ui three buttons'>
        <button className='ui button'>Overview</button>
        <button className='ui button'>Contact</button>
        <button className='ui button'>Support</button>
    </div>
</nav>
    );
}
export default Navbar;
                                            // Consumer yapısıs bu şekilde fonksiyon çağırımı var.