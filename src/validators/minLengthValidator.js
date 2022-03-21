function validateFieldLength(fieldName, value) {
  if (value.length < 3) {
    return fieldName + " must contain at least 3 characters!"
  }
}

export default validateFieldLength;