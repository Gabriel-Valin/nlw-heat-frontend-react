import styles from './styles.module.scss'

import logoImage from '../../assets/logo.svg'

export function MessageList () {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImage} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Chama neném!!!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Gabriel-Valin.png" alt="" />
                        </div>
                        <span>Gabriel Valin</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Chama neném!!!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Gabriel-Valin.png" alt="" />
                        </div>
                        <span>Gabriel Valin</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Chama neném!!!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Gabriel-Valin.png" alt="" />
                        </div>
                        <span>Gabriel Valin</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}