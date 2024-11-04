import styles from './Paragraph.module.css';

const Paragraph = () => {

    return (
        <div className={styles.para}>
            <h2>Paragraph</h2>
            <p className={styles.textbody}>
                TODO put GitHub link to this project here. My final project will use `phaser.js`, a JavaScript game library, to create a physics-based productivity application. I don't want to spoil the rest of it.
            </p>
        </div>
    )
}

export default Paragraph;