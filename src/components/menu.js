import Login from './login';
import MenuList from './menuList';

const Menu = () => {
    const _renderMenu = () => {
        if(false) {
            return <MenuList />
        } else {
            return <Login />
        }
    }

    return (
        <div className="menu-container p-shadow-5">
            {_renderMenu()}
        </div>
    )
}

export default Menu;