export function showAlert(setShowAlert: React.Dispatch<React.SetStateAction<boolean>>) {
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
  }, 3000);
}