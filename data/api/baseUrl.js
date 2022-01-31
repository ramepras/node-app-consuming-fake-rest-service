export default function getBaseUrl() {
  const inDev = window.location.hostname === 'localhost';
  return inDev ? 'http://localhost:3001/' : '/';
}

const baseUrl = "http://localhost:3001/";

export {baseUrl}
