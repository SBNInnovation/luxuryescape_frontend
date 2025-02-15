function formatDateToReadableDate(isoDate: string): string {
  const date = new Date(isoDate); // Parse the ISO date string

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options); // Format the date
}

export { formatDateToReadableDate };