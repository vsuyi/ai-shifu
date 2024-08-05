import styles from './NavBody.module.scss';
import LogoCircle from '@Components/logo/LogoCircle';
import { productName, slogan } from '@constants/productContants';
import MainButton from '@Components/MainButton.jsx';

export const NavBody = (props) => {
  const onLoginBtnClickHandler = () => {
    console.log('login btn click');
  }


  return (<div className={styles.navBody}>
    <LogoCircle />
    <div className={styles.productName}>{productName}</div>
    <div className={styles.slogan}>{slogan}</div>
    <div className={styles.btnWrapper}>
      <MainButton width={185} height={40} onClick={onLoginBtnClickHandler}>登录/注册</MainButton>
    </div>
  </div>)
}

export default NavBody;