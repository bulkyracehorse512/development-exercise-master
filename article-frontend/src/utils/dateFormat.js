const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const formatDate = (date) => {
  // Convert python formatted date to article format
  date = date.split('T')[0].split('-')
  const month = monthNames[parseInt(date[1] - 1)]
  return `${month} ${date[2]}, ${date[0]}`
}
