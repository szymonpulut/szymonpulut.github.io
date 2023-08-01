import { format, parseISO } from 'date-fns'

interface DateFormatterComponentProps {
  dateString: string
}

const DateFormatterComponent: React.FC<DateFormatterComponentProps> = ({
  dateString,
}) => {
  const date = parseISO(dateString)

  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatterComponent
