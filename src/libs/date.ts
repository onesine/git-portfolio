import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function dateTimeFormNow(date: Date) {
    return dayjs(date).fromNow();
}
