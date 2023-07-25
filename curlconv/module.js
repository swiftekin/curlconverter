import { toJsonString } from 'curlconverter';

export function convertCurlToJson(curlCommand) {
  // Extract headers from the cURL command using regex
  const headersRegex = /-H\s+'([^']+)'/g;
  const headersMatch = curlCommand.match(headersRegex);
  const headers = headersMatch
    ? headersMatch.map(match => match.replace(/-H\s+'/, '').replace(/'$/, ''))
    : {};

  // Extract the method from the cURL command using regex
  const methodRegex = /(-X|--request)\s+([A-Za-z]+)/;
  const methodMatch = curlCommand.match(methodRegex);
  const method = methodMatch ? methodMatch[2].toUpperCase() : 'GET';

  // Extract data from the cURL command using regex
  const dataRegex = /--data\s+'([^']+)'/;
  const dataMatch = curlCommand.match(dataRegex);
  const data = dataMatch ? dataMatch[1] : null;

  const options = {
    headers,
    method,
    data,
    // Add any other options supported by the `toJsonString` function here
  };

  const harObject = toJsonString(curlCommand, options);
  return harObject;
}
