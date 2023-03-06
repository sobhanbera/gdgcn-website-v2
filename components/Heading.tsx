import styles from '@/styles/components/heading.module.scss'

interface HeadingProps {
    children?: React.ReactNode
}
export function Heading({children}: HeadingProps) {
    return (
        <div className={styles.heading}>
            <p>{children}</p>
        </div>
    )
}
