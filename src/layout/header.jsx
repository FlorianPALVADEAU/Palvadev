import Image from 'next/image';
import favicon from '../assets/logo.png';
import style from'@/styles/Header.module.scss'
import Link from 'next/link'
import Button from '@/components/button'

export default function Header() {

  return (
    <>
      <header className={style.header}>
        <div className={style.headerContent}>

          <div className={style.palvadevNavigationContainer}>
            <Link href={'/'} className={style.palvadevLogo}><Image src={favicon} className={style.palvadevLogoImage}/></Link>
            <ul className={style.palvadevNagigation}>
              <li className={style.navigationPoint}><Link href={'/'}>Accueil</Link></li>
              <li className={style.navigationPoint}><Link href={'/'}>A propos</Link></li>
              <li className={style.navigationPoint}><Link href={'/'}>Réalisations</Link></li>
            </ul>
          </div>

          <div className={style.palvadevCta}>
            <Button variant={'transparent'} content={'Prendre RDV'}/>
            <Button variant={'constrained'} content={'Me contacter'}/>
          </div>

        </div>
      </header>
    </>
  );
}