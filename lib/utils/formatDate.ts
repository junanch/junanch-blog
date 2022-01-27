import dayjs from 'dayjs'

const formatDate = (date: string, template?: string) => {
  return dayjs(date)?.format?.(template)
}

export default formatDate
