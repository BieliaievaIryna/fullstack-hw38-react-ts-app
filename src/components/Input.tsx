interface InputProps {
  type: 'text' 
  placeholder: string
  onChange: (e: any) => void
}

const Input = (props: InputProps) => {
  const { type, placeholder, onChange } = props
  

  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input