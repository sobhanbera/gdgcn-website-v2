import styles from '@/styles/components/heading.module.scss'

interface HeadingProps {
    children?: React.ReactNode
}
export function Heading({children}: HeadingProps) {
    return (
        <div className={styles.heading} data-aos="zoom-in-up">
            <p>{children}</p>
        </div>
    )
}
