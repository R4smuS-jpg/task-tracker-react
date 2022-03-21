function validateAvatarUpload(value) {
  // Всё ещё не работает для самого левого формата
  const fileExtensionRegExp = /^\w\.png|jpeg|jpg$/;

  if (fileExtensionRegExp.test(value)) {
    return ""
  } else {
    return "Avatar file must have png/jpg/jpeg extension only!"
  }

}

export default validateAvatarUpload;