import classes from './styles.module.css'

export default function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return <section className={classes.dashboard}>{children}</section>
}