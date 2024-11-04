import styles from './Paragraph.module.css';

const Paragraph = () => {

    return (
        <div className={styles.para}>
            <h2>Paragraph</h2>
            <p className={styles.textbody}>
                <a href={'https://github.com/jckarinen/csci-331-next'}>GitHub link for this project.</a> My final project will use `phaser.js`, a JavaScript game library, to create a physics-based productivity application. I don't want to spoil the rest of it.
            </p>
        </div>
    )
}

export default Paragraph;