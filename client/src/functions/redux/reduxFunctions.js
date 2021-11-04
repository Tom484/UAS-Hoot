export const deleteReference = object => JSON.parse(JSON.stringify(object))

export const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    }
  }, initialValue)
}
