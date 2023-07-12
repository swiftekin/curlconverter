import { toJsonString }  from 'curlconverter';

export function convertCurlToJson(curlCommand) {
  const options = {}; // Add any additional options here if needed
  const harObject = toJsonString(curlCommand, options);
  return harObject;
}


