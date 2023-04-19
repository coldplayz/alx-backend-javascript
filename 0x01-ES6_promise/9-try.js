export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const val = mathFunction();
    queue.push(val, 'Guardrail was processed');
  } catch (err) {
    queue.push(err.message, 'Guardrail was processed');
  }

  return queue;
}
