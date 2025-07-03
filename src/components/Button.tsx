interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  text: string
  onClick: (e: any) => void
}

const Button = (props: ButtonProps) => {
  const { type, text, onClick } = props;

  return (
    <div>
      <button type={type} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button