import {clsx, type classValue } from 'clsx'
import exp from 'constants'
import { twMerge} from "tailwind-merge"

export function cn(...input: classValue []){
  return twMerge(clsx(inputs))
}