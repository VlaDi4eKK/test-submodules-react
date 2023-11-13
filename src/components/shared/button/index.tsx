import type { ReactNode } from "react"
import { useMemo } from "react"

type Props = {
  children: ReactNode
  className?: string
  type?: "primary" | "secondary"
  onClick?: () => void
}

function Button({ children, type = "primary", className = "", onClick }: Props) {
  const btnTypeClass = useMemo(() => {
    if (type === "primary") {
      return "bg-blue"
    }

    if (type === "secondary") {
      return "bg-purple"
    }

    return ""
  }, [type])

  return (
    <button type="button" className={`flex ${btnTypeClass} ${className}`} onClick={onClick}>
      <div className="m-auto text-white">{children}</div>
    </button>
  )
}

export default Button
