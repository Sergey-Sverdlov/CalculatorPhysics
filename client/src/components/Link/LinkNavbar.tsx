import * as React from 'react';
import {Link} from "../../data/dataNavbar";
import styles from './Link.module.scss'
import {useSelector, useDispatch} from "react-redux";
import {changeActivePage} from '../../features/ActivePage/ActivePageSlice'
import cn from 'classnames';
import {ActivePageType} from "../../features/ActivePage/ActivePageSlice";

type LinkNavbarProps = Link

const LinkNavbar: React.FC<LinkNavbarProps> = ({title, image}) => {
        const nameActive = {
            'Расход': 'consumption',
            'Давление': 'pressure',
            'Температура': 'temperature'
        }

        const dispatch = useDispatch()
        const activePage: ActivePageType = useSelector(state => state.activePage.isActivePage)
        const isActive: boolean = activePage === nameActive[title]


        const handleClick = (title: string) => {
            if (activePage !== nameActive[title]) {
                dispatch(changeActivePage(nameActive[title]))
            }
        }
        const linkClass = cn(styles.link, {
            [styles.link__selected]: isActive,
        });

        const textClass = cn(styles.text, {
            [styles.text__selected]: isActive
        })

        return (
            <div className={linkClass} onClick={() => handleClick(title)}>
                <h1 className={textClass}>{title}</h1>

                <img src={image} alt={title} height={70} width={70} className={styles.img}/>
            </div>
        );
    }
;

export default LinkNavbar;
