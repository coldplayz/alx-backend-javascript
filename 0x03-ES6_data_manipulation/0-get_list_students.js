export default function getListStudents() {
  // Create student objects
  const g = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const j = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const s = {
    id: 3,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  return [g, j, s];
}
