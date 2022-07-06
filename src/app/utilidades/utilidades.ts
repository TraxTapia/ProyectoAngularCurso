export function toBase64(file: File) {
  return new Promise((resolve, rejects) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => rejects(error);
  });
}
