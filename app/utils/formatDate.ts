export function formatDate(fullDate: string) {
    const formatter = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' });
    const formattedDate = formatter.format(new Date(fullDate));

    return formattedDate;
};