import {useNavigate } from 'react-router-dom';

function Navbar() {
    const na = useNavigate();

    const handleButtonClick = () => {
        na('/header');
    };

    return (
        
            <button onClick={handleButtonClick}>Click me</button>
    );
}

export default Navbar;
