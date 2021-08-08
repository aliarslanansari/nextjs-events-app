import Link from 'next/link'

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a>{props.children}</a>
    </Link>
  )
}

export default Button
