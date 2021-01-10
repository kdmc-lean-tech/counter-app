
export const getImage = async() => {
  try {
    const apiKey = '5xwG83MG6Zy8pcijwi1B4lln8x7vzq5I';
    const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${ apiKey }`);
    const { data } = await response.json();
    const { url } = data[0];
    return url;
  } catch (error) {
    return error;
  }
}
