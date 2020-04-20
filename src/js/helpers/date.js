import { format } from "date-fns";
/**
 *
 * @param {string} str -> дата в виде строки
 * @param {string} type -> шаблон в виде строки
 * @return {date}
 */
export function formatDate(str, type) {
  const date = new Date(str);
  return format(date, type);
}
