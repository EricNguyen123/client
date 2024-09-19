export const handleAuthErrors = (message: string) => {
  switch (message) {
    case "Your login credentials are incorrect. Please try again.":
      return "errors.invalidField";
    case "inactive":
      return "errors.inactive";
    default:
      return "errors.unknown";
  }
};

export const handleAuthSuccess = (message: string) => {
  switch (message) {
    case "sent email success":
      return "message.sentEmailSuccess";
    case "reset password success":
      return "message.resetPasswordSuccess";
    case "setting password success":
      return "message.settingPasswordSuccess";
    default:
      return "errors.unknown";
  }
};
