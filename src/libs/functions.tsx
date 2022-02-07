import moment from "moment"
import { useRef, useEffect } from "react"
import { toast } from "react-toastify"

export const parseMinutes = (number: number) => {
  const seconds = Math.round(number)

  return `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${
    seconds % 60
  }`
}

export function openLink(event: any, link: string) {
  event.preventDefault()
  window.open(link)
}

export const openUrlExtern = (link: string) => {
  window.location.replace(link)
}

export const onSort = (arr: any[]) => {
  return arr.sort((a, b) => (a.title > b.title ? 1 : -1))
}

export function parseDate(number: number) {
  if (moment(number * 1000).format("LL") === moment().format("LL")) {
    return "Today"
  } else if (
    moment(number * 1000)
      .add(1, "days")
      .format("LL") === moment().format("LL")
  ) {
    return "Yesterday"
  }
  return `${moment(number * 1000).format("MMM DD, YYYY")}`
}

export function parseNumber(number: number) {
  if (number >= 999999) {
    return `${Math.round(number / 100000) / 10}M`
  } else if (number >= 999) {
    return `${Math.round(number / 100) / 10}K`
  } else {
    return `${number}`
  }
}

export const parseTimeAgo = (date: number) => {
  return `${moment(date).fromNow(true)}`
}

export const parseError = (error: any) => {
  let message = "Please try again later!"

  if (error && error.response && error.response.data) {
    message = error.response.data
  } else if (error) {
    message = error
  }

  toast.error(message)
}

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}
